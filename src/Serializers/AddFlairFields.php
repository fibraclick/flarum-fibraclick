<?php


namespace FibraClick\Serializers;


use Flarum\Api\Serializer\UserSerializer;
use Flarum\User\User;

class AddFlairFields
{
    public function __invoke(UserSerializer $serializer, User $user, array $attributes): array
    {
        $attributes['flairName'] = $user->flair_name;
        $attributes['flairColor'] = $user->flair_color;

        return $attributes;
    }
}
