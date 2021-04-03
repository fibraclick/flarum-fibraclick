<?php


namespace BotFactory\FibraClick;


use BotFactory\FibraClick\Observers\FlagObserver;
use Flarum\Flags\Flag;
use Flarum\Foundation\AbstractServiceProvider;

class ServiceProvider extends AbstractServiceProvider
{
    public function boot()
    {
        Flag::observe(FlagObserver::class);
    }
}
