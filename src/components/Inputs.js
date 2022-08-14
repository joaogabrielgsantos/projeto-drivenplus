import styled from "styled-components";


function Inputs ({children}){
    return (
        <InputsWrapper>
            {children}
        </InputsWrapper>

    )
}

const InputsWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
input {
    width: 299px;
    height: 52px;
    background: #FFFFFF;
    border: 1px solid #D5D5D5;
    border-radius: 8px;
    padding-left: 14px;
    margin-bottom: 16px;
    &::placeholder {
        font-size: 14px;
        line-height: 16px;
        color: #7E7E7E;
   }
}
div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    input{
        width: 146px;
        padding-left: 6px;
        
    }
}

button {
    width: 299px;
    height: 52px;
    background: #FF4791;
    border-radius: 8px;
    border: #FF4791;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    margin-bottom: 24px;
    margin-top: 8px;

}

`;


export default Inputs;