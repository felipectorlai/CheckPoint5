function Componentes3(props){
    return(
        <>
        <h3>COMPONENTES3</h3>
        <p>INFORMAÇÃO ENVIADA PELO COMPONENTE PAI: {props.textoPai}
        </p>

        <button onClick={props.clicouPai}>CLIQUE AQUI</button>
        </>        
    )
}
export default Componentes3;