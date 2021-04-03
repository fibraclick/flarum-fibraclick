<?php

use Flarum\Database\Migration;

return Migration::addColumns('flags', [
    'telegram_message_id' => ['integer', 'unsigned' => true, 'nullable' => true]
]);
