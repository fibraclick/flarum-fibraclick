<?php

namespace BotFactory\FibraClick;

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
        ->serializeToForum('fibraclick.ads.sidebar', 'fibraclick.ads.sidebar')
];
