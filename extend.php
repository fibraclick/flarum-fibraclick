<?php

namespace BotFactory\FibraClick;

use BotFactory\FibraClick\Extenders\BindQueueFailer;
use BotFactory\FibraClick\Listeners\ContentListener;
use BotFactory\FibraClick\Listeners\DiscussionStartedListener;
use BotFactory\FibraClick\Listeners\FlagDeleted;
use BotFactory\FibraClick\Listeners\UserSavingListener;
use BotFactory\FibraClick\Listeners\UserRegisteredListener;
use BotFactory\FibraClick\Serializers\AddFlairFields;
use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Discussion\Event\Started;
use Flarum\Extend;
use Flarum\Flags\Event\Deleting;
use Flarum\User\Event\Registered;
use Flarum\User\Event\Saving;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less')
        ->content(ContentListener::class),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    (new Extend\Settings)
        ->serializeToForum('fibraclick.highlightKeywords', 'fibraclick.highlightKeywords')
        ->serializeToForum('fibraclick.ads.postsInterval', 'fibraclick.ads.postsInterval')
        ->serializeToForum('fibraclick.ads.show', 'fibraclick.ads.show')
        ->serializeToForum('fibraclick.ads.betweenPosts', 'fibraclick.ads.betweenPosts')
        ->serializeToForum('fibraclick.ads.sidebar', 'fibraclick.ads.sidebar')
        ->serializeToForum('fibraclick.analytics.trackingCode', 'fibraclick.analytics.trackingCode')
        ->serializeToForum('fibraclick.flair.show', 'fibraclick.flair.show'),

    new BindQueueFailer(),

    (new Extend\Event)
        ->listen(Started::class, DiscussionStartedListener::class)
        ->listen(Registered::class, UserRegisteredListener::class),

    (new Extend\ApiController(ShowDiscussionController::class))
        ->addInclude('user'),

    (new Extend\ApiSerializer(UserSerializer::class))
        ->attributes(AddFlairFields::class),

    (new Extend\Event())
        ->listen(Saving::class, UserSavingListener::class),

    // listen to flag deletion
    (new Extend\Event())
        ->listen(Deleting::class, FlagDeleted::class),

    // Observe flag creation
    (new Extend\ServiceProvider())
        ->register(ServiceProvider::class)
];
