import React from 'react';

const ErrorPage = ({ user }) => {
    return <h1>Тебе сюда нельзя - {user.name}{user.lastName}</h1>
}

export default ErrorPage;