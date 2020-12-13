import LinkButton from 'flarum/components/LinkButton';

export default function(items) {
    items.add('wiki',
        LinkButton.component({
            href: 'https://fibra.click/?utm_source=fibraclick&utm_medium=referral&utm_campaign=navlinks',
            icon: 'fas fa-align-left',
            external: true,
            target: '_blank'
        }, 'Wiki')
    );

    items.add('newsletter',
        LinkButton.component({
            href: 'https://fibra.click/newsletter/?utm_source=fibraclick&utm_medium=referral&utm_campaign=navlinks',
            icon: 'far fa-newspaper',
            external: true,
            target: '_blank'
        }, 'Newsletter')
    );

    items.add('telegram',
        LinkButton.component({
            href: 'https://t.me/FibraClick',
            icon: 'fab fa-telegram-plane',
            external: true,
            target: '_blank'
        }, 'Telegram')
    );

    items.add('twitter',
        LinkButton.component({
            href: 'https://twitter.com/FibraClick',
            icon: 'fab fa-twitter',
            external: true,
            target: '_blank'
        }, 'Twitter')
    );

    items.add('facebook',
        LinkButton.component({
            href: 'https://www.facebook.com/FibraClick',
            icon: 'fab fa-facebook-f',
            external: true,
            target: '_blank'
        }, 'Facebook')
    );
}
