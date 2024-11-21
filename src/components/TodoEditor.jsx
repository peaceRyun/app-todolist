'use client';

import classNames from 'classnames';
import React, { useState } from 'react';

const TodoEditor = ({ addTodo }) => {
    const [task, setTask] = useState('');

    const onSubmit = () => {
        addTodo(task);
        setTask('');
    };

    const onChangeTask = (e) => {
        setTask(e.target.value);
    };

    return (
        <div>
            <h2>새로운 Todo 작성하기</h2>
            <input type='text' value={task} onChange={onChangeTask} placeholder='할 일을 입력하세요.' />
            <button
                onClick={onSubmit}
                disabled={!task}
                className={classNames('p-3', task ? 'bg-blue-300' : 'bg-gray-300')}
            >
                할일 추가
            </button>
        </div>
    );
};

export default TodoEditor;
