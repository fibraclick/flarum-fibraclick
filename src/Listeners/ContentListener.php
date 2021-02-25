<?php


namespace BotFactory\FibraClick\Listeners;


use Flarum\Frontend\Document;
use Flarum\Settings\SettingsRepositoryInterface;
use Psr\Http\Message\ServerRequestInterface;

class ContentListener
{
    /**
     * @var Document
     */
    private $document;
    /**
     * @var ServerRequestInterface
     */
    private $request;
    /**
     * @var SettingsRepositoryInterface
     */
    private $settings;

    public function __construct(SettingsRepositoryInterface $settings)
    {
        $this->settings = $settings;
    }

    /**
     * Get current Flarum document and current Server Request
     *
     * @param Document $flarumDocument
     * @param ServerRequestInterface $serverRequestInterface
     */
    public function __invoke(Document $flarumDocument, ServerRequestInterface $serverRequestInterface)
    {
        $this->document = $flarumDocument;
        $this->request = $serverRequestInterface;

        $this->addThemeColor();
        $this->addFont();

        if ($this->settings->get("fibraclick.ads.load") == '1') {
            $this->addAdSenseAndConsent();
        }
    }

    private function addThemeColor()
    {
        $this->document->meta['theme-color'] = '#ffffff';
    }

    private function addFont()
    {
        $this->document->head[] = '<link rel="stylesheet" href="//fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700,600">';
    }

    private function addAdSenseAndConsent()
    {
        $this->document->head[] = <<<EOT
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<script>console.log('Pausing ads...');(adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=1</script>

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
            console.log('Resuming ads...');
            (adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=0;
        },
        "onInitialise": function (status) {
            if (status == 'dismiss') {
                console.log('Resuming ads...');
                (adsbygoogle=window.adsbygoogle||[]).pauseAdRequests=0;
            }
        }
    });
});
</script>
EOT;
    }

}
