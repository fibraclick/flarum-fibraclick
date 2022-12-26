<?php

namespace FibraClick\Console;

use Carbon\Carbon;
use Flarum\Post\Post;
use Illuminate\Console\Command;
use Illuminate\Database\ConnectionInterface;

class DeleteOldPII extends Command
{
    protected $signature = 'fibraclick:delete-old-pii';
    protected $description = 'Delete old PII';

    private ConnectionInterface $db;

    public function __construct(ConnectionInterface $db)
    {
        parent::__construct();

        $this->db = $db;
    }

    public function handle()
    {
        $threshold = Carbon::now()->subMonths(2);

        $this->info('Deleting IP addresses from old posts...');

        Post::where('created_at', '<', $threshold)
            ->update(['ip_address' => null]);

        $this->info('Deleting IP addresses from old audit log entries...');

        $this->db->table('kilowhat_audit_log')
            ->where('created_at', '<', $threshold)
            ->update(['ip_address' => null]);

        $this->info('Done!');
    }
}
