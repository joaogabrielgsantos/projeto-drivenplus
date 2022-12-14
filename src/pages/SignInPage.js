import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import Inputs from "../components/Inputs";
import { useContext, useState } from "react";
import Driven from "../assets/images/Driven.png"
import { postLogin } from "../services/DrivenPlus";
import { LinkWrap } from "./SignUpPage";
import styled from "styled-components";
import CustomerContext from "../contexts/CustomerContext";




function SignInPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [disable, setDisable] = useState(false)
    const [textButton, setTextButton] = useState("Entrar")
    const {setMember} = useContext(CustomerContext)

    const navigate = useNavigate();



    function Logar(e) {
        e.preventDefault();
        setDisable(true);
        setTextButton("Entrando...")

        const body = {
            email, password
        }


        postLogin(body).then(response => {
            const { data } = response
            console.log(data.membership)
            const memberSerializado = JSON.stringify({ ...data })
            localStorage.setItem('drivenplus', memberSerializado)
            const memberStorage= JSON.parse(localStorage.getItem('drivenplus'));
            setMember(memberStorage)
            data.membership ? navigate("/home"): navigate("/subscriptions") ;

        })
        postLogin(body).catch(response => {
            const { data } = response
            console.log(data);
            alert("Usuário não encontrado")
            window.location.reload(false);
        })
    }

    




    return (
        <Container>
            <Logo src={Driven} alt="Logotipo Principal" />
            <form onSubmit={Logar}>
                <Inputs>
                    <input disabled={disable} type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input disabled={disable} type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
                    <button type="submit">{textButton}</button>
                </Inputs>
            </form>
            <Link to="/signup">
                <LinkWrap>
                    Não possui uma conta? Cadastre-se
                </LinkWrap>
            </Link>
        </Container>
    )
}

export default SignInPage;




const Logo = styled.img`
margin-bottom: 100px;


`;