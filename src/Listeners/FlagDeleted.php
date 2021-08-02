<?php


namespace FibraClick\Listeners;


use FibraClick\Jobs\SendFlagToTelegramJob;
use Flarum\Flags\Event\Deleting;
use Flarum\Settings\SettingsRepositoryInterface;
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
        if (!(bool)$this->settings->get('fibraclick.telegram.flagsEnabled', false)) {
            return;
        }

        $this->queue->push(
            new SendFlagToTelegramJob($event->flag, $event->actor)
        );
    }
}
