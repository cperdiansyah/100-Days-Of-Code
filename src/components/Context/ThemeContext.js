import React, { createContext, useState } from 'react';

function ThemeContext() {
  const ThemesContext = createContext();

  const ThemeProvider = (props) => {
    const [theme, setTheme] = useState('light');
    const changeTheme = (e) => setTheme(e.target.checked ? 'dark' : 'light');
    const themeState = { theme, changeTheme };
    return (
      <ThemesContext.Provider value={themeState}>
        {props.children}
      </ThemesContext.Provider>
    );
  };

  return { ThemesContext, ThemeProvider };
}
export default ThemeContext();
