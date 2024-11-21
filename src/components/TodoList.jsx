'use client';

import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ mocTodoData }) => {
    return (
        <div>
            <h2>할 일 목록</h2>
            <input type='text' />
            <ul>
                {mocTodoData.map((item) => (
                    <TodoItem key={item.id} {...item} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
