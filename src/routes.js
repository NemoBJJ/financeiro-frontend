import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions'; // Importando Transactions

const AppRoutes = () => {
    return (
        <Router>
            <Navbar /> {/* Navbar presente em todas as páginas */}
            <Routes>
                <Route path="/dashboard" element={<Dashboard />} /> {/* Página do Dashboard */}
                <Route path="/transactions" element={<Transactions />} /> {/* Página de Transações */}
            </Routes>
            <Footer /> {/* Footer presente em todas as páginas */}
        </Router>
    );
};

export default AppRoutes;
