import axios from 'axios';

const { apiHost = '' } = window.livechatConfig || {};
const wootAPI = axios.create({ baseURL: `${apiHost}/` });

export default wootAPI;
