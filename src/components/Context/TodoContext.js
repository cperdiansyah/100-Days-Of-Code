import React, { createContext, useState } from 'react';

function TodoContext() {
  const TodoFormContext = createContext();
  const TodoProvider = (props) => {
    const [todo, setTodo] = useState([]);

    const deleteTodoHandler = (id) => {
      setTodo(todo.filter((todo) => todo.id !== id));
    };
    const todoState = { todo, setTodo, deleteTodoHandler };

    return (
      <TodoFormContext.Provider value={todoState}>
        {props.children}
      </TodoFormContext.Provider>
    );
  };

  return { TodoFormContext, TodoProvider };
}
export default TodoContext();
