import Button from "flarum/common/components/Button";
import {extend} from "flarum/common/extend";
import CommentPost from "flarum/forum/components/CommentPost";
import PostControls from "flarum/forum/utils/PostControls";

export default function () {
    extend(CommentPost.prototype, 'actionItems', function (items) {
        let post = this.attrs.post;

        if (post.isHidden() || post.contentType() !== 'comment' ||
            !flarum.core.compat['flags/components/FlagPostModal'] || !post.canFlag || !post.canFlag()) {
            return;
        }

        items.add('flag',
            Button.component(
                {
                    className: 'Button Button--link Button--red',
                    onclick: () => app.modal.show(flarum.core.compat['flags/components/FlagPostModal'], {post})
                },
                app.translator.trans('flarum-flags.forum.post_controls.flag_button')
            ),
            10
        );
    });

    extend(PostControls, 'userControls', function (items) {
        if (items.has('flag')) {
            items.remove('flag');
        }
    });
}
