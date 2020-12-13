import TagLinkButton from 'flarum/tags/components/TagLinkButton';
import Separator from 'flarum/components/Separator';
import sortTags from 'flarum/tags/utils/sortTags';

export default function addTagsToSidebar(items) {
    let i = 1;

    while (items.has(`tag${i}`)) {
        items.remove(`tag${i}`);
        i++;
    }

    // There were no tags
    if (i == 1) {
        return;
    }

    // https://github.com/flarum/tags/blob/v0.1.0-beta.14/js/src/forum/addTagList.js
    const params = app.search.stickyParams();
    const tags = app.store.all('tags');
    const currentTag = this.currentTag();

    const addTag = tag => {
        let active = currentTag === tag;

        if (!active && currentTag) {
            active = currentTag.parent() === tag;
        }

        items.add('tag' + tag.id(), TagLinkButton.component({model: tag, params, active}, tag?.name()), -14);
    };

    sortTags(tags)
        .filter(tag => tag.position() !== null)
        .forEach(addTag);

    items.add('separator2', Separator.component(), -14);

    sortTags(tags)
        .filter(tag => tag.position() == null)
        .forEach(addTag);
}
