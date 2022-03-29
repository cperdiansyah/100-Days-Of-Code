import React, { useState } from 'react';
import TodoForm from './form/TodoForm';
import TodoList from './list/TodoList';
export default function ListApp() {
  const [todos, setTodos] = useState([]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "w-fit mx-auto mt-10 container-md"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "text-2xl text-center font-medium"
  }, "TODO LIST"), /*#__PURE__*/React.createElement(TodoForm, {
    saveTodo: todoText => {
      setTodos([...todos, {
        id: Date.now(),
        text: todoText
      }]);
    }
  }), /*#__PURE__*/React.createElement(TodoList, {
    todos: todos
  })));
}