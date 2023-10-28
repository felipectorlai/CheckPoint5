import React from 'react';
import styled from 'styled-components';

const TemaContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Tema = () => {
  return (
    <TemaContainer>
      <h1>O Tema da Era Digital</h1>
      <p>Explorando a transformação digital e suas tendências.</p>
    </TemaContainer>
  );
};

export default Tema;
