'use client';

import classNames from 'classnames';
import React, { useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';

const TodoEditor = ({ addTodo }) => {
    const [task, setTask] = useState('');

    // input Ref 변수가 useRef()를 통해 생성된 객체를 참조하도록 설정
    const inputRef = useRef();

    const onSubmit = () => {
        // 빈 입력 방지
        if (!task) return;

        // 할 일 추가
        addTodo(task);
        // 입력창 초기화 및 포커스
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
