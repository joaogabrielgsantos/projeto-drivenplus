import { useContext, useEffect, useState } from "react";
import Container from "../components/Container";
import { getPlanos } from "../services/DrivenPlus";
import styled from "styled-components";
import { Link } from "react-router-dom";
import CustomerContext from "../contexts/CustomerContext";



function BoxPlan({ idPlan, image, price, setIdPlan }) {


    function choosePlan(idPlan) {
        setIdPlan([idPlan])
        /* const membershipSerializado = JSON.stringify({ ...member, membership: idPlan })
        localStorage.setItem('drivenplus', membershipSerializado) */
        

    }

    return (
        <Link to={`/subscriptions/${idPlan}`}>
            <PlanWrapper onClick={() => choosePlan(idPlan)}>
                <img src={image} alt="Logo média" />
                <h2>{price}</h2>
            </PlanWrapper>
        </Link>

    )
}


function PlansPage() {

    const [plans, setPlans] = useState([])
    const {setIdPlan} = useContext(CustomerContext)
    



    useEffect(() => {

        getPlanos().then(response => {
            const { data } = response
            setPlans(data)

        })

    }, []);


    function listarPlanos() {
        if (plans.length === 0) {
            return (
                <Loading>Carregando...</Loading>
            )
        } else {
            return (
                plans.map((item, index) =>
                    <BoxPlan key={index} price={item.price} image={item.image} idPlan={item.id} setIdPlan={setIdPlan} />)
            )
        }
    }


    return (
        <Container>
            <PageTitle>Escolha seu Plano</PageTitle>
            {listarPlanos()}



        </Container>
    )
}

export default PlansPage;


const PageTitle = styled.h1`
font-weight: 700;
font-size: 32px;
line-height: 38px;
color: #FFFFFF;
margin-bottom: 24px;
`;


const PlanWrapper = styled.div`
width: 290px;
height: 180px;
background-color: #0E0E13;
border: 3px solid #7E7E7E;
border-radius: 12px;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 10px;


img{
    width: 130px;
}
h2 {
    font-weight: 700;
    font-size: 32px;
    line-height: 38px;
    color: #FFFFFF;
    margin-left: 20px;
}

`;

const Loading = styled.h4`
font-weight: 500;
font-size: 25px;
line-height: 30px;
color: #FF4791;
`;

