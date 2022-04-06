import React, { useContext } from 'react';
import './Toogle.css';
// import { ThemeContext } from '../ListApp';
import ThemeContext from '../Context/ThemeContext';

const { ThemesContext } = ThemeContext;

export default function Toogle() {
  const props = useContext(ThemesContext);
  return (
    <div className='flex justify-between'>
      <span className='text-white'>{props.theme}</span>
      <label className='switch '>
        <input type='checkbox' onChange={props.changeTheme} />
        <span className='slider round'></span>
      </label>
    </div>
  );
}
