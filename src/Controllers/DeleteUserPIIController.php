<?php

namespace FibraClick\Controllers;

use Flarum\Http\RequestUtil;
use Flarum\Post\Post;
use Flarum\User\User;
use Illuminate\Database\ConnectionInterface;
use Illuminate\Support\Arr;
use Laminas\Diactoros\Response;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\RequestHandlerInterface;

class DeleteUserPIIController implements RequestHandlerInterface
{
    private ConnectionInterface $db;

    public function __construct(ConnectionInterface $db)
    {
        $this->db = $db;
    }

    public function handle(ServerRequestInterface $request): ResponseInterface
    {
        $actor = RequestUtil::getActor($request);

        $userId = Arr::get($request->getQueryParams(), 'id');
        User::findOrFail($userId);

        $actor->assertAdmin();

        Post::where('user_id', $userId)
            ->update(['ip_address' => null]);

        $this->db->table('kilowhat_audit_log')
            ->where('actor_id', $userId)
            ->delete();

        return (new Response())->withStatus(204);
    }
}
