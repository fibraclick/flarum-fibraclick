export default function (items) {
    const postUser = this.attrs.post.user();

    if (!postUser) {
        return;
    }

    if (this.attrs.post.number() !== 1 && this.attrs.post.discussion().user() === postUser) {
        items.add('author-flair', m('span.item-user-label.author', 'Autore'), 99);
    }

    if (app.forum.attribute('fibraclick.flair.show') === '1') {
        const flairName = postUser.flairName();
        const flairColor = postUser.flairColor();

        if (flairName && flairColor) {
            items.add(
                'flair',
                m('span.item-user-label.flair', {style: {background: flairColor}}, flairName),
                99
            );
        }
    }
}
