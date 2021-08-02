<?php


namespace FibraClick\Extenders;


use Flarum\Extend\ExtenderInterface;
use Flarum\Extension\Extension;
use Illuminate\Contracts\Container\Container;
use Illuminate\Database\ConnectionResolverInterface;
use Illuminate\Queue\Failed\DatabaseFailedJobProvider;

class BindQueueFailer implements ExtenderInterface
{

    public function extend(Container $container, Extension $extension = null)
    {
        $container->bind('queue.failer', function () use ($container) {
            return new DatabaseFailedJobProvider(
                $container->make(ConnectionResolverInterface::class),
                'flarum',
                'queue_failed'
            );
        });
    }
}
