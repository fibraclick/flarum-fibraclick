<?php


namespace FibraClick\Listeners;


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

        if ($this->settings->get("fibraclick.consent") == '1') {
            $this->addConsent();
        }

        if ($this->settings->get("fibraclick.ads.load") == '1') {
            $this->addAdSense();
        }

        $trackingCode = $this->settings->get("fibraclick.analytics.trackingCode");

        if ($trackingCode != "") {
            $this->addAnalytics($trackingCode);
        }

        $plausibleScriptDomain = $this->settings->get("fibraclick.plausible.scriptDomain");
        $plausibleSiteDomain = $this->settings->get("fibraclick.plausible.siteDomain");

        if ($plausibleScriptDomain != "" && $plausibleSiteDomain != "") {
            $this->addPlausible($plausibleScriptDomain, $plausibleSiteDomain);
        }
    }

    private function addThemeColor()
    {
        $this->document->meta['theme-color'] = '#ffffff';
    }

    private function addFont()
    {
        $this->document->head[] = '<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Open+Sans:400italic,700italic,400,700,600">';
    }

    private function addConsent()
    {
        $this->document->head[] = <<<EOT
        <script async type="text/javascript" src="https://clickio.mgr.consensu.org/t/consent_225036.js"></script>
EOT;
    }

    private function addAdSense()
    {
        $this->document->head[] = <<<EOT
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
EOT;
    }

    private function addAnalytics($trackingCode)
    {
        $this->document->head[] = <<<EOT
<script async src="https://www.googletagmanager.com/gtag/js?id=$trackingCode"></script>
<script type="text/javascript">
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '$trackingCode', { 'anonymize_ip': true });
</script>
EOT;
    }

    private function addPlausible(string $plausibleScriptDomain, string $plausibleSiteDomain)
    {
        $this->document->head[] = <<<EOT
<script defer data-domain="$plausibleSiteDomain" src="https://$plausibleScriptDomain/js/script.outbound-links.js"></script>
EOT;
    }
}
