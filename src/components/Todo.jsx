import React from 'react';

const Todo = () => {
    return (
        <>
            <div>
                <strong>2024.04.22</strong>
                <p>오늘의 할 일을 적어보세요.</p>
            </div>
            <div>
                <h2>새로운 Todo 작성하기</h2>
                <input type='text' /> <button>할 일 추가</button>
            </div>
            <div>
                <h2>할 일 목록</h2>
                <input type='text' />
                <ul>
                    <li>
                        <input type='checkbox' /> <p>고양이 츄루주기</p>
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
        </>
    );
};

export default Todo;
