'use client';

import { ADD_TODO, DELETE_TODO, setTodos, UPDATE_TODO } from '@/states/todoReducer';

const { createContext, useContext, useReducer, useEffect } = require('react');

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
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
