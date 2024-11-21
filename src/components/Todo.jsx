import React from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const Todo = () => {
    return (
        <>
            <TodoHd />
            <TodoEditor />
            <TodoList />
        </>
    );
};

export default Todo;