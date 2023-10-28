import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MenuContainer = styled.nav`
  background: ${(props) => props.theme.corMenuBackground};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const MenuItem = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.corTextoMenu};
  margin: 0 1rem;
`;

const Menu = ({ toggleTheme }) => {
  return (
    <MenuContainer>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/contato">Contato</MenuItem>
      <MenuItem to="/sobre">Sobre</MenuItem>
      <MenuItem to="/tema">Tema</MenuItem>
      <button onClick={toggleTheme}>Alternar Tema</button>
    </MenuContainer>
  );
};

export default Menu;
