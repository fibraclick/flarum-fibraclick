import { extend } from 'flarum/extend';
import app from 'flarum/app';
import PostStream from 'flarum/components/PostStream';
import IndexPage from 'flarum/components/IndexPage';

export default function() {
    extend(PostStream.prototype, 'view', function(component) {
        if (app.forum.attribute('fibraclick.ads.show') !== '1') {
            return;
        }

        const advertisement = app.forum.attribute('fibraclick.ads.betweenPosts') || 'Pubblicità.';

        if (advertisement && component.children.length) {
            const between = parseInt(app.forum.attribute('fibraclick.ads.postsInterval') || 5);

            const postIds = this.discussion.postIds();
            const postsAfterWhichPlaceAds = [];

            for (let i = 0; i <= postIds.length - 2; i++) {
                if (i % between === 0) {
                    postsAfterWhichPlaceAds.push(postIds[i]);
                }
            }

            // Insert an inside every n comment
            component.children.forEach((post) => {
                if (postsAfterWhichPlaceAds.includes(post.attrs['data-id'])) {
                    post.children.push(
                        m('div.FibraClickAds-fake-poststream-item',
                            m('article.Post.EventPost',
                                m('div.FibraClickAds-between-posts.EventPost-info', m.trust(advertisement))
                            )
                        )
                    );
                }
            });
        }
    });

    extend(PostStream.prototype, 'oncreate', evalAdsJs);
    extend(PostStream.prototype, 'onupdate', evalAdsJs);

    extend(IndexPage.prototype, 'sidebarItems', function(items) {
        const advertisement = app.forum.attribute('fibraclick.ads.sidebar');

        if (advertisement && !(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))) {
            // TODO: this doesn't work, no js is run
            items.add('fibraclick-ad', m.trust(advertisement));
        }
    });
}

function evalAdsJs() {
    this.$('.FibraClickAds-between-posts script').each(function () {
        if (!$(this).data('executed')) {
            eval.call(window, $(this).text());
            $(this).data('executed', true);
        }
    });
}
