import React, { useContext } from 'react';
import './Toogle.css';
import { ThemeContext } from '../ListApp';
export default function Toogle() {
  const {
    theme,
    setTheme
  } = useContext(ThemeContext);
  console.log(useContext(ThemeContext));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("label", {
    className: "switch block ml-auto"
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    onChange: e => {
      console.log(e.target.checked);
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "slider round"
  })));
}