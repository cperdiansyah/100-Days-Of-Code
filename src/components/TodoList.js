import React, { useContext } from 'react';
import TodoContext from './Context/TodoContext';

const { TodoFormContext } = TodoContext;

export default function TodoList(props) {
  const todoProps = useContext(TodoFormContext);

  const handleListHandler = (idTarget) => {
    const newTodos = todoProps.todo.map((props) => {
      if (props.id === idTarget) {
        return { ...props, completed: !props.completed };
      }
      return props;
    });
    todoProps.setTodo(newTodos);
  };

  return (
    <div>
      <ul className='todo-list mt-5'>
        {todoProps.todo.map((todo) => {
          return (
            <li
              key={todo.id}
              className='px-5 py-2 shadow-md flex items-center justify-between bg-white rounded-md mb-3'
            >
              <input
                id={todo.id}
                type='checkbox'
                className='appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white  checked:border-blue-600 checked:bg-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer'
                onClick={() => {
                  handleListHandler(todo.id);
                }}
              />

              <label htmlFor={todo.id}>
                {todo.completed ? <strike>{todo.text}</strike> : todo.text}
              </label>

              <button onClick={() => todoProps.deleteTodoHandler(todo.id)}>
                <span className='material-icons-outlined text-slate-500'>
                  delete
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
