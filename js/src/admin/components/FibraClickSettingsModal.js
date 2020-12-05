import SettingsModal from 'flarum/components/SettingsModal';
import { settings } from '@fof-components';

const {
    items: { BooleanItem },
} = settings;

export default class FibraClickSettingsModal extends SettingsModal {
    title() {
        return 'FibraClick';
    }

    className() {
        return 'FibraClickSettingsModal';
    }

    form() {
        return [
            <BooleanItem name='fibraclick.highlightKeywords' setting={this.setting.bind(this)}>Highlight keywords</BooleanItem>,
            <BooleanItem name='fibraclick.showAdSense' setting={this.setting.bind(this)}>Show AdSense</BooleanItem>,
        ];
    }
}
