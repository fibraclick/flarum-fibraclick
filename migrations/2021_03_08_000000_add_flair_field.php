<?php

use Flarum\Database\Migration;

return Migration::addColumns('users', [
    'flair_name' => ['string', 'length' => 255, 'nullable' => true],
    'flair_color' => ['string', 'length' => 255, 'nullable' => true],
]);
