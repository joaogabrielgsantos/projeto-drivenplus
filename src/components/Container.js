import styled from 'styled-components';
function Container({children}){
    return (
        <Conteudo>
            {children}
        </Conteudo>
    )
}


const Conteudo = styled.div`
	width: 100%;
    height: 100vh;
	background-color: #0E0E13;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;




export default Container;