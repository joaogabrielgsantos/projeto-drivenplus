import styled from "styled-components";
import Container from "../components/Container";
import profile from "../assets/images/profile.png"
import { useContext } from "react";
import CustomerContext from "../contexts/CustomerContext";
import { useNavigate } from "react-router-dom";
import { deletePlan } from "../services/DrivenPlus";





function BenefitButton({ title, link }) {
    return (
        <HomeBttn href={link}>{title}
        </HomeBttn>
    )
}




function HomePage() {
    const { member, setMember } = useContext(CustomerContext)
    console.log(member);
    const { name, membership } = member
    const navigate = useNavigate();



    function cancelPlan() {
        deletePlan().then(response => {
            const { data } = response
            console.log(data)
            setMember({ ...member, membership: null })
            ;

        })

    }




    function LogOff() {
        const localoff = localStorage.clear('drivenplus')
        return (
            localoff
        )
    }



    function listBenefitsButtons() {


        if (membership.length === 0) {
            return (
                <h4>Carregando...</h4>
            )
        } else {
            return (
                membership.perks.map((item, index) =>
                    <BenefitButton key={index} title={item.title} link={item.link} />)
            )
        }

    }



    return (
        <Container>
            <WrapperHome>
                <Header>
                    <img src={membership.image} alt="" />
                    <img onClick={() => {
                        LogOff()
                        window.location.reload(false);
                    }} src={profile} alt="perfil" />
                </Header>
                <BemVindo>Olá, {name}</BemVindo>
                {listBenefitsButtons()}
            </WrapperHome>
            <Footer>
                <HomeBttn onClick={() => navigate("/subscriptions")}>Mudar plano</HomeBttn>
                <HomeBttn color="#FF4747" onClick={()=>{
                    cancelPlan()
                    navigate("/subscriptions")}}>Cancelar plano</HomeBttn>
            </Footer>

        </Container>
    )
}


export default HomePage;


const WrapperHome = styled.div`

width: 100%;
height: 550px;
display: flex;
flex-direction: column;
align-items: center;


`;

const Header = styled.div`
position: fixed;
top: 0;
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
padding: 32px 38px;
img{
    :first-child{
        width: 80px;
    }
    :last-child{
        width: 34px;
        margin-top: -30px;
    }

}

`;


const BemVindo = styled.h1`

width: 100%;
font-weight: 700;
font-size: 24px;
line-height: 28px;
color: #FFFFFF;
text-align: center;
margin-bottom: 55px;


`;

const HomeBttn = styled.a`

width: 299px;
height: 52px;
background-color: ${props => props.color ? props.color : "#FF4791"};
border-radius: 8px;
border: #FF4791;
font-weight: 700;
font-size: 14px;
line-height: 16px;
color: #FFFFFF;
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 30px;

`;

const Footer = styled.div`
position: fixed;
bottom: 0px;

height: 160px;



`;