import app from 'flarum/app';
import { extend, override } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';
import IndexPage from 'flarum/components/IndexPage';
import LinkButton from 'flarum/components/LinkButton';
import QuickLinksComponent from "./components/QuickLinksComponent";

const mappings = {
    vula: 'https://fibra.click/vula-slu-nga/#vula-virtual-unbundled-local-access',
    slu: 'https://fibra.click/vula-slu-nga/#slu-sub-loop-unbundling',
    // nga: 'https://fibra.click/vula-slu-nga/#nga-next-generation-access',
    'bs-nga': 'https://fibra.click/vula-slu-nga/#nga-next-generation-access',
    bul: 'https://fibra.click/piano-bul/',
    'piano bul': 'https://fibra.click/piano-bul/',
    vectoring: 'https://fibra.click/vectoring/',
    vdsl: 'https://fibra.click/vdsl/',
    diafonia: 'https://fibra.click/vdsl/#diafonia-e-vectoring',
    gpon: 'https://fibra.click/gpon/',
    'aree bianche': 'https://fibra.click/aree-nere-grigie-bianche/',
    'area bianca': 'https://fibra.click/aree-nere-grigie-bianche/',
    'aree nere': 'https://fibra.click/aree-nere-grigie-bianche/',
    'area nera': 'https://fibra.click/aree-nere-grigie-bianche/',
    'aree grigie': 'https://fibra.click/aree-nere-grigie-bianche/',
    'area grigia': 'https://fibra.click/aree-nere-grigie-bianche/',
    dns: 'https://fibra.click/dns/',
    assestamento: 'https://fibra.click/assestamento/',
    assesti: 'https://fibra.click/assestamento/',
    assestarsi: 'https://fibra.click/assestamento/',
    snr: 'https://fibra.click/snr-sra-sos/',
    sra: 'https://fibra.click/snr-sra-sos/',
    sos: 'https://fibra.click/snr-sra-sos/',
    '12db': 'https://fibra.click/snr-sra-sos/',
    '12 db': 'https://fibra.click/snr-sra-sos/',
    sinfi: 'https://fibra.click/bul-sinfi/'
};

// https://stackoverflow.com/a/18622606/1633924
const regex = new RegExp('\\b(' + Object.keys(mappings).join('|') + ')\\b(?![^<]*>|[^<>]*</[^p])', 'gi');

app.initializers.add('botfactoryit/fibraclick', () => {
    extend(CommentPost.prototype, 'init', replaceKeywords);
    //override(IndexPage.prototype, 'hero', () => QuickLinksComponent.component());
    extend(IndexPage.prototype, 'navItems', extendSidebar);
});

function extendSidebar(items) {
    items.add('wiki',
        LinkButton.component({
            href: 'https://fibra.click',
            children: 'Wiki',
            icon: 'fas fa-align-left',
            config: (el) => el.target = '_blank'
        })
    );

    items.add('newsletter',
        LinkButton.component({
            href: 'https://fibra.click/newsletter/',
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

function replaceKeywords(post) {
    if (app.forum.attribute('fibraclick.keywords') != '1') {
        return;
    }

    this.props.post.data.attributes.contentHtml =
        this.props.post.data.attributes.contentHtml
            .replace(regex, (match) => {
                let link = mappings[match.toLowerCase()];

                if (link) {
                    return `<a class="wiki" target="_blank" href="${link}">${match}</a>`;
                }
                else {
                    return match;
                }
            });
}
