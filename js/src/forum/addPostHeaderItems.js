export default function (items) {
    if (this.attrs.post.number() !== 1 && this.attrs.post.discussion().user() === this.attrs.post.user()) {
        items.add('author-flair', m('span.item-user-label.author', 'Autore'), 99);
    }

    if (app.forum.attribute('fibraclick.flair.show') === '1') {
        const flairName = this.attrs.post.user().attribute('flairName');

        if (flairName) {
            const flairColor = this.attrs.post.user().attribute('flairColor');

            items.add(
                'flair',
                m('span.item-user-label.flair', {style: {background: flairColor}}, flairName),
                99
            );
        }
    }
}
