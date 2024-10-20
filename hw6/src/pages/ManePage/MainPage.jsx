import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

function MainPage() {
    const [users, setUsers] = useState([]);
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        defaultValues: { website: '' }, // Установим значение по умолчанию для сайта
    });

    const onSubmit = (data) => {
        setUsers([...users, data]);
        reset(); // Очищаем форму после отправки
    };

    const deleteUser = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
    };

    const clearTable = () => {
        setUsers([]);
    };

    return (
        <div>
            <h2>Форма регистрации</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name">Имя:</label>
                    <input type="text" id="name" {...register('name', { required: true })} />
                    {errors.name && <span className="error">Это поле обязательно</span>}
                </div>
                <div>
                    <label htmlFor="username">Имя пользователя:</label>
                    <input type="text" id="username" {...register('username', { required: true })} />
                    {errors.username && <span className="error">Это поле обязательно</span>}
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" {...register('email', { required: true })} />
                    {errors.email && <span className="error">Это поле обязательно</span>}
                </div>
                <div>
                    <label htmlFor="phone">Телефон:</label>
                    <input type="text" id="phone" {...register('phone', { required: true })} />
                    {errors.phone && <span className="error">Это поле обязательно</span>}
                </div>
                <div>
                    <label htmlFor="website">Сайт:</label>
                    <input type="text" id="website" {...register('website')} />
                </div>
                <button type="submit">Создать</button>
                <button type="button" onClick={clearTable}>
                    Очистить таблицу
                </button>
            </form>

            <h2>Таблица пользователей</h2>
            {users.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Имя</th>
                        <th>Имя пользователя</th>
                        <th>Email</th>
                        <th>Телефон</th>
                        <th>Сайт</th>
                        <th>Действия</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td>
                                <button onClick={() => deleteUser(index)}>Удалить</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>Таблица пуста.</p>
            )}
        </div>
    );
}

export default MainPage;