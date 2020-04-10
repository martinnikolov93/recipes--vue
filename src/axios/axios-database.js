import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://recipes-5b2ba.firebaseio.com/',
    headers: { 'Content-Type': 'application/json' }
});

// Add token to every request
instance.interceptors.request.use(config => {
    if(config.url.includes('equalTo')){
        config.url = `${config.url}&auth=${localStorage.getItem('token')}`;
    } else {
        config.url = `${config.url}?auth=${localStorage.getItem('token')}`;
    }
    
    if (config.method == 'post'){
        config.data.createdOn = new Date();
        config.data.createdBy = localStorage.getItem('userId');
    }
    
    return config; 
});

export default instance;