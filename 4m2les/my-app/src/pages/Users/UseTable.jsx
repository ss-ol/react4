import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const API_URL = 'http://localhost:8000';

const UseTable = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch(API_URL);
                const data = await response.json();
                setUsers(data);
            } catch (error) {
                console.error('Ошибка при получении пользователей:', error);
            }
        };
        fetchUsers();
    }, []);

    const onSubmit = async (data) => {
        try {
            const response = await fetch(API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (!response.ok) {
                throw new Error('Ошибка при создании пользователя');
            }

            const newUser = await response.json();
            setUsers((prevUsers) => [...prevUsers, { ...data, id: newUser.id }]);
            setMessage('Пользователь успешно создан');
            setShowModal(true);
            reset(); // Сбрасываем поля формы после добавления пользователя
        } catch (error) {
            console.error('Ошибка при создании пользователя:', error);
            setMessage('Ошибка при создании пользователя');
            setShowModal(true);
        }
    };

    const deleteUser = async (id) => {
        try {
            const response = await fetch(`${API_URL}/${id}`, {
                method: 'DELETE',
            });

            if (!response.ok) {
                throw new Error('Ошибка при удалении пользователя');
            }

            setUsers((prevUsers) => prevUsers.filter(user => user.id !== id));
            setMessage('Пользователь удален');
            setShowModal(true);
        } catch (error) {
            console.error('Ошибка при удалении пользователя:', error);
            setMessage('Ошибка при удалении пользователя');
            setShowModal(true);
        }
    };

    const closeModal = () => {
        setShowModal(false);
        setMessage('');
    };

    return (
        <div>
            <h1>Создать пользователя</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('name', { required: true })} placeholder="Имя" />
                {errors.name && <span>Это поле обязательно</span>}

                <input {...register('email', { required: true })} placeholder="Email" />
                {errors.email && <span>Это поле обязательно</span>}

                <input {...register('username', { required: true })} placeholder="Имя пользователя" />
                {errors.username && <span>Это поле обязательно</span>}

                <button type="submit">Создать пользователя</button>
            </form>

            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={closeModal}>&times;</span>
                        <p>{message}</p>
                    </div>
                </div>
            )}

            <h2>Список пользователей</h2>
            {users.length === 0 ? (
                <p>Список пуст</p>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Email</th>
                        <th>Имя пользователя</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>
                                <button onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UseTable;
