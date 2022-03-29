import React, { useState } from 'react';
import TodoForm from './form/TodoForm';
import TodoList from './list/TodoList';

export default function ListApp() {
  const [todos, setTodos] = useState([]);
  return (
    <>
      <div className='w-fit mx-auto mt-10 container-md'>
        <h1 className='text-2xl text-center font-medium'>TODO LIST</h1>
        <TodoForm
          saveTodo={(todoText) => {
            setTodos([...todos, { id: Date.now(), text: todoText }]);
          }}
        />
        <TodoList todos={todos} />
      </div>
    </>
  );
}
