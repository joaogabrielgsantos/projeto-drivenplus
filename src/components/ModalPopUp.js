import styled from "styled-components";
import close from "../assets/images/close.png"


function ModalPopUp({selectedPlan,modal,setModal}) {
    return (
        <>
            <ModalWrapper>
                <img src={close} alt="Fechar" onClick={()=>setModal(!modal)} />
                <Modal>
                    <h1>Tem certeza que deseja assinar o plano {selectedPlan.name} (R$ {selectedPlan.price})?</h1>
                    <div>
                        <ButtonModal color="#CECECE" onClick={()=>setModal(!modal)}>NÃO</ButtonModal>
                        <ButtonModal color="#FF4791">SIM</ButtonModal>
                    </div>
                </Modal>
            </ModalWrapper>

        </>
    )
}



export default ModalPopUp;



const ModalWrapper = styled.div `

width: 100%;
height: 100vh;
position: fixed;
background-color: rgba(0, 0, 0, 0.7);
display: flex;
justify-content: center;
align-items: center;
img {
    position: absolute;
    top: 26px;
    right: 20px;
    
}

`;

const Modal = styled.div`
position:relative;
width: 248px;
height: 210px;
background-color: #FFFFFF;
border-radius: 12px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 0px 22px;

h1 {
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: #000000;
    margin-bottom: 25px;
}
div {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

`;

const ButtonModal = styled.button`

width: 95px;
height: 52px;
background-color: ${props => props.color};
border-radius: 8px;
border: ${props => props.color};
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;




`;

