'use client';

import React, { useEffect, useReducer, useState } from 'react';
import TodoHd from './TodoHd';
import TodoEditor from './TodoEditor';
import TodoList from './TodoList';
import { setTodos } from '@/states/todoReducer';

const Todo = () => {
    // const [todos, setTodos] = useState([]);
    const [todos, dispatch] = useReducer(setTodos, []);

    const addTodo = (task) => {
        dispatch({ type: 'ADD_TODO', payload: { task } });
    };

    const onUpdate = (id) => {
        dispatch({ type: 'UPDATE_TODO', payload: { id } });
    };

    const onDelete = (id) => {
        dispatch({ type: 'DELETE_TODO', payload: { id } });
    };

    useEffect(() => {
        const savedTodos = JSON.parse(localStorage.getItem('todos')) || [];

        setTodos(savedTodos);
        console.log(savedTodos);
    }, []);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }),
        [todos];

    // const onDelete = (id) => {
    //     setTodos(todos.filter((todo) => todo.id !== id));
    // };

    return (
        <div className='flex flex-col gap-4 p-8'>
            <TodoHd />
            <TodoEditor addTodo={addTodo} />
            <TodoList mocTodoData={todos} onUpdate={onUpdate} onDelete={onDelete} />
        </div>
    );
};

export default Todo;
