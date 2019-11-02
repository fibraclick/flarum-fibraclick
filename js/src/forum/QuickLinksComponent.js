import Component from 'flarum/Component';

export default class QuickLinksComponent extends Component {
    init() {
        this.links = [
            { icon: 'fas fa-align-left', text: 'WIKI', link: 'https://fibra.click' },
            { icon: 'far fa-newspaper', text: 'NEWSLETTER', link: 'https://fibra.click/newsletter/' },
            { icon: 'fab fa-telegram-plane', text: 'TELEGRAM', link: 'https://t.me/FibraClick' },
            { icon: 'fab fa-twitter', text: 'TWITTER', link: 'https://twitter.com/fibraclick' },
            { icon: 'fab fa-facebook-f', text: 'FACEBOOK', link: 'https://www.facebook.com/FibraClick/' }
        ]
    }

    view() {
        return m("div[class='container quicklinks']",
            this.links.map(x =>
                m("a", {
                    href: x.link,
                    config: x.isInternal ? m.route : '',
                    target: !x.isInternal ? '_blank' : ''
                }, m.trust(this.linkText(x)))
            )
        );
    }

    linkText(link) {
        let t = '';

        if (link.icon) {
            t += `<i class="${link.icon}"></i>`;

            if (link.text) {
                t += ' ';
            }
        }

        if (link.text) {
            t += link.text;
        }

        console.log(t);
        return t;
    }
}
