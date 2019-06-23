<?php

/*
 * This file is part of botfactoryit/fibraclick.
 *
 * Copyright (c) 2019 Matteo Contrini.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace BotFactory\FibraClick;

use Flarum\Extend;
use Flarum\Frontend\Document;
use Illuminate\Contracts\Events\Dispatcher;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->content(function (Document $document) {
            $document->head[] = '<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700,600">';
            $document->head[] = <<<EOT
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>(adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=1</script>

<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.css" />
<script src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"></script>
<script>
window.addEventListener("load", function() {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
            "background": "#efefef",
            "text": "#404040"
            },
            "button": {
            "background": "#5bb75b",
            "text": "#ffffff"
            }
        },
        "theme": "edgeless",
        "position": "bottom-right",
        "dismissOnScroll": 500,
        "blacklistPage": ['/p/1-privacy'],
        "content": {
            "message": "Questo sito utilizza cookie di profilazione di terze parti per mostrare pubblicità in linea con le tue preferenze.<br><br>Se vuoi saperne di più o negare il consenso all'installazione di cookie, consulta l'informativa sulla privacy.<br><br>Chiudendo questo banner o scorrendo questa pagina acconsenti all'uso dei cookie.",
            "dismiss": "Accetto",
            "link": "Leggi l'informativa",
            "href": "/p/1-privacy"
        },
        "onStatusChange": function(status, chosenBefore) {
            (adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=0;
        },
        "onInitialise": function (status) {
            if (status == 'dismiss') {
                (adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=0;
            }
        }
    });
});
</script>
EOT;
        }),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js'),

    function (Dispatcher $events) {
        $events->subscribe(LoadSettings::class);
    }

];
