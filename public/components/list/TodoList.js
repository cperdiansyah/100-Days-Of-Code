import React, { useRef } from 'react';
export default function TodoList({
  todos,
  deleteTodo,
  doneTodo
}) {
  console.log(todos);
  const inputRef = useRef(null);
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "todo-list mt-5"
  }, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id,
      className: "px-5 py-2 shadow-md flex items-center justify-between bg-white rounded-md mb-3"
    }, /*#__PURE__*/React.createElement("input", {
      id: todo.id,
      type: "checkbox",
      className: "appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white  checked:border-blue-600 checked:bg-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer\r {todo.done ? \"checked\" : \"\"}\r ",
      onClick: doneTodo.bind(this, todo.id)
    }), /*#__PURE__*/React.createElement("label", {
      htmlFor: todo.id
    }, todo.done ? /*#__PURE__*/React.createElement("strike", null, todo.text) : todo.text), /*#__PURE__*/React.createElement("button", {
      onClick: deleteTodo.bind(this, todo.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-icons-outlined text-slate-500"
    }, "delete")));
  })));
}