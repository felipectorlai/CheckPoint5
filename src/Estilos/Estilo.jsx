import styled from "styled-components";

export const lightTheme = {
    corFundo: 'honeydew',
    corTexto: 'maroon',
    corTitulo: 'red'
}

export const darkTheme = {
    corFundo: '#2a0a0a',
    corTexto: 'white',
    corTitulo: '#fffdd0'
}

// Criando uma div
export const Container = styled.div`
    background-color: ${props => props.theme.corFundo};
    color: ${props => props.theme.corTexto};
    font-family: "Roboto", sans-serif; // Escolha uma fonte moderna
`

// Criando um botão
export const Button = styled.button`
    padding: 10px;
    border: none;
    background-color: #007bff; // Cor azul moderna
    color: white;
    margin: 10px;
    border-radius: 4px; // Borda arredondada
    cursor: pointer; // Ícone de mão para indicar clique
`

// Criando um título
export const TitlePage = styled.h1`
    color: ${props => props.theme.corTitulo};
    font-size: 24px; // Tamanho de fonte maior
    font-weight: bold; // Texto em negrito
`

export const InformacoesCep = styled.div`
    margin: 20px;
    display: flex;
    flex-direction: column;
`

// Criando uma div para formulários
export const DivForm = styled.div`
    display: inline;
    background-color: #f4f4f4; // Cor de fundo mais clara
    padding: 20px; // Espaçamento interno
    border-radius: 8px; // Borda arredondada
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); // Sombra leve
`
