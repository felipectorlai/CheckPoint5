import React from 'react';
import styled from 'styled-components';

const InicialContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Inicial = () => {
  return (
    <InicialContainer>
      <h1>Bem-Vindo à Era Digital</h1>
      <p>Seu ponto de partida para inovação e tecnologia.</p>
    </InicialContainer>
  );
};

export default Inicial;
