import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://deduas-api.herokuapp.com/'
});

export default instance;