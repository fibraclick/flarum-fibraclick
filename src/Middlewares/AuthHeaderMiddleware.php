<?php


namespace FibraClick\Middlewares;


use Flarum\Http\RequestUtil;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Psr\Http\Server\MiddlewareInterface;
use Psr\Http\Server\RequestHandlerInterface;

class AuthHeaderMiddleware implements MiddlewareInterface
{
    public function process(ServerRequestInterface $request, RequestHandlerInterface $handler): ResponseInterface
    {
        $response = $handler->handle($request);

        $loggedIn = !RequestUtil::getActor($request)->isGuest();

        return $response->withHeader('X-Authenticated', (int)$loggedIn);
    }
}
