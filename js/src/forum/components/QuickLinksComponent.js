import Component from 'flarum/Component';

export default class QuickLinksComponent extends Component {
    init() {
        this.links = [
            { text: '<i class="fab fa-telegram-plane" />', link: 'https://t.me/FibraClick' },
            { text: '<i class="fab fa-twitter" />', link: 'https://twitter.com/fibraclick' },
            { text: '<i class="fab fa-facebook-f" />', link: 'https://www.facebook.com/FibraClick/' },
            { text: 'WIKI', link: 'https://fibra.click' },
            { text: 'NEWSLETTER', link: 'https://fibra.click/newsletter/' }
        ]
    }

    view() {
        return m("div[class='container quicklinks']",
            this.links.map(x =>
                m("a", {
                    href: x.link,
                    config: x.isInternal ? m.route : '',
                    target: !x.isInternal ? '_blank' : ''
                }, m.trust(x.text))
            )
        );
    }
}
