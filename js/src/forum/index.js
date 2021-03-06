import app from 'flarum/app';
import { extend, override } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';
import IndexPage from 'flarum/components/IndexPage';
import WelcomeHero from 'flarum/components/WelcomeHero';
import QuickLinksComponent from './components/QuickLinksComponent';
import replaceKeywords from './replaceKeywords';
import addLinksToSidebar from './addLinksToSidebar';
import addTagsToSidebar from './addTagsToSidebar';
import addAds from "./addAds";
import addCookieConsent from "./addCookieConsent";
import addAnalyticsCompat from "./addAnalyticsCompat";

app.initializers.add('botfactoryit/fibraclick', () => {
    // Enable keywords feature
    extend(CommentPost.prototype, 'oninit', replaceKeywords);

    // Add quick links to the top
    override(IndexPage.prototype, 'hero', () =>
        [ WelcomeHero.component(), QuickLinksComponent.component() ]
    );

    // Extend sidebar items with quick links
    extend(IndexPage.prototype, 'navItems', addLinksToSidebar);

    // Add secondary tags to sidebar
    extend(IndexPage.prototype, 'navItems', addTagsToSidebar);

    addAnalyticsCompat();

    addAds();

    addCookieConsent();
});
