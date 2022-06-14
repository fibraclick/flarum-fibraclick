<?php


namespace FibraClick\Observers;


use FibraClick\Jobs\SendFlagToTelegramJob;
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
        $isApproval = $flag->type == 'approval';

        if ($isApproval && !$this->settings->get('fibraclick.telegram.approvalsEnabled', false)) {
            return;
        } else if (!$this->settings->get('fibraclick.telegram.flagsEnabled', false)) {
            return;
        }

        $this->queue->push(
            new SendFlagToTelegramJob($flag)
        );
    }
}
