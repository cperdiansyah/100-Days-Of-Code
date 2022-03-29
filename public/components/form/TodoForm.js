import React, { useState } from 'react';
export default function TodoForm({
  saveTodo
}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    saveTodo(value);
    console.warn('Todo saved:', value);
    setValue('');
  };

  return /*#__PURE__*/React.createElement("form", {
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement("label", {
    className: "relative block w-60 mx-auto mt-3"
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr-only"
  }, "Search"), /*#__PURE__*/React.createElement("span", {
    className: "absolute inset-y-0 left-0 flex items-center pl-2"
  }, /*#__PURE__*/React.createElement("span", {
    className: "material-icons-outlined h-5 w-5 text-gray-700"
  }, "search")), /*#__PURE__*/React.createElement("input", {
    className: "placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
    placeholder: "Add something...",
    type: "text",
    name: "search",
    onChange: event => setValue(event.target.value),
    value: value
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "py-2 px-3 bg-blue-600 text-white rounded-md mt-3 hidden"
  }, "Submit"));
}