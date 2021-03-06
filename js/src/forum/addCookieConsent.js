import app from 'flarum/app';
import { extend } from 'flarum/extend';
import * as Klaro from 'klaro/dist/klaro-no-translations';

export default function() {
    extend(app, 'mount', function () {
        window.klaro = Klaro;

        const isPage = window.location.pathname.startsWith('/p/');

        Klaro.setup({
            hideDeclineAll: true,
            acceptAll: true,
            groupByPurpose: false,
            noticeAsModal: !isPage,
            services: [
                {
                    name: 'analytics',
                    title: 'Analisi del traffico',
                    purposes: ['Statistiche']
                },
                {
                    name: 'ads-basic',
                    title: 'Annunci di base',
                    purposes: ['Pubblicità'],
                    callback: (consent) => {
                        if (consent) {
                            window.resumeBasicAds?.call();
                        }
                    }
                },
                {
                    name: 'ads-personalized',
                    title: 'Annunci personalizzati',
                    purposes: ['Pubblicità'],
                    callback: (consent) => {
                        if (consent) {
                            window.resumePersonalizedAds?.call();
                        }
                    }
                }
            ],
            translations: {
                it: {
                    privacyPolicyUrl: '/p/1-privacy',
                    poweredBy: 'Realizzato con Klaro',
                    save: 'Salva preferenze',
                    acceptAll: 'Accetta tutto',
                    acceptSelected: 'Accetta selezionati',
                    ok: 'Accetta',
                    consentModal: {
                        title: 'Consensi privacy',
                        description: 'Qua puoi personalizzare i consensi per l\'uso dei cookie su questo sito web.'
                    },
                    consentNotice: {
                        learnMore: 'Personalizza',
                        description: 'Ciao! Vorremmo chiederti il consenso per utilizzare i cookie per raccogliere statistiche e mostrare pubblicità personalizzata. I nostri fornitori riceveranno informazioni sul modo in cui utilizzi il nostro sito. Puoi modificare le tue scelte in qualsiasi momento nella pagina privacy.',
                        changeDescription: 'Ci sono stati cambiamenti rispetto alla tua ultima visita, per favore rinnova il consenso.'
                    },
                    privacyPolicy: {
                        name: 'informativa sulla privacy',
                        text: 'Per saperne di più, consulta la nostra {privacyPolicy}.'
                    },
                    service: {
                        purpose: 'finalità',
                        purposes: 'finalità',
                        disableAll: {
                            title: 'Attiva o disattiva tutti i servizi',
                            description: 'Utilizza questo pulsante per attivare o disattivare tutti i servizi.'
                        }
                    },
                    analytics: {
                        description: 'Utilizziamo il servizio di terze parti Google Analytics per tracciare le visite degli utenti sul sito. Questo ci permette di sapere quante persone visitano il sito.'
                    },
                    'ads-basic': {
                        description: 'Utilizziamo il servizio Google AdSense per mostrare annunci pubblicitari sul forum basati sul contesto. I cookie non vengono usati per la personalizzazione ma per questioni di sicurezza e per la generazione dei rapporti.'
                    },
                    'ads-personalized': {
                        description: 'Con il tuo consenso, Google e i suoi fornitori raccoglieranno dei dati per fornire annunci più pertinenti creando un profilo basato sulla tua attività di navigazione. La lista dei fornitori è riportata nell\'informativa sulla privacy.'
                    }
                }
            },
        });
    });
}
