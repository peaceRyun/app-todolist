'use client';

import React from 'react';

const TodoItem = ({ task, createDate, isDone }) => {
    return (
        <li>
            <input type='checkbox' checked={isDone} /> <p>{task}</p>
            <span>{createDate}</span>
            <button>삭제</button>
        </li>
    );
};

export default TodoItem;
