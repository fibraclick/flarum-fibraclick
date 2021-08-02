<?php


namespace FibraClick\Listeners;


use FibraClick\Jobs\SendDiscussionToTelegramJob;
use Flarum\Discussion\Discussion;
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

    public function handle(Started $event)
    {
        if (!(bool)$this->settings->get('fibraclick.telegram.discussionsEnabled', false)) {
            return;
        }

        $isPublic = Discussion::whereVisibleTo(new Guest)->where('id', $event->discussion->id)->exists();

        if ($isPublic) {
            $this->queue->push(
                new SendDiscussionToTelegramJob($event->discussion)
            );
        }
    }
}
