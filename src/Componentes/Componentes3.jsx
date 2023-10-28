import React from 'react';

function Componente3(props) {
    return (
        <>
            <h3>COMPONENTE3</h3>
            <p>INFORMAÇÃO ENVIADA PELO COMPONENTE PAI: {props.textoPai}</p>
            <button onClick={props.clicouPai}>CLIQUE AQUI</button>
        </>
    );
}

export default Componente3;