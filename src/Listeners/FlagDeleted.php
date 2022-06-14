<?php


namespace FibraClick\Listeners;


use FibraClick\Jobs\SendDiscussionToTelegramJob;
use FibraClick\Jobs\SendFlagToTelegramJob;
use Flarum\Discussion\Discussion;
use Flarum\Flags\Event\Deleting;
use Flarum\Settings\SettingsRepositoryInterface;
use Flarum\User\Guest;
use Illuminate\Contracts\Queue\Queue;

class FlagDeleted
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

    public function handle(Deleting $event)
    {
        $isApproval = $event->flag->type == 'approval';

        if ($isApproval && !$this->settings->get('fibraclick.telegram.approvalsEnabled', false)) {
            return;
        } else if (!$this->settings->get('fibraclick.telegram.flagsEnabled', false)) {
            return;
        }

        $this->queue->push(
            new SendFlagToTelegramJob($event->flag, $event->actor)
        );

        if ($event->flag->type == 'approval' && $event->flag->post->number == 1) {
            $this->queue->push(
                new SendDiscussionToTelegramJob($event->flag->post->discussion)
            );
        }
    }
}
