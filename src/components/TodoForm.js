import React, { useRef, useState } from 'react';

export default function TodoForm(props) {
  const [value, setValue] = useState('');
  const inputForm = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleSubmit(value);
    setValue(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className='relative block w-60 mx-auto mt-3'>
        <span className='sr-only'>Search</span>
        <span className='absolute inset-y-0 left-0 flex items-center pl-2'>
          <span className='material-icons-outlined h-5 w-5 text-gray-700'>
            search
          </span>
        </span>
        <input
          className='placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm'
          placeholder='Add something...'
          type='text'
          name='search'
          onChange={(e) => setValue(e.target.value)}
          ref={inputForm}
          value={value}
        />
      </label>
      <button
        type='submit'
        className='py-2 px-3 bg-blue-600 text-white rounded-md mt-3 hidden'
      >
        Submit
      </button>
    </form>
  );
}
