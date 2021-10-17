import {extend} from "flarum/common/extend";
import CommentPost from "flarum/forum/components/CommentPost";

export default function () {
    extend(CommentPost.prototype, 'actionItems', function (items) {
        items.replace('like', null, 5);
    });
}
