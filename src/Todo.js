import { useState } from 'react';

function Todo() {
  const [activity, setActivity] = useState('');
  const [todos, setTodos] = useState([]);
  const [edit, setEdit] = useState({});
  const [message, setMessage] = useState('');

  function generateId() {
    return Date.now();
  }

  function removeHandler(todoId) {
    const filteredTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(filteredTodos);

    if (edit.id) cancelEditHandler();
  }
  function editTodoHandler(todo) {
    setActivity(todo.activity);
    setEdit(todo);
  }

  function cancelEditHandler() {
    setActivity('');
    setEdit({});
  }

  function doneTodoHandler(todo) {
    const updatedTodo = {
      ...todo,
      done: todo.done ? false : true,
    };

    const editTodoIndex = todos.findIndex(
      (currentTodo) => currentTodo.id === todo.id
    );
    const updatedTodos = [...todos];
    updatedTodos[editTodoIndex] = updatedTodo;

    setTodos(updatedTodos);
  }

  const saveTodoHandler = (event) => {
    event.preventDefault();

    if (!activity) {
      return setMessage('Please enter an activity');
    }

    setMessage('');

    if (edit.id) {
      const updateTodo = {
        ...edit,
        activity,
      };

      const editTodoIndex = todos.findIndex((todo) => todo.id === edit.id);
      const updateTodos = [...todos];
      updateTodos[editTodoIndex] = updateTodo;

      setTodos(updateTodos);

      cancelEditHandler();

      return;
    }

    setTodos([
      ...todos,
      {
        id: generateId(),
        done: false,
        activity,
      },
    ]);
    setActivity('');
  };

  return (
    <>
      <h1>Simple Todo list</h1>
      {message && (
        <p className='message' style={{ color: 'red' }}>
          {message}
        </p>
      )}
      <form onSubmit={saveTodoHandler}>
        <input
          type='text'
          placeholder='Nama Aktivitas'
          value={activity}
          onChange={(event) => {
            setActivity(event.target.value);
          }}
        />
        <button type='submit'>{edit.id ? 'Simpan' : 'Tambah'}</button>

        {edit.id && <button onClick={cancelEditHandler}>Batal</button>}
      </form>
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo) => {
            return (
              <li key={todo.id}>
                {todo.activity}({todo.done ? 'Selesai' : 'Belum'})
                <input
                  type='checkbox'
                  checked={todo.done}
                  onChange={doneTodoHandler.bind(this, todo)}
                />
                <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                <button onClick={removeHandler.bind(this, todo.id)}>
                  Hapus
                </button>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Tidak ada aktivitas</p>
      )}
    </>
  );
}
export default Todo;
