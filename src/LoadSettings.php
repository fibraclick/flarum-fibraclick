<?php

namespace BotFactory\FibraClick;

use Flarum\Api\Event\Serializing;
use Flarum\Api\Serializer\ForumSerializer;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Events\Dispatcher;

class LoadSettings
{
    private $settings;

    private $settingsToLoad = [
        'highlightKeywords',
        'ads.postsInterval',
        'ads.show',
        'ads.betweenPosts',
        'ads.sidebar'
    ];

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    public function subscribe(Dispatcher $events)
    {
        $events->listen(Serializing::class, [$this, 'prepareApiAttributes']);
    }

    public function prepareApiAttributes(Serializing $event)
    {
        if ($event->isSerializer(ForumSerializer::class)) {
            $additionalSettings = [];

            foreach($this->settingsToLoad as $key) {
                $additionalSettings[$this->prefix($key)] = $this->settings->get($this->prefix($key));
            }

            $event->attributes = array_merge($event->attributes, $additionalSettings);
        }
    }

    protected function prefix($key)
    {
        return "fibraclick.$key";
    }
}
