import axios from 'axios';

//cria uma conexão com a api
const api = axios.create({
    baseURL: 'http://localhost:3004'
});

export default api;