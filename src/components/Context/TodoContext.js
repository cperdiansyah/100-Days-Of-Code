import React, { createContext, useState } from 'react';

function TodoContext() {
  const TodoFormContext = createContext();
  const TodoProvider = (props) => {
    const [todo, setTodo] = useState([]);
    const todoState = { todo, setTodo };

    return (
      <TodoFormContext.Provider value={todoState}>
        {props.children}
      </TodoFormContext.Provider>
    );
  };

  return { TodoFormContext, TodoProvider };
}
export default TodoContext();
