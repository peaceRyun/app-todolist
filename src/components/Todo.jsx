'use client';

import React from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';

const Todo = () => {
    return (
        <div className='flex flex-col gap-4 p-8'>
            <TodoHd />
            <TodoEditor />
            <TodoList />
        </div>
    );
};

export default Todo;
