import app from 'flarum/app';
import { extend } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';

const mappings = {
    vula: 'https://fibra.click/vula-slu-nga/#vula-virtual-unbundled-local-access',
    slu: 'https://fibra.click/vula-slu-nga/#slu-sub-loop-unbundling',
    nga: 'https://fibra.click/vula-slu-nga/#nga-next-generation-access',
    bul: 'https://fibra.click/piano-bul/',
    'piano bul': 'https://fibra.click/piano-bul/',
    vectoring: 'https://fibra.click/vectoring/',
    vdsl: 'https://fibra.click/vdsl/',
    gpon: 'https://fibra.click/gpon/',
    'aree bianche': 'https://fibra.click/aree-nere-grigie-bianche/',
    'aree nere': 'https://fibra.click/aree-nere-grigie-bianche/',
    'aree grigie': 'https://fibra.click/aree-nere-grigie-bianche/'
};

// https://stackoverflow.com/a/18622606/1633924
const regex = new RegExp('\\b(' + Object.keys(mappings).join('|') + ')\\b(?![^<]*>|[^<>]*</[^p])', 'gi');

app.initializers.add('botfactoryit/fibraclick', () => {
    extend(CommentPost.prototype, 'init', replaceKeywords);
});

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
