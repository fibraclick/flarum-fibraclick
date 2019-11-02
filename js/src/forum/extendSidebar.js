import LinkButton from 'flarum/components/LinkButton';

export default function(items) {
    items.add('wiki',
        LinkButton.component({
            href: 'https://fibra.click/?utm_source=fibraclick&utm_medium=referral&utm_campaign=navlinks',
            children: 'Wiki',
            icon: 'fas fa-align-left',
            config: (el) => el.target = '_blank'
        })
    );

    items.add('newsletter',
        LinkButton.component({
            href: 'https://fibra.click/newsletter/?utm_source=fibraclick&utm_medium=referral&utm_campaign=navlinks',
            children: 'Newsletter',
            icon: 'far fa-newspaper',
            config: (el) => el.target = '_blank'
        })
    );

    items.add('telegram',
        LinkButton.component({
            href: 'https://t.me/FibraClick',
            children: 'Telegram',
            icon: 'fab fa-telegram-plane',
            config: (el) => el.target = '_blank'
        })
    );

    items.add('twitter',
        LinkButton.component({
            href: 'https://twitter.com/FibraClick',
            children: 'Twitter',
            icon: 'fab fa-twitter',
            config: (el) => el.target = '_blank'
        })
    );

    items.add('facebook',
        LinkButton.component({
            href: 'https://www.facebook.com/FibraClick',
            children: 'Facebook',
            icon: 'fab fa-facebook-f',
            config: (el) => el.target = '_blank'
        })
    );
}
