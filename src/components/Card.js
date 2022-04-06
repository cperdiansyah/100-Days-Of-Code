import React from 'react';
import Toogle from './toogle/Toogle';

export default function Card(props) {
  return (
    <div className='container w-fit'>
      <div className=' mt-10 container-md p-5 bg-blue-400 rounded-md drop-shadow-md'>
        <div className='header flex items-center'>
          <h1 className='text-2xl text-center font-medium text-white mb-3 mr-3'>
            TODO LIST
          </h1>
          <Toogle />
        </div>
        {props.children}
      </div>
    </div>
  );
}
