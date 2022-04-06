import React, { useContext, useEffect } from 'react';
import './Toogle.css';
// import { ThemeContext } from '../ListApp';
import ThemeContext from '../Context/ThemeContext';

const { ThemesContext } = ThemeContext;

export default function Toogle() {
  const props = useContext(ThemesContext);

  const toogleChangeTheme = (e) => {
    props.changeTheme(e);
    const htmlTag = document.querySelector('html');

    htmlTag.classList.toggle('dark');
  };

  return (
    <div className='flex justify-between'>
      <label className='switch '>
        <input type='checkbox' onChange={toogleChangeTheme} />
        <span className='slider round dark:bg-slate-400'></span>
      </label>
    </div>
  );
}
