import axios from 'axios';

const api = axios.create({
  baseURL: 'https://3334-f5885e94-3224-42f0-9e8e-c86820d00c62.ws-us02.gitpod.io/'
});

export default api;