import React, { useEffect, useState } from 'react';
import api from '../api';

const Transactions = () => {
    const [transactions, setTransactions] = useState([]);
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');

    useEffect(() => {
        fetchTransactions();
    }, []);

    const fetchTransactions = async () => {
        try {
            const response = await api.get('/transactions');
            setTransactions(response.data);
        } catch (error) {
            console.error('Erro ao buscar transações:', error);
        }
    };

    const addTransaction = async () => {
        const newTransaction = {
            description,
            amount: parseFloat(amount),
            date: new Date().toISOString().split('T')[0],
        };

        try {
            const response = await api.post('/transactions', newTransaction);
            setTransactions([...transactions, response.data]);
            setDescription('');
            setAmount('');
        } catch (error) {
            console.error('Erro ao adicionar transação:', error);
        }
    };

    const deleteTransaction = async (id) => {
        try {
            await api.delete(`/transactions/${id}`);
            setTransactions(transactions.filter(transaction => transaction.id !== id));
            alert('Transação excluída com sucesso!');
        } catch (error) {
            console.error('Erro ao excluir transação:', error);
        }
    };

    const formatCurrency = (value) => {
        return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    return (
        <div>
            <h1>Lista de Transações</h1>

            <div>
                <input
                    type="text"
                    placeholder="Descrição"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                />
                <button onClick={addTransaction}>Adicionar</button>
            </div>

            {transactions.length > 0 ? (
                <table border="1" style={{ width: '100%', marginTop: '20px', textAlign: 'left' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                            <th>Data</th>
                            <th>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.id}</td>
                                <td>{transaction.description}</td>
                                <td style={{ color: transaction.amount >= 0 ? 'green' : 'red' }}>
                                    {formatCurrency(transaction.amount)}
                                </td>
                                <td>{transaction.date}</td>
                                <td>
                                    <button onClick={() => deleteTransaction(transaction.id)}>Excluir</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>Nenhuma transação encontrada.</p>
            )}
        </div>
    );
};

export default Transactions;
