import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import close from "../assets/images/close.png"
import CustomerContext from "../contexts/CustomerContext";
import { postSignPlan } from "../services/DrivenPlus";


function ModalPopUp({ modal, setModal }) {

    const { member, setMember, securityNumber, expirationDate, cardName, cardNumber, selectedPlan, idPlan } = useContext(CustomerContext)
    const navigate = useNavigate();
    console.log(member);


    /* function saveEditedNote(member) {
        let notesEdit = JSON.parse(localStorage.getItem("drivenplus"))
            .filter(item => item.noteId !== member.id)

        notesEdit.push({
            id: member.id,
            name: member.name,
            cpf: member.cpf,
            email: member.email,
            password: member.password,
            membership: member.membership,
            token: member.token
        })
        localStorage.setItem("drivenplus", JSON.stringify(notesEdit))
    } */




    function handleConfirmationPlan() {
        const body = {
            membershipId: idPlan[0],
            cardName: cardName,
            cardNumber: cardNumber,
            securityNumber: parseInt(securityNumber),
            expirationDate: expirationDate
        }
        postSignPlan(body).then(response => {
            const { data } = response
            console.log(data)
            setMember({ ...member, membership: data.membership })
           /*  saveEditedNote(member) */
            navigate("/home")

        })
        postSignPlan(body).catch(response => {
            const { data } = response
            console.log(data);
            alert("Não foi possível assinar o plano")
            setModal(!modal)
        })
    }




    return (
        <>
            <ModalWrapper>
                <img src={close} alt="Fechar" onClick={() => setModal(!modal)} />
                <Modal>
                    <h1>Tem certeza que deseja assinar o plano {selectedPlan.name} (R$ {selectedPlan.price})?</h1>
                    <div>
                        <ButtonModal color="#CECECE" onClick={() => setModal(!modal)}>NÃO</ButtonModal>
                        <ButtonModal color="#FF4791" onClick={handleConfirmationPlan}>SIM</ButtonModal>
                    </div>
                </Modal>
            </ModalWrapper>

        </>
    )
}


export default ModalPopUp;


const ModalWrapper = styled.div`

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
