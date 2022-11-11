import app from 'flarum/app';

const mappings = {
    vula: 'https://fibra.click/vula-slu-nga/#vula-virtual-unbundled-local-access',
    slu: 'https://fibra.click/vula-slu-nga/#slu-sub-loop-unbundling',
    // nga: 'https://fibra.click/vula-slu-nga/#nga-next-generation-access',
    'bs-nga': 'https://fibra.click/vula-slu-nga/#nga-next-generation-access',
    'piano bul': 'https://fibra.click/piano-bul/',
    bul: 'https://fibra.click/piano-bul/',
    'piano aree bianche': 'https://fibra.click/piano-aree-bianche/',
    vectoring: 'https://fibra.click/vectoring/',
    vdsl: 'https://fibra.click/vdsl/',
    vdsl2: 'https://fibra.click/vdsl/',
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
    speedtest: 'https://fibra.click/speedtest/',
    cassiopea: 'https://fibra.click/cassiopea/',
    consultazione: 'https://fibra.click/consultazione-2021/',
    hlog: 'https://fibra.click/hlog/',
    qln: 'https://fibra.click/hlog/',
    fibercop: 'https://fibra.click/fibercop/',
    openfiber: 'https://fibra.click/openfiber/',
    'open fiber': 'https://fibra.click/openfiber/',
    arlo: 'https://fibra.click/fibercop/#architettura',
    cro: 'https://fibra.click/fibercop/#architettura',
    venditori: 'https://forum.fibra.click/groups',
    rappresentanti: 'https://forum.fibra.click/groups',
    tcp: 'https://fibra.click/tcp/',
    bbr: 'https://fibra.click/tcp/',
    bbrv1: 'https://fibra.click/tcp/',
    bbrv2: 'https://fibra.click/tcp/',
    cubic: 'https://fibra.click/tcp/'
};

// https://stackoverflow.com/a/18622606/1633924
const regex = new RegExp('\\b(' + Object.keys(mappings).join('|') + ')\\b(?![^<]*>|[^<>]*</[^p])', 'gi');

export default function () {
    if (app.forum.attribute('fibraclick.highlightKeywords') !== '1') {
        return;
    }

    this.attrs.post.data.attributes.contentHtml = this.attrs.post.data.attributes.contentHtml
        .replace(regex, (match) => {
            let link = mappings[match.toLowerCase()];

            if (link) {
                return `<a class="wiki" target="_blank" href="${link}">${match}</a>`;
            } else {
                return match;
            }
        });
}
