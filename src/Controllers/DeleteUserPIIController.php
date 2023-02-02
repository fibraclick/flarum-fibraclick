<?php

namespace FibraClick\Controllers;

use Flarum\Bus\Dispatcher;
use Flarum\Http\RequestUtil;
use Flarum\Post\Post;
use Flarum\User\Command\DeleteAvatar;
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
    private Dispatcher $bus;

    public function __construct(ConnectionInterface $db, Dispatcher $bus)
    {
        $this->db = $db;
        $this->bus = $bus;
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

        $this->bus->dispatch(
            new DeleteAvatar($userId, $actor)
        );

        return (new Response())->withStatus(204);
    }
}
