import app from 'flarum/app';
import SettingsModal from '@fof/components/admin/settings/SettingsModal';
import BooleanItem from '@fof/components/admin/settings/items/BooleanItem';

app.initializers.add('botfactoryit/fibraclick', () => {
    app.extensionSettings['botfactoryit-fibraclick'] = () => app.modal.show(
        new SettingsModal({
            title: 'FibraClick',
            className: 'FibraClickModal',
            items: [
                <BooleanItem key='fibraclick.keywords' cast={Boolean}>Highlight keywords</BooleanItem>
            ],
        })
    )
});
