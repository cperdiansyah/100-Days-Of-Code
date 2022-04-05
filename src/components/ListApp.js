import React, { createContext, useState } from 'react';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
// import Toogle from './toogle/Toogle';

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
  const [theme, setTheme] = useState(themes.light.title);

  /* Theme */

  const changeTheme = (e) =>
    setTheme(e.target.checked ? themes.dark.title : themes.light.title);
  const themeState = [theme, changeTheme];
  console.log(theme);

  /* Todo Handler */
  const handleSubmit = (todo) => {
    setTodos([...todos, { id: Date.now(), text: todo, done: false }]);
  };

  const handleListHandler = (id) => {
    const newTodos = todos.map((todo) => {
      const target = todo.id === id ? { ...todo, done: !todo.done } : todo;
      return target;
    });
    setTodos(newTodos);
  };

  const deleteTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <ThemeContext.Provider value={themeState}>
      <div className='w-fit mx-auto mt-10 container-md p-5 bg-blue-400 rounded-md drop-shadow-md'>
        <h1 className='text-2xl text-center font-medium text-white mb-3'>
          TODO LIST
        </h1>

        {/* <Toogle /> */}

        <TodoForm handleSubmit={handleSubmit} />

        <TodoList
          todos={todos}
          deleteTodo={deleteTodoHandler}
          doneTodo={handleListHandler}
        />
      </div>
    </ThemeContext.Provider>
  );
}
export { ThemeContext };
