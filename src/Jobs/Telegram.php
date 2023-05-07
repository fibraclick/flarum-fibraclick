<?php


namespace FibraClick\Jobs;


use Flarum\Flags\Flag;
use Flarum\Http\UrlGenerator;
use Flarum\User\User;

class Telegram
{
    public static function buildFlagMessage(UrlGenerator $url, Flag $flag, ?User $deletedBy, ?string $as): ?string
    {
        $discussionUrl = $url->to('forum')->route(
            'discussion',
            ['id' => $flag->post->discussion->id]
        );

        $postUrl = $url->to('forum')->route(
            'discussion',
            [
                'id' => $flag->post->discussion->id,
                'near' => $flag->post->number
            ]
        );

        $userUrl = $url->to('forum')->route(
            'user',
            [
                'username' => $flag->post->user->username
            ]
        );

        if ($flag->type == 'user') {
            $text = sprintf("‼️ Messaggio di <a href='%s'>%s</a> segnalato\n\n", $userUrl, $flag->post->user->username);
            $text .= sprintf("<i>Discussione</i>: <a href='%s'>%s</a>\n", $discussionUrl, htmlspecialchars($flag->post->discussion->title));
            $text .= sprintf("<i>Segnalatore</i>: %s\n", $flag->user->username);
            $text .= sprintf("<i>Motivo</i>: %s\n", $flag->reason);

            if (!empty($flag->reason_detail)) {
                $text .= sprintf("<i>Testo</i>: %s\n", htmlspecialchars($flag->reason_detail));
            }

            $text .= sprintf("\n<a href='%s'><strong>Vai al messaggio (#%d)</strong></a>", $postUrl, $flag->post->number);

            if ($deletedBy != null) {
                $text .= sprintf("\n\n✅ Gestita da <i>%s</i>", $deletedBy->username);
            }

            return $text;
        } else if ($flag->type == 'approval') {
            $text = sprintf("⏳ Messaggio di <a href='%s'>%s</a> in attesa di approvazione\n\n", $userUrl, $flag->post->user->username);
            $text .= sprintf("<i>Discussione</i>: <a href='%s'>%s</a>\n", $discussionUrl, htmlspecialchars($flag->post->discussion->title));

            if ($as != null) {
                $text .= sprintf("<i>Rete:</i> %s\n", htmlspecialchars($as));
            }

            $tags = $flag->post->discussion->tags()->get()->map([self::class, 'mapTag'])->implode(', ');
            if ($tags != "") {
                $text .= sprintf("<i>Tag</i>: %s\n", $tags);
            }

            $text .= sprintf("\n<a href='%s'><strong>Vai al messaggio (#%d)</strong></a>", $postUrl, $flag->post->number);

            if ($deletedBy != null) {
                $text .= sprintf("\n\n✅ Gestito da <i>%s</i>", $deletedBy->username);
            }

            return $text;
        }

        return null;
    }

    public static function mapTag($tag)
    {
        return $tag->name;
    }
}
