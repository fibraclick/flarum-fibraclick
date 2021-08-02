<?php


namespace FibraClick\Jobs;


use Flarum\Discussion\Discussion;
use Flarum\Http\UrlGenerator;
use Flarum\Settings\SettingsRepositoryInterface;
use GuzzleHttp\Client;


class SendDiscussionToTelegramJob
{
    /**
     * @var Discussion
     */
    private $discussion;

    public function __construct(Discussion $discussion)
    {
        $this->discussion = $discussion;
    }

    public function handle(SettingsRepositoryInterface $settings, UrlGenerator $urlGenerator)
    {
        $token = $settings->get('fibraclick.telegram.token');
        $channel = $settings->get('fibraclick.telegram.discussionsChannel');

        $title = htmlspecialchars($this->discussion->title);
        $author = $this->discussion->user->username;
        $url = $urlGenerator->to('forum')->route('discussion', ['id' => $this->discussion->id]);
        $tags = $this->discussion->tags()->get()->map([$this, 'mapTag'])->implode(' ');

        if ($tags != "") {
            $tagLine = "\n🏷️ " . $tags;
        }
        else {
            $tagLine = "";
        }

        $text = sprintf("📰 <strong>%s</strong>\n👤 <em>%s</em>%s\n🌍 %s", $title, $author, $tagLine, $url);

        $client = new Client([
            'base_uri' => 'https://api.telegram.org/bot' . $token . '/',
        ]);

        $client->post('sendMessage', [
            'json' => [
                'chat_id' => $channel,
                'text' => $text,
                'parse_mode' => 'HTML',
            ],
        ]);
    }

    public function mapTag($tag) {
        return "#" . $tag->slug;
    }
}
