import Component from 'flarum/common/Component';
import Link from 'flarum/common/components/Link';

export default class QuickLinksComponent extends Component {
    oninit() {
        super.oninit();

        this.links = [
            {
                icon: 'fas fa-align-left',
                text: 'WIKI',
                link: 'https://fibra.click/?utm_source=fibraclick&utm_medium=referral&utm_campaign=mobilelinks'
            },
            {
                icon: 'far fa-newspaper',
                text: 'NEWSLETTER',
                link: 'https://fibra.click/newsletter/?utm_source=fibraclick&utm_medium=referral&utm_campaign=mobilelinks'
            },
            {
                icon: 'fab fa-telegram-plane',
                text: 'TELEGRAM',
                link: 'https://t.me/FibraClick'
            },
            {
                icon: 'fab fa-twitter',
                text: 'TWITTER',
                link: 'https://twitter.com/fibraclick'
            },
            {
                icon: 'fab fa-facebook-f',
                text: 'FACEBOOK',
                link: 'https://www.facebook.com/FibraClick/'
            }
        ]
    }

    view() {
        return m("div[class='container quicklinks']",
            this.links.map(x =>
                Link.component({
                    href: x.link,
                    external: true,
                    target: '_blank'
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

        return t;
    }
}
