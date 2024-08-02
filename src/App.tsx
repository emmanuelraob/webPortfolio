import React, { useRef, createContext, useContext, useState } from 'react';

import { useLanguage } from './locales/LanguageContext';

import './styles/App.css';
import Menu from './containers/menu/Menu';


function App() {
  const { translations } = useLanguage();

  return (
    <div className="App flex">
      <body>
        <Menu></Menu>

      </body>
    </div>
  );
}

export default App;
