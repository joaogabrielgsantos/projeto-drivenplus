import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Container from "../components/Container";
import Inputs from "../components/Inputs";
/* import CustomerContext from "../contexts/CustomerContext"; */
import { getPlan } from "../services/DrivenPlus";
import beneficios from "../assets/images/beneficios.png"
import money from "../assets/images/money.png"
import backarrow from "../assets/images/backarrow.png"



function Benefit({ number, title }) {
    return <h3>{number}: {title}</h3>
}



function SignPlanPage() {
    /*  const { member } = useContext(CustomerContext) */
    const { idPlan } = useParams()

    const [securityNumber, setSecurityNumber] = useState('')
    const [expirationDate, setExpirationDate] = useState('')
    const [cardName, setCardName] = useState('')
    const [cardNumber, setCardNumber] = useState('')
    const [disable, setDisable] = useState(false)
    const [textButton, setTextButton] = useState("Assinar")
    const [selectedPlan, setSelectedPlan] = useState("")

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





    function handleSignPlan(e) {
        e.preventDefault();
        setDisable(true);
        setTextButton("Assinando...")

    }

    return (
        <Container>
            <BackButton>
                <img src={backarrow} alt="back" onClick={() => navigate(-1)} />
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
                    <input disabled={disable} type="text" placeholder="Nome impresso no cartão" value={cardName} onChange={e => setCardName(e.target.value)} />
                    <input disabled={disable} type="text" placeholder="Digitos do cartão" value={cardNumber} onChange={e => setCardNumber(e.target.value)} />
                    <div>
                        <input disabled={disable} type="text" placeholder="Código de segurança" value={securityNumber} onChange={e => setSecurityNumber(e.target.value)} />
                        <input disabled={disable} type="text" placeholder="Validade" value={expirationDate} onChange={e => setExpirationDate(e.target.value)} />

                    </div>
                    <button disabled={disable} type="submit">{textButton}</button>
                </Inputs>
            </form>

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