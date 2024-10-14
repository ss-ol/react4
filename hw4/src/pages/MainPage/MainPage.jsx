import React from 'react';
import users from "../../components/Users/Users";

const MainPage = () => {
    return <h1>Добро пожаловать {users.name} {users.lastName}, мы ждали именно тебя!</h1>

};

export default MainPage;