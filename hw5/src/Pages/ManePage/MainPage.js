import React, { useState } from "react";

const ManePage = () => {
    const [name, setName] = useState("");
    const [names, setNames] = useState([]);

    const addName = () => {
        if (name.trim()) {
            setNames([...names, name]);
            setName("");
        }
    };

    const changeName = (index) => {
        if (name.trim()) {
            const updatedNames = [...names];
            updatedNames[index] = name;
            setNames(updatedNames);
            setName("");
        }
    };

    return (
        <div>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введите имя"
            />
            <button style={{backgroundColor:"green",color:"white"}} onClick={addName} disabled={!name.trim()}>
                Добавить
            </button>

        <div>
            {names.length === 0 ? (
                    <p style={{backgroundColor:"red", color:"white"}} className='p'>Список пуст</p>
            ):(
                    <ul>
                         {names.map((n, index) => (
                             <li key={index}>
                                {n}
                                <button style={{backgroundColor:"blue", color:"white"}} onClick={() => changeName(index)} disabled={!name.trim()}>
                                    Поменять
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ManePage;