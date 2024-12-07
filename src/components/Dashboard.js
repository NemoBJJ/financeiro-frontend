import React, { useEffect, useState } from 'react';
import api from '../api'; // Certifique-se de que isso está configurado no arquivo api.js

const Dashboard = () => {
    const [data, setData] = useState({}); // Armazena os dados do backend

    useEffect(() => {
        // Faz a requisição ao backend
        api.get('/dashboard')
            .then((response) => {
                setData(response.data); // Atualiza o estado com os dados recebidos
            })
            .catch((error) => {
                console.error('Erro ao buscar dados do dashboard:', error);
            });
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <p>{data.message}</p>
            <p>Usuário: {data.user}</p>
            <p>Saldo: R$ {data.balance}</p>
        </div>
    );
};

export default Dashboard;
