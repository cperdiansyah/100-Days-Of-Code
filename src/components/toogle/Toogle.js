import React, { useContext } from 'react';
import './Toogle.css';
// import { ThemeContext } from '../ListApp';
import ThemeContext from '../ThemeContext';

const { ThemesContext } = ThemeContext;

export default function Toogle() {
  const props = useContext(ThemesContext);

  return (
    <div className='flex justify-between'>
      <label className='switch '>
        <input type='checkbox' onChange={props.changeTheme} />
        <span className='slider round'></span>
      </label>
    </div>
  );
}
