import SettingsModal from 'flarum/components/SettingsModal';

export default class FibraClickSettingsModal extends SettingsModal {
    title() {
        return 'FibraClick';
    }

    className() {
        return 'FibraClickSettingsModal';
    }

    form() {
        return [
            this.field('Highlight keywords', 'fibraclick.highlightKeywords'),
            this.field('Ads - Load AdSense', 'fibraclick.ads.load'),
            this.field('Ads - Show', 'fibraclick.ads.show'),
            this.field('Ads - Posts interval', 'fibraclick.ads.postsInterval'),
            this.textArea('Ads - Between posts content', 'fibraclick.ads.betweenPosts'),
            this.textArea('Ads - Sidebar', 'fibraclick.ads.sidebar'),
        ];
    }

    field(label, key) {
        console.log(this);
        return <div className="Form-group">
            <label>{label}</label>
            <input className="FormControl" bidi={this.setting(key)}/>
        </div>;
    }

    textArea(label, key) {
        return <div className="Form-group">
            <label>{label}</label>
            <textarea className="FormControl" bidi={this.setting(key)}></textarea>
        </div>;
    }
}
