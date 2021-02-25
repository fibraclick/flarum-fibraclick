<?php


namespace BotFactory\FibraClick\Listeners;


use BotFactory\FibraClick\Jobs\SendDiscussionToTelegramJob;
use Flarum\Discussion\Event\Started;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Guest;
use Illuminate\Contracts\Queue\Queue;

class DiscussionStartedListener
{
    /**
     * @var Queue
     */
    private $queue;

    /**
     * @var SettingsRepositoryInterface
     */
    private $settings;

    public function __construct(Queue $queue, SettingsRepositoryInterface $settings)
    {
        $this->queue = $queue;
        $this->settings = $settings;
    }

    public function handle(Started $event) {
        if (!(bool)$this->settings->get('fibraclick.telegram.discussionsEnabled', false)) {
            return;
        }

        $isPublic = (new Guest)->can('viewDiscussions', $event->discussion);

        if ($isPublic) {
            $this->queue->push(
                new SendDiscussionToTelegramJob($event->discussion)
            );
        }
    }
}
