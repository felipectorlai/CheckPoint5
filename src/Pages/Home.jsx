import Menu from '../Componentes/Menu';

export default () => {
    return (
        <>
            <Menu />
            <div style={containerStyle}>
                <h1 style={titleStyle}>Bem-Vindo à Era Digital</h1>
                <p style={descriptionStyle}>
                    Nossa missão é impulsionar a inovação e a tecnologia na Era Digital.
                    Explore as possibilidades, descubra soluções e faça parte da transformação.
                </p>
            </div>
        </>
    );
}

const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '80vh',
    padding: '20px',
};

const titleStyle = {
    fontSize: '36px',
    color: 'maroon',
};

const descriptionStyle = {
    fontSize: '18px',
    textAlign: 'center',
    marginTop: '20px',
};
