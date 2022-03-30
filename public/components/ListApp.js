import React, { createContext, useState } from 'react';
import TodoForm from './form/TodoForm';
import TodoList from './list/TodoList';
import Toogle from './toogle/Toogle';
const themes = {
  light: {
    title: 'light',
    foreground: '#000000',
    background: '#eeeeee'
  },
  dark: {
    title: 'dark',
    foreground: '#ffffff',
    background: '#222222'
  }
};
const ThemeContext = /*#__PURE__*/createContext({
  theme: themes.light.title,
  setTheme: () => {}
});
export default function ListApp() {
  const [todos, setTodos] = useState([]);

  const deleteTodoHandler = id => {
    const filter = todos.filter(todo => todo.id !== id);
    setTodos(filter);
  };

  const saveTodoHandler = todoText => {
    setTodos([...todos, {
      id: Date.now(),
      text: todoText,
      done: false
    }]);
  };

  const checklistDoneHandler = id => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return { ...todo,
          done: !todo.done
        };
      }

      return todo;
    });
    setTodos(newTodos);
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-fit mx-auto mt-10 container-md p-5 bg-blue-400 rounded-md drop-shadow-md"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl text-center font-medium text-white mb-3"
  }, "TODO LIST"), /*#__PURE__*/React.createElement(ThemeContext.Provider, {
    value: themes.light.title
  }, /*#__PURE__*/React.createElement(Toogle, null)), /*#__PURE__*/React.createElement(TodoForm, {
    saveTodo: saveTodoHandler
  }), /*#__PURE__*/React.createElement(TodoList, {
    todos: todos,
    deleteTodo: deleteTodoHandler,
    doneTodo: checklistDoneHandler
  })));
}
export { ThemeContext };