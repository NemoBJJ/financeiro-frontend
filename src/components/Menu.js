import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
    return (
        <div className="menu-container">
            <h1 className="menu-title">Sistema de Controle Financeiro</h1>
            <div className="menu-grid">
                <Link to="/transactions" className="menu-item">
                    <div className="menu-icon">💰</div>
                    <span>Transações</span>
                </Link>
                <Link to="/statistics" className="menu-item">
                    <div className="menu-icon">📊</div>
                    <span>Estatísticas</span>
                </Link>
                <Link to="/dashboard" className="menu-item">
                    <div className="menu-icon">📈</div>
                    <span>Dashboard</span>
                </Link>
                <Link to="/database" className="menu-item">
                    <div className="menu-icon">🗄️</div>
                    <span>Banco de Dados</span>
                </Link>
                <Link to="/crud-transactions" className="menu-item">
                    <div className="menu-icon">⚙️</div>
                    <span>Gerenciar Transações</span>
                </Link>
            </div>
        </div>
    );
};

export default Menu;
