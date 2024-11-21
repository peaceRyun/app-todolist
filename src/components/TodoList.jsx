import React from 'react';

const TodoList = () => {
    return (
        <div>
            <h2>할 일 목록</h2>
            <input type='text' />
            <ul>
                <li>
                    <input type='checkbox' /> <p>고양이 츄르 주기</p>
                    <span>2024.04.22</span>
                    <button>삭제</button>
                </li>
                <li>
                    <input type='checkbox' /> <p>덩오줌 치우기</p>
                    <span>2024.04.22</span>
                    <button>삭제</button>
                </li>
                <li>
                    <input type='checkbox' /> <p>고양이 놀아주기</p>
                    <span>2024.04.22</span>
                    <button>삭제</button>
                </li>
            </ul>
        </div>
    );
};

export default TodoList;
