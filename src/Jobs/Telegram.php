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

        if ($flag->type == 'user') {
            $text = sprintf("‼️ Messaggio di <i>%s</i> segnalato\n\n", $flag->post->user->username);
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
            $text = sprintf("⏳ Messaggio di <i>%s</i> in attesa di approvazione\n\n", $flag->post->user->username);
            $text .= sprintf("<i>Discussione</i>: <a href='%s'>%s</a>\n", $discussionUrl, htmlspecialchars($flag->post->discussion->title));
            if ($as != null) {
                $text .= sprintf("<i>Rete:</i> %s\n", htmlspecialchars($as));
            }
            $text .= sprintf("\n<a href='%s'><strong>Vai al messaggio (#%d)</strong></a>", $postUrl, $flag->post->number);

            if ($deletedBy != null) {
                $text .= sprintf("\n\n✅ Approvato/eliminato da <i>%s</i>", $deletedBy->username);
            }

            return $text;
        }

        return null;
    }
}
