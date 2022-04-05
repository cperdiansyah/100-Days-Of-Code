import React, { createContext, useState } from 'react';
import ThemeContext from './ThemeContext';
import Toogle from './toogle/Toogle';

const { ThemesContext, ThemeProvider } = ThemeContext;

export default function ContextPage() {
  return (
    <ThemeProvider>
      <div className='container w-fit'>
        <div className=' mt-10 container-md p-5  bg-blue-400 rounded-md drop-shadow-md'>
          <div className='header flex items-center'>
            <h1 className='text-2xl text-center font-medium text-white mb-3 mr-3'>
              TODO LIST
            </h1>
            <Toogle />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
