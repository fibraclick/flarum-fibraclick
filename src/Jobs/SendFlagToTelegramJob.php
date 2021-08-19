<?php


namespace FibraClick\Jobs;


use Flarum\Flags\Flag;
use Flarum\Http\UrlGenerator;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Psr\Log\LoggerInterface;

class SendFlagToTelegramJob
{
    /**
     * @var Flag
     */
    private $flag;
    /**
     * @var User|null
     */
    private $deletedBy;

    public function __construct(Flag $flag, User $deletedBy = null)
    {
        $this->flag = $flag;
        $this->deletedBy = $deletedBy;
    }

    public function handle(SettingsRepositoryInterface $settings, UrlGenerator $url, LoggerInterface $logger)
    {
        $token = $settings->get('fibraclick.telegram.token');
        $channel = $settings->get('fibraclick.telegram.flagsChannel');

        $as = $this->flag->type == 'approval' ? $this->getAS($logger, $this->flag->post->ip_address) : null;

        $text = Telegram::buildFlagMessage($url, $this->flag, $this->deletedBy, $as);

        if ($text == null) {
            return;
        }

        $client = new Client([
            'base_uri' => 'https://api.telegram.org/bot' . $token . '/',
        ]);

        if ($this->deletedBy == null) {
            $response = $client->post('sendMessage', [
                'json' => [
                    'chat_id' => $channel,
                    'text' => $text,
                    'parse_mode' => 'HTML',
                    'disable_web_page_preview' => true
                ],
            ]);

            $messageId = json_decode($response->getBody())->result->message_id;

            $logger->info(sprintf("Sent flag to Telegram, message ID: %s", $messageId));

            $this->flag->telegram_message_id = $messageId;
            $this->flag->save();
        } else if (!empty($this->flag->telegram_message_id)) {
            $client->post('editMessageText', [
                'json' => [
                    'chat_id' => $channel,
                    'message_id' => $this->flag->telegram_message_id,
                    'text' => $text,
                    'parse_mode' => 'HTML',
                    'disable_web_page_preview' => true
                ],
            ]);
        }
    }

    private function getAS(LoggerInterface $logger, $ip_address): ?string
    {
        $client = new Client([
            'base_uri' => 'http://ip-api.com/csv/',
        ]);

        try {
            $response = $client->get($ip_address . '?fields=status,countryCode,as');
            $body = $response->getBody()->getContents();
            $parts = explode(',', $body);
            if ($parts[0] == 'success') {
                $as = trim($parts[2], '"');
                return sprintf('%s (%s)', $as, $parts[1]);
            } else {
                $logger->error('IP lookup for ' . $ip_address . ' failed: ' . $body);
            }
        } catch (GuzzleException $e) {
            $logger->error($e);
        }

        return null;
    }
}
