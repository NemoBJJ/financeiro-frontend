import axios from 'axios';

// Configuração para utilizar o IP elástico com HTTP
const api = axios.create({
    baseURL: 'https://api2.neemindev.com', // Usando o IP elástico com HTTP e porta 8085
});

export default api;
