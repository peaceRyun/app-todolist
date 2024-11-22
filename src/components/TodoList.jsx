'use client';

import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ mocTodoData, onUpdate, onDelete }) => {
    const [search, setSearch] = useState('');

    const filteredTodos = () => {
        return mocTodoData.filter((item) => item.task.toLowerCase().includes(search.toLowerCase()));
    };

    return (
        <div>
            <h2>할 일 목록</h2>
            <input
                type='search'
                value={search}
                placeholder='검색어를 입력하세요.'
                onChange={(e) => {
                    setSearch(e.target.value);
                }}
            />
            <ul>
                {filteredTodos().map(
                    (item) => (
                        console.log(item),
                        (<TodoItem key={item.id} {...item} onUpdate={onUpdate} onDelete={onDelete} />)
                    )
                )}
            </ul>
        </div>
    );
};

export default TodoList;
