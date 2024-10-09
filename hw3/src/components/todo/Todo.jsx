import React from 'react';

const Todo = () => {
    const todos = ["todo 1", "todo 2", "todo 3"];

    return (
        <div>
            {todos.map(todo => (
                <Todo key={todo} todo={todo} />
            ))}
            <h2 className={classes.title}>I am Todo</h2>
        </div>
    );
};

export default Todo;