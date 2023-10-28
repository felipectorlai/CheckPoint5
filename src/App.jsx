import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Menu from './Componentes/Menu';
import Inicial from './Paginas/Inicial';
import Contato from './Paginas/Contato';
import Sobre from './Paginas/Sobre';
import Tema from './Paginas/Tema';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${(props) => props.theme.corFundo};
    color: ${(props) => props.theme.corTexto};
    transition: background-color 0.3s, color 0.3s;
  }
`;

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyle />
      <Router>
        <Menu toggleTheme={toggleTheme} />
        <Switch>
          <Route path="/contato">
            <Contato />
          </Route>
          <Route path="/sobre">
            <Sobre />
          </Route>
          <Route path="/tema">
            <Tema />
          </Route>
          <Route path="/">
            <Inicial />
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
