import React from 'react';
import styled from 'styled-components';

const SobreContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const Sobre = () => {
  return (
    <SobreContainer>
      <h1>Sobre o Projeto</h1>
      <p>Um projeto dedicado à Era Digital e sua inovação.</p>
    </SobreContainer>
  );
};

export default Sobre;
