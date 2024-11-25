'use client';

import { ThemeContext } from '@/app/layout';
import { useTheme } from '@/contexts/ThemeContext';
import { useTodo } from '@/contexts/TodoContext';
import classNames from 'classnames';
import React, { useContext, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const TodoEditor = () => {
    const [task, setTask] = useState('');
    const inputRef = useRef();
    const theme = useTheme();
    const { addTodo } = useTodo();

    const onSubmit = () => {
        if (!task) return;

        addTodo(task);

        setTask('');
        inputRef.current.focus();
    };

    const onChangeTask = (e) => {
        setTask(e.target.value);
    };

    const onKeyDown = (e) => {
        if (e.key === 'Enter') onSubmit();
        if (e.key === 'Escape') {
            setTask('');
            inputRef.current.focus();
        }
    };

    const onCloseKey = () => {
        setTask('');
        inputRef.current.focus();
    };

    return (
        <div>
            <h2>새로운 Todo 작성하기</h2>
            <form className='flex items-center gap-5'>
                <div className='relative'>
                    <input
                        ref={inputRef}
                        type='text'
                        value={task}
                        onKeyDown={onKeyDown}
                        onChange={onChangeTask}
                        placeholder='할 일을 입력하세요.'
                        className={classNames('p-3 w-full', theme.input, `text-${theme.white} bg-${theme.black}`)}
                    />
                    <button onClick={onCloseKey} className='absolute top-1/2 right-1 -translate-y-1/2'>
                        <IoMdClose />
                    </button>
                </div>
                <button
                    type='submit'
                    onClick={onSubmit}
                    disabled={!task}
                    className={classNames('p-3', task ? 'bg-blue-300' : 'bg-gray-300')}
                >
                    할일 추가
                </button>
            </form>
        </div>
    );
};

export default TodoEditor;
