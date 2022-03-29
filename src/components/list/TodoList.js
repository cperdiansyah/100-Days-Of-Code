import React from 'react';

export default function TodoList({ todos, deleteTodo }) {
  return (
    <div>
      <ul className='todo-list mt-5'>
        {todos.map((todo) => {
          return (
            <li
              key={todo.id}
              className='px-5 py-2 shadow-md flex justify-between bg-white rounded-md mb-3'
            >
              {todo.text}
              <button onClick={() => deleteTodo(todo.id)}>
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
