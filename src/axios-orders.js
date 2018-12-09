import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-c9cc3.firebaseio.com/'
});

export default instance;