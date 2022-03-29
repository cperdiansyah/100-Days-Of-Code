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
  }, /*#__PURE__*/React.createElement("svg", {
    className: "h-5 w-5 fill-gray-700",
    viewBox: "0 0 20 20"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18.125,15.804l-4.038-4.037c0.675-1.079,1.012-2.308,1.01-3.534C15.089,4.62,12.199,1.75,8.584,1.75C4.815,1.75,1.982,4.726,2,8.286c0.021,3.577,2.908,6.549,6.578,6.549c1.241,0,2.417-0.347,3.44-0.985l4.032,4.026c0.167,0.166,0.43,0.166,0.596,0l1.479-1.478C18.292,16.234,18.292,15.968,18.125,15.804 M8.578,13.99c-3.198,0-5.716-2.593-5.733-5.71c-0.017-3.084,2.438-5.686,5.74-5.686c3.197,0,5.625,2.493,5.64,5.624C14.242,11.548,11.621,13.99,8.578,13.99 M16.349,16.981l-3.637-3.635c0.131-0.11,0.721-0.695,0.876-0.884l3.642,3.639L16.349,16.981z"
  }))), /*#__PURE__*/React.createElement("input", {
    className: "placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm",
    placeholder: "Search for anything...",
    type: "text",
    name: "search",
    onChange: event => setValue(event.target.value),
    value: value
  })), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "py-2 px-3 bg-blue-600 text-white rounded-md mt-3 hidden"
  }, "Submit"));
}