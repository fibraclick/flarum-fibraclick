import {extend} from 'flarum/extend';
import app from 'flarum/app';
import Page from 'flarum/components/Page';

export default function () {
    extend(app, 'mount', function (vnode) {
        const trackingCode = app.forum.attribute('fibraclick.analytics.trackingCode');

        if (trackingCode && typeof gtag != 'undefined') {
            gtag('config', trackingCode, {
                'custom_map': {'dimension1': 'isLoggedIn'}
            });

            gtag('event', 'isLoggedInEvent', {'isLoggedIn': !!app.session.user});
        }
    });

    extend(Page.prototype, 'oninit', function (vnode) {
        const trackingCode = app.forum.attribute('fibraclick.analytics.trackingCode');

        if (trackingCode && typeof gtag != 'undefined') {
            gtag('config', trackingCode, {
                page_path: m.route.get(),
            });
        }
    });
}
