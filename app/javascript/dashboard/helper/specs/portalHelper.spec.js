import { buildPortalArticleURL, buildPortalURL } from '../portalHelper';

describe('PortalHelper', () => {
  describe('buildPortalURL', () => {
    it('returns the correct url', () => {
      window.livechatConfig = {
        hostURL: 'https://app.livechat.hohplay.com',
        helpCenterURL: 'https://help.livechat.hohplay.com',
      };
      expect(buildPortalURL('handbook')).toEqual(
        'https://help.livechat.hohplay.com/hc/handbook'
      );
      window.livechatConfig = {};
    });
  });

  describe('buildPortalArticleURL', () => {
    it('returns the correct url', () => {
      window.livechatConfig = {
        hostURL: 'https://app.livechat.hohplay.com',
        helpCenterURL: 'https://help.livechat.hohplay.com',
      };
      expect(
        buildPortalArticleURL('handbook', 'culture', 'fr', 'article-slug')
      ).toEqual('https://help.livechat.hohplay.com/hc/handbook/articles/article-slug');
      window.livechatConfig = {};
    });
  });
});
