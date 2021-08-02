<?php


namespace FibraClick\Listeners;


use Flarum\User\Event\Registered;
use Flarum\User\User;

class UserRegisteredListener
{
    public function handle(Registered $event)
    {
        foreach (['post', 'user'] as $key) {
            $event->user->setPreference(
                User::getNotificationPreferenceKey("{$key}Mentioned", 'email'),
                true
            );
        }

        $event->user->save();
    }
}
