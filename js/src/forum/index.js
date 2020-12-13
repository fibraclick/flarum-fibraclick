import app from 'flarum/app';
import { extend, override } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';
import IndexPage from 'flarum/components/IndexPage';
import WelcomeHero from 'flarum/components/WelcomeHero';
import QuickLinksComponent from './components/QuickLinksComponent';
import replaceKeywords from './replaceKeywords';
import extendSidebar from './extendSidebar';
import addAdSense from "./addAdSense";

app.initializers.add('botfactoryit/fibraclick', () => {
    // Enable keywords feature
    extend(CommentPost.prototype, 'oninit', replaceKeywords);

    // Add quick links to the top
    override(IndexPage.prototype, 'hero', () =>
        [ WelcomeHero.component(), QuickLinksComponent.component() ]
    );

    // Extend sidebar items with quick links
    extend(IndexPage.prototype, 'navItems', extendSidebar);

    // Analytics
    extend(app, 'mount', function (vnode) {
        if (app.data.googleTrackingCode && gtag) {
            gtag('config', app.data.googleTrackingCode, {
                'custom_map': {'dimension1': 'isLoggedIn'}
            });

            gtag('event', 'isLoggedInEvent', {'isLoggedIn': !!app.session.user });
        }
    });

    // AdSense
    addAdSense();
});
