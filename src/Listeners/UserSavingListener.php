<?php


namespace FibraClick\Listeners;


use Flarum\User\Event\Saving;
use Illuminate\Support\Arr;

class UserSavingListener
{
    public function handle(Saving $event)
    {
        if (!$event->actor->isAdmin()) {
            return;
        }

        $flairName = Arr::get($event->data, 'attributes.flairName');

        if (isset($flairName)) {
            $event->user->flair_name = !empty($flairName) ? $flairName : null;
        }

        $flairColor = Arr::get($event->data, 'attributes.flairColor');

        if (isset($flairColor)) {
            $event->user->flair_color = !empty($flairColor) ? $flairColor : null;
        }
    }
}
