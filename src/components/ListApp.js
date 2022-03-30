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
    const filter = todos.filter((todo) => todo.id !== id);
    setTodos(filter);
  };

  const saveTodoHandler = (todoText) => {
    setTodos([...todos, { id: Date.now(), text: todoText, done: false }]);
  };

  const checklistDoneHandler = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, done: !todo.done };
      }
      return todo;
    });

    setTodos(newTodos);
  };

  return (
    <>
      <div className='w-fit mx-auto mt-10 container-md p-5 bg-blue-400 rounded-md drop-shadow-md'>
        <h1 className='text-2xl text-center font-medium text-white mb-3'>
          TODO LIST
        </h1>

        <ThemeContext.Provider value={themes.light.title}>
          <Toogle />
        </ThemeContext.Provider>

        <TodoForm saveTodo={saveTodoHandler} />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          doneTodo={checklistDoneHandler}
        />
      </div>
    </>
  );
}
export { ThemeContext };
