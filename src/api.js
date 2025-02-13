import axios from 'axios';

// Configuração para sempre utilizar o IP Elástico
const api = axios.create({
    baseURL: 'http://3.217.55.187:8084/api', // IP elástico
});

export default api;
