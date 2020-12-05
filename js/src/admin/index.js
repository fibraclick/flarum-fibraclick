import app from 'flarum/app';
import FibraClickSettingsModal from './components/FibraClickSettingsModal';

app.initializers.add('botfactoryit/fibraclick', () => {
    app.extensionSettings['botfactoryit-fibraclick'] = () => app.modal.show(FibraClickSettingsModal)
});
