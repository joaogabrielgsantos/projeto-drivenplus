import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import Inputs from "../components/Inputs";
import CustomerContext from "../contexts/CustomerContext";
import { getPlan } from "../services/DrivenPlus";
import beneficios from "../assets/images/beneficios.png"
import money from "../assets/images/money.png"
import backarrow from "../assets/images/backarrow.png"
import ModalPopUp from "../components/ModalPopUp";



function Benefit({ number, title }) {
    return <h3>{number}: {title}</h3>
}



function SignPlanPage() {
     const { securityNumber, setSecurityNumber, expirationDate, setExpirationDate, cardName, setCardName, cardNumber, setCardNumber, selectedPlan, setSelectedPlan} = useContext(CustomerContext)
     const { idPlan } = useParams()

    
    const [modal, setModal] = useState(false)

    const navigate = useNavigate();



    useEffect(() => {

        getPlan(idPlan).then(response => {
            setSelectedPlan(response.data)

        })

    }, []);
    const aux = { ...selectedPlan }
    const { perks } = aux
    console.log(perks);

    function listBenefits() {


        if (selectedPlan.length === 0) {
            return (
                <h4>Carregando...</h4>
            )
        } else {
            return (
                perks.map((item, index) =>
                    <Benefit key={index} number={index + 1} title={item.title} link={item.link} />)
            )
        }

    }

    const conditionalModal = (modal ? <ModalPopUp selectedPlan={selectedPlan} modal={modal} setModal={setModal}/> : "")



    function handleSignPlan(e) {
        e.preventDefault();
        setModal(!modal)

    }

    return (
        <Container>
            <BackButton>
                <img src={backarrow} alt="back" onClick={() => {
                    navigate(-1)
                    setSelectedPlan([])}} />
            </BackButton>
            <LogoPlan src={selectedPlan.image} alt="logo plan" />
            <TitlePlan>{selectedPlan.name}</TitlePlan>
            <Benefits>
                <div>
                    <img src={beneficios} alt="benefits" />
                    <h2>Benefícios:</h2>
                </div>
                {listBenefits()}
            </Benefits>
            <Price>
                <div>
                    <img src={money} alt="money" />
                    <h2>Preço:</h2>
                </div>
                <h3>R$ {selectedPlan.price} cobrados mensalmente</h3>
            </Price>
            <form onSubmit={handleSignPlan}>
                <Inputs>
                    <input type="text" placeholder="Nome impresso no cartão" value={cardName} onChange={e => setCardName(e.target.value)} />
                    <input type="text" placeholder="Digitos do cartão" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                    <div>
                        <input type="text" placeholder="Código de segurança" value={securityNumber} onChange={e => setSecurityNumber(e.target.value)} />
                        <input type="text" placeholder="Validade" value={expirationDate} onChange={e => setExpirationDate(e.target.value)} />

                    </div>
                    <button type="submit">Assinar</button>
                </Inputs>
            </form>

            {conditionalModal}



        </Container>
    )
}

export default SignPlanPage;



const LogoPlan = styled.img`
width: 164px;
margin-bottom: 10px;

`;

const TitlePlan = styled.h1`

font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
margin-bottom: 25px;

`;

const Benefits = styled.div`
color: #FFFFFF;
width: 299px;
margin-bottom: 15px;
h3{
    margin-bottom: 6px;
}
div {
    display: flex;
    margin-bottom: 10px;
    img {
        margin-right: 5px;
    }  
}

`;

const Price = styled.div`
color: #FFFFFF;
width: 299px;
margin-bottom: 35px;
div {
    display: flex;
    margin-bottom: 10px;
    img {
        margin-right: 5px;
    }
}
`;

const BackButton = styled.div`
width: 100%;
height: 80px;
display: flex;
align-items: center;
padding-left: 22px;
position: absolute;
top: 0;

`;

