'use client';

import { ADD_TODO, DELETE_TODO, setTodos, UPDATE_TODO } from '@/states/todoReducer';

const { createContext, useContext, useReducer, useEffect } = require('react');

//생성
const TodoContext = createContext();

//공급
export const TodoProvider = ({ children }) => {
    // 로컬 스토리지 키 선언
    const LOCAL_STORAGE_KEY = 'my-todo-app-todos';
    const [todos, dispatch] = useReducer(setTodos, []);

    const addTodo = (task) => {
        dispatch({ type: ADD_TODO, payload: { task } });
    };

    const onUpdate = (id) => {
        dispatch({ type: UPDATE_TODO, payload: { id } });
    };

    const onDelete = (id) => {
        dispatch({ type: DELETE_TODO, payload: { id } });
    };

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [];

        // setTodos(savedTodos);
        savedTodos.forEach((todo) => {
            return dispatch({
                type: ADD_TODO,
                payload: todo,
            });
        });
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
    }),
        [todos];

    const value = {
        todos,
        addTodo,
        onUpdate,
        onDelete,
    };

    return <TodoContext.Provider value={value}>{children}</TodoContext.Provider>;
};

//사용
export const useTodo = () => {
    return useContext(TodoContext);
};
