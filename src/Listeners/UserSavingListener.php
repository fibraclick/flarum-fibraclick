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

        if ($flairName != null) {
            $event->user->flair_name = $flairName;
        }

        $flairColor = Arr::get($event->data, 'attributes.flairColor');

        if ($flairColor != null) {
            $event->user->flair_color = $flairColor;
        }
    }
}
