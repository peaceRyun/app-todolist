'use client';

import classNames from 'classnames';
import React from 'react';

const TodoItem = ({ id, task, createDate, isDone, onUpdate }) => {
    return (
        <li key={id} className='flex gap-2 items-center'>
            <input
                type='checkbox'
                checked={isDone}
                onChange={() => {
                    onUpdate(id);
                }}
            />
            <strong className={classNames('py-2 text-lg', isDone ? 'line-through' : '')}>{task}</strong>
            <span className='ml-auto text-sm text-gray-400'>{createDate}</span>
            <button>삭제</button>
        </li>
    );
};

export default TodoItem;
