<?php


namespace BotFactory\FibraClick\Jobs;


use Flarum\Flags\Flag;
use Flarum\Http\UrlGenerator;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\User;
use GuzzleHttp\Client;

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

    public function handle(SettingsRepositoryInterface $settings, UrlGenerator $url)
    {
        $token = $settings->get('fibraclick.telegram.token');
        $channel = $settings->get('fibraclick.telegram.flagsChannel');

        $text = Telegram::buildFlagMessage($url, $this->flag, $this->deletedBy);

        if ($text == null) {
            return;
        }

        $client = new Client([
            'base_uri' => 'https://api.telegram.org/bot' . $token . '/',
        ]);

        if ($channel[0] != "@") {
            $channel = "@" . $channel;
        }

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
}
