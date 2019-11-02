import app from 'flarum/app';
import { extend, override } from 'flarum/extend';
import CommentPost from 'flarum/components/CommentPost';
import IndexPage from 'flarum/components/IndexPage';
import QuickLinksComponent from './QuickLinksComponent';
import replaceKeywords from './replaceKeywords';
import extendSidebar from './extendSidebar';

app.initializers.add('botfactoryit/fibraclick', () => {
    extend(CommentPost.prototype, 'init', replaceKeywords);
    override(IndexPage.prototype, 'hero', () => QuickLinksComponent.component());
    extend(IndexPage.prototype, 'navItems', extendSidebar);
});
