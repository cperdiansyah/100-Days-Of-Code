import React, { useContext } from 'react';
import './Toogle.css';
import { ThemeContext } from '../ListApp';

export default function Toogle() {
  const [theme, setTheme] = useContext(ThemeContext);
  
  return (
    <div className='flex justify-between'>
      <span className='text-white'>{theme}</span>

      <label className='switch '>
        <input type='checkbox' onChange={setTheme} />
        <span className='slider round'></span>
      </label>
    </div>
  );
}
