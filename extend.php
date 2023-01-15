<?php

namespace FibraClick;

use FibraClick\Console\DeleteOldPII;
use FibraClick\Extenders\BindQueueFailer;
use FibraClick\Listeners\ContentListener;
use FibraClick\Listeners\DiscussionStartedListener;
use FibraClick\Listeners\FlagDeleted;
use FibraClick\Listeners\UserRegisteredListener;
use FibraClick\Listeners\UserSavingListener;
use FibraClick\Middlewares\AuthHeaderMiddleware;
use FibraClick\Middlewares\DisableCacheMiddleware;
use FibraClick\Serializers\AddFlairFields;
use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Api\Serializer\UserSerializer;
use Flarum\Discussion\Event\Started;
use Flarum\Extend;
use Flarum\Flags\Event\Deleting;
use Flarum\Http\Middleware\AuthenticateWithSession;
use Flarum\Http\Middleware\InjectActorReference;
use Flarum\User\Event\Registered;
use Flarum\User\Event\Saving;
use Flarum\User\User;
use Illuminate\Console\Scheduling\Event;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__ . '/js/dist/forum.js')
        ->css(__DIR__ . '/resources/less/forum.less')
        ->content(ContentListener::class),

    (new Extend\Frontend('admin'))
        ->js(__DIR__ . '/js/dist/admin.js'),

    (new Extend\Settings)
        ->serializeToForum('fibraclick.highlightKeywords', 'fibraclick.highlightKeywords')
        ->serializeToForum('fibraclick.consent', 'fibraclick.consent')
        ->serializeToForum('fibraclick.ads.postsInterval', 'fibraclick.ads.postsInterval')
        ->serializeToForum('fibraclick.ads.show', 'fibraclick.ads.show')
        ->serializeToForum('fibraclick.ads.betweenPosts', 'fibraclick.ads.betweenPosts')
        ->serializeToForum('fibraclick.ads.sidebar', 'fibraclick.ads.sidebar')
        ->serializeToForum('fibraclick.analytics.trackingCode', 'fibraclick.analytics.trackingCode')
        ->serializeToForum('fibraclick.flair.show', 'fibraclick.flair.show')
        ->serializeToForum('fibraclick.plausible.scriptDomain', 'fibraclick.plausible.scriptDomain')
        ->serializeToForum('fibraclick.plausible.siteDomain', 'fibraclick.plausible.siteDomain'),

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
        ->register(ServiceProvider::class),

    // Add X-Authenticated and Cache-Control headers
    // To forum views:
    (new Extend\Middleware('forum'))
        ->insertAfter(AuthenticateWithSession::class, AuthHeaderMiddleware::class)
        ->insertBefore(InjectActorReference::class, DisableCacheMiddleware::class),

    // To admin views:
    (new Extend\Middleware('admin'))
        ->insertAfter(AuthenticateWithSession::class, AuthHeaderMiddleware::class),

    // To API:
    (new Extend\Middleware('api'))
        ->insertAfter(AuthenticateWithSession::class, AuthHeaderMiddleware::class)
        ->insertBefore(InjectActorReference::class, DisableCacheMiddleware::class),

    // Schedule command to delete old PII
    (new Extend\Console())
        ->command(DeleteOldPII::class)
        ->schedule(DeleteOldPII::class, function (Event $schedule) {
            $schedule->onOneServer()->daily();
        }),

    // API endpoint to delete PII for user
    (new Extend\Routes('api'))
        ->post('/users/{id}/delete-pii', 'users.delete-pii', Controllers\DeleteUserPIIController::class),
];
