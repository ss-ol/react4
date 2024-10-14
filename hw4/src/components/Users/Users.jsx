import React,{useState, useEffect} from "react";

const Users =({onSubmit})=>{
    useEffect(()=>{
        const name = prompt( 'Введите ваше имя');
        const lastName = prompt('Введите вашу фамилию');

        onSubmit({name, lastName});
    },[onSubmit]);

    return null;
}

export default Users

