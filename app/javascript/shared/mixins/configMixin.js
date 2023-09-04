export default {
  computed: {
    hostURL() {
      return window.livechatConfig.hostURL;
    },
    vapidPublicKey() {
      return window.livechatConfig.vapidPublicKey;
    },
    enabledLanguages() {
      return window.livechatConfig.enabledLanguages;
    },
    isEnterprise() {
      return window.livechatConfig.isEnterprise === 'true';
    },
  },
};
