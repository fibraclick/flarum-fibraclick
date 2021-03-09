<?php


namespace BotFactory\FibraClick\Serializers;


class AddFlairFields
{
    public function __invoke($serializer, $user, $attributes)
    {
        $attributes['flairName'] = $user->flair_name;
        $attributes['flairColor'] = $user->flair_color;

        return $attributes;
    }
}
