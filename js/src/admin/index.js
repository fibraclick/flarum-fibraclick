import app from 'flarum/app';

app.initializers.add('fibraclick-tweaks', () => {
    app.extensionData
        .for('fibraclick-tweaks')
        .registerSetting({
            setting: 'fibraclick.highlightKeywords',
            label: 'Highlight keywords',
            type: 'boolean'
        })
        .registerSetting({
            setting: 'fibraclick.ads.load',
            label: 'Ads - Load AdSense',
            type: 'boolean'
        })
        .registerSetting({
            setting: 'fibraclick.ads.show',
            label: 'Ads - Show',
            type: 'boolean'
        })
        .registerSetting({
            setting: 'fibraclick.ads.postsInterval',
            label: 'Ads - Posts interval',
            type: 'number'
        })
        .registerSetting(function () {
            return <div className="Form-group">
                <label>Ads - Between posts content</label>
                <textarea className="FormControl" bidi={this.setting('fibraclick.ads.betweenPosts')}></textarea>
            </div>;
        })
        .registerSetting(function () {
            return <div className="Form-group">
                <label>Ads - Sidebar</label>
                <textarea className="FormControl" bidi={this.setting('fibraclick.ads.sidebar')}></textarea>
            </div>;
        })
        .registerSetting({
            setting: 'fibraclick.analytics.trackingCode',
            label: 'Analytics - Tracking code (leave empty to disable)',
            type: 'text'
        })
        .registerSetting({
            setting: 'fibraclick.telegram.token',
            label: 'Telegram - Token',
            type: 'text'
        })
        .registerSetting({
            setting: 'fibraclick.telegram.discussionsEnabled',
            label: 'Telegram - Enabled discussions posting',
            type: 'boolean'
        })
        .registerSetting({
            setting: 'fibraclick.telegram.discussionsChannel',
            label: 'Telegram - Discussions channel',
            type: 'text'
        })
        .registerSetting({
            setting: 'fibraclick.telegram.flagsEnabled',
            label: 'Telegram - Enabled flags posting',
            type: 'boolean'
        })
        .registerSetting({
            setting: 'fibraclick.telegram.flagsChannel',
            label: 'Telegram - Flags channel',
            type: 'text'
        })
        .registerSetting({
            setting: 'fibraclick.telegram.approvalsEnabled',
            label: 'Telegram - Enabled approvals posting',
            type: 'boolean'
        })
        .registerSetting({
            setting: 'fibraclick.telegram.approvalsChannel',
            label: 'Telegram - Approvals channel',
            type: 'text'
        })
        .registerSetting({
            setting: 'fibraclick.flair.show',
            label: 'Flair - Show',
            type: 'boolean'
        });
});
