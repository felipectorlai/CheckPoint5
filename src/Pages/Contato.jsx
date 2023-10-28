import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const ContatoContainer = styled.div`
  text-align: center;
  padding: 2rem;
`;

const FormularioContato = styled.form`
  display: flex;
  flex-direction: column;
  margin: 1rem auto;
  max-width: 300px;
`;

const Input = styled.input`
  padding: 0.5rem;
  margin: 0.5rem 0;
`;

const Contato = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState({});

  const handleCepChange = (e) => {
    setCep(e.target.value);
  };

  const pesquisaCEP = () => {
    axios.get(`https://viacep.com.br/ws/${cep}/json`).then((response) => {
      if (!response.data.erro) {
        setEndereco(response.data);
      }
    });
  };

  return (
    <ContatoContainer>
      <h1>Entre em Contato</h1>
      <FormularioContato>
        <Input
          type="text"
          placeholder="Nome"
          // Adicione outras entradas do formulário
        />
        <Input
          type="email"
          placeholder="E-mail"
          // Adicione outras entradas do formulário
        />
        <Input
          type="text"
          placeholder="CEP"
          value={cep}
          onChange={handleCepChange}
        />
        <button type="button" onClick={pesquisaCEP}>
          Pesquisar CEP
        </button>
        {/* Exiba as informações do endereço após a pesquisa */}
        {endereco.logradouro && (
          <div>
            <p>Logradouro: {endereco.logradouro}</p>
            <p>Bairro: {endereco.bairro}</p>
            <p>Cidade: {endereco.localidade}</p>
            <p>Estado: {endereco.uf}</p>
          </div>
        )}
      </FormularioContato>
    </ContatoContainer>
  );
};

export default Contato;
