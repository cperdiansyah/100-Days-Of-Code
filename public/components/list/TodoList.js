import React from 'react';
export default function TodoList({
  todos,
  deleteTodo
}) {
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    className: "todo-list mt-5"
  }, todos.map(todo => {
    return /*#__PURE__*/React.createElement("li", {
      key: todo.id,
      className: "px-5 py-2 shadow-md flex justify-between bg-white rounded-md mb-3"
    }, todo.text, /*#__PURE__*/React.createElement("button", {
      onClick: () => deleteTodo(todo.id)
    }, /*#__PURE__*/React.createElement("span", {
      className: "material-icons-outlined text-slate-500"
    }, "delete")));
  })));
}