import app from 'flarum/app';

const mappings = {
    vula: 'https://fibra.click/vula-slu-nga/#vula-virtual-unbundled-local-access',
    slu: 'https://fibra.click/vula-slu-nga/#slu-sub-loop-unbundling',
    // nga: 'https://fibra.click/vula-slu-nga/#nga-next-generation-access',
    'bs-nga': 'https://fibra.click/vula-slu-nga/#nga-next-generation-access',
    'piano bul': 'https://fibra.click/piano-bul/',
    bul: 'https://fibra.click/piano-bul/',
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
    sinfi: 'https://fibra.click/bul-sinfi/',
    speedtest: 'https://fibra.click/speedtest/',
    cassiopea: 'https://fibra.click/cassiopea/',
    consultazione: 'https://fibra.click/consultazione-2020/',
    hlog: 'https://fibra.click/hlog/',
    qln: 'https://fibra.click/hlog/'
};

// https://stackoverflow.com/a/18622606/1633924
const regex = new RegExp('\\b(' + Object.keys(mappings).join('|') + ')\\b(?![^<]*>|[^<>]*</[^p])', 'gi');

export default function(post) {
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
