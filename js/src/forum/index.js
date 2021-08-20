import app from 'flarum/app';
import {extend, override} from 'flarum/common/extend';
import CommentPost from 'flarum/forum/components/CommentPost';
import IndexPage from 'flarum/forum/components/IndexPage';
import WelcomeHero from 'flarum/forum/components/WelcomeHero';
import QuickLinksComponent from './components/QuickLinksComponent';
import User from 'flarum/common/models/User';
import Model from 'flarum/common/Model';
import replaceKeywords from './replaceKeywords';
import addLinksToSidebar from './addLinksToSidebar';
import addTagsToSidebar from './addTagsToSidebar';
import addAds from "./addAds";
import addCookieConsent from "./addCookieConsent";
import addAnalyticsCompat from "./addAnalyticsCompat";
import addPolicyConsent from "./addPolicyConsent";
import addPostHeaderItems from "./addPostHeaderItems";
import extendUserModal from "./extendUserModal";

app.initializers.add('fibraclick-flarum-tweaks', () => {
    // Enable keywords feature
    extend(CommentPost.prototype, 'oninit', replaceKeywords);

    // Add quick links to the top
    override(IndexPage.prototype, 'hero', () =>
        [WelcomeHero.component(), QuickLinksComponent.component()]
    );

    // Extend sidebar items with quick links
    extend(IndexPage.prototype, 'navItems', addLinksToSidebar);

    // Add secondary tags to sidebar
    //extend(IndexPage.prototype, 'navItems', addTagsToSidebar);

    addAnalyticsCompat();

    addAds();

    addCookieConsent();

    addPolicyConsent();

    User.prototype.flairName = Model.attribute('flairName');
    User.prototype.flairColor = Model.attribute('flairColor');

    extend(CommentPost.prototype, 'headerItems', addPostHeaderItems);

    extendUserModal();
});
