import TagLinkButton from 'flarum/tags/forum/components/TagLinkButton';
import Separator from 'flarum/common/components/Separator';
import sortTags from 'flarum/tags/utils/sortTags';

export default function addTagsToSidebar(items) {
    let currentItems = items.toArray();

    for (let item of currentItems) {
        if (item.itemName.match(/^tag[0-9]+$/)) {
            items.remove(item.itemName);
        }
    }

    items.remove('moreTags');

    // https://github.com/flarum/tags/blob/v1.0.3/js/src/forum/addTagList.js
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
        .filter(tag => tag.position() !== null && (!tag.isChild() || (currentTag && (tag.parent() === currentTag || tag.parent() === currentTag.parent()))))
        .forEach(addTag);

    items.add('separator2', Separator.component(), -14);

    sortTags(tags)
        .filter(tag => tag.position() == null)
        .forEach(addTag);
}
