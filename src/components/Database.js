import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import api from '../api';

const Database = () => {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        api.get('/dashboard')
            .then((response) => {
                setTransactions(response.data);
            })
            .catch((error) => {
                console.error('Erro ao buscar dados do dashboard:', error);
            });
    }, []);

    return (
        <div className="database">
            <h2>Banco de Dados - Transações</h2>

            {/* Gráfico de Linha */}
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={transactions}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type="monotone" dataKey="amount" stroke="#007bff" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>

            {/* Tabela de Transações */}
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Descrição</th>
                        <th>Valor</th>
                        <th>Data</th>
                        <th>Tipo</th>
                        <th>Categoria</th>
                        <th>Mês</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.id}</td>
                            <td>{transaction.description}</td>
                            <td>R$ {transaction.amount.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</td>
                            <td>{transaction.date}</td>
                            <td>{transaction.type}</td>
                            <td>{transaction.transaction_category}</td>
                            <td>{transaction.transaction_month}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Database;
