import React from 'react';

function Todo({todo, updateText ,deleteTodo}) {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            maxWidth: '300px',
            alignItems: 'center',
            marginTop: '10px'
        }}>
            <h3>{todo.title}</h3>
            <button onClick={() => deleteTodo(todo.id)}>delete</button>
            <button onClick={() => updateText(todo.id)}>Update</button>
        </div>
    );
}

export default Todo;