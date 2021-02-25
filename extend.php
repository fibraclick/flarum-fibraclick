<?php

namespace BotFactory\FibraClick;

use BotFactory\FibraClick\Extenders\BindQueueFailer;
use BotFactory\FibraClick\Listeners\ContentListener;
use BotFactory\FibraClick\Listeners\DiscussionStartedListener;
use Flarum\Discussion\Event\Started;
use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->content(ContentListener::class),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    (new Extend\Settings)
        ->serializeToForum('fibraclick.highlightKeywords', 'fibraclick.highlightKeywords')
        ->serializeToForum('fibraclick.ads.postsInterval', 'fibraclick.ads.postsInterval')
        ->serializeToForum('fibraclick.ads.show', 'fibraclick.ads.show')
        ->serializeToForum('fibraclick.ads.betweenPosts', 'fibraclick.ads.betweenPosts')
        ->serializeToForum('fibraclick.ads.sidebar', 'fibraclick.ads.sidebar'),

    new BindQueueFailer(),

    (new Extend\Event)
        ->listen(Started::class, DiscussionStartedListener::class)
];
