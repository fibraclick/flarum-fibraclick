import app from 'flarum/forum/app';
import Button from 'flarum/common/components/Button';

export default function (items, user) {
    if (app.session.user?.isAdmin()) {
        items.add(
            'delete-pii',
            <Button
                icon="fas fa-eraser"
                onclick={() => {
                    if (!confirm('Confermi eliminazione dati personali?\n\n- Indirizzi IP associati ai post dell\'utente\n- Audit log per l\'utente')) return;

                    app.request({
                        url: `${app.forum.attribute('apiUrl')}/users/${user.id()}/delete-pii`,
                        method: 'POST',
                    }).then(() => {
                        app.alerts.show({type: 'success'}, 'Fatto. Dati personali eliminati.');
                    });
                }}
            >Elimina PII</Button>,
            1
        );
    }
}
