import app from 'flarum/app';
import { extend, override } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';
import IndexPage from 'flarum/components/IndexPage';
import WelcomeHero from 'flarum/components/WelcomeHero';
import QuickLinksComponent from './QuickLinksComponent';
import replaceKeywords from './replaceKeywords';
import extendSidebar from './extendSidebar';

app.initializers.add('botfactoryit/fibraclick', () => {
    extend(CommentPost.prototype, 'init', replaceKeywords);
    override(IndexPage.prototype, 'hero', () =>
        [ WelcomeHero.component(), QuickLinksComponent.component() ]
    );
    extend(IndexPage.prototype, 'navItems', extendSidebar);

    extend(app, 'mount', function (vdom) {
        if (app.data.googleTrackingCode && gtag) {
            gtag('config', app.data.googleTrackingCode, {
                'custom_map': {'dimension1': 'isLoggedIn'}
            });

            gtag('event', 'isLoggedInEvent', {'isLoggedIn': !!app.session.user });
        }
    });
});
