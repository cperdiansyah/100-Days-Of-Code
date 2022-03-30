import React, { useContext } from 'react';
import './Toogle.css';
import { ThemeContext } from '../ListApp';

export default function Toogle() {
  const { theme, setTheme } = useContext(ThemeContext);

  console.log(useContext(ThemeContext));
  
  return (
    <>
      <label className='switch block ml-auto'>
        <input
          type='checkbox'
          onChange={(e) => {
            console.log(e.target.checked);
          }}
        />
        <span className='slider round'></span>
      </label>
    </>
  );
}
