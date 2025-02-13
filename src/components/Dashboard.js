import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import Charts from './Charts'; // Componente de gráficos

const Dashboard = () => {
    useEffect(() => {
        api.get('/dashboard')
            .catch((error) => {
                console.error('Erro ao buscar dados do dashboard:', error);
            });
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            {/* Botão para voltar ao menu */}
            <div style={{ marginBottom: '20px' }}>
                <Link to="/">
                    <button style={{ padding: '10px 20px', fontSize: '16px' }}>
                        Voltar ao Menu
                    </button>
                </Link>
            </div>
            <h1>Dashboard Financeiro</h1>
            {/* Gráfico */}
            <Charts />
        </div>
    );
};

export default Dashboard;
