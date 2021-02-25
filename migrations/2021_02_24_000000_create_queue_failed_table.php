<?php

use Illuminate\Database\Schema\Blueprint;
use Flarum\Database\Migration;

return Migration::createTable(
    'queue_failed',
    function (Blueprint $table) {
        $table->bigIncrements('id');
        $table->text('connection')->nullable();
        $table->text('queue');
        $table->longText('payload');
        $table->longText('exception');
        $table->timestamp('failed_at')->useCurrent();
    }
);
