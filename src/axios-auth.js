import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1',
    headers: { 'Content-Type': 'application/json' }
});

instance.interceptors.request.use((config) => {
    config.url = `${config.url}?key=AIzaSyDGDcaM44nnrFpu663POgfFxP122_yfVYs`

    return config;
});

export default instance;