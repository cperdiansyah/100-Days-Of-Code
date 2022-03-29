import React, { createContext, useState } from 'react';
import TodoForm from './form/TodoForm';
import TodoList from './list/TodoList';
import Toogle from './toogle/Toogle';

const themes = {
  light: {
    title: 'light',
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    title: 'dark',
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = createContext({
  theme: themes.light.title,
  setTheme: () => {},
});

export default function ListApp() {
  const [todos, setTodos] = useState([]);

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <div className='w-fit mx-auto mt-10 container-md p-5 bg-blue-400 rounded-md shadow-md'>
        <h1 className='text-2xl text-center font-medium text-white'>
          TODO LIST
        </h1>

        <ThemeContext.Provider value={themes.light.title}>
          <Toogle />
        </ThemeContext.Provider>

        <TodoForm
          saveTodo={(todoText) => {
            setTodos([...todos, { id: Date.now(), text: todoText }]);
          }}
        />
        <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
      </div>
    </>
  );
}

export { ThemeContext };
