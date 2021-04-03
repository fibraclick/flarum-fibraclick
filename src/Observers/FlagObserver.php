<?php


namespace BotFactory\FibraClick\Observers;


use BotFactory\FibraClick\Jobs\SendFlagToTelegramJob;
use Flarum\Flags\Flag;
use Flarum\Settings\SettingsRepositoryInterface;
use Illuminate\Contracts\Queue\Queue;

class FlagObserver
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

    public function created(Flag $flag)
    {
        if (!(bool)$this->settings->get('fibraclick.telegram.flagsEnabled', false)) {
            return;
        }

        $this->queue->push(
            new SendFlagToTelegramJob($flag)
        );
    }
}
