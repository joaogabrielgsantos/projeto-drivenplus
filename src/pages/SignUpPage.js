import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container";
import { postCadastro } from "../services/DrivenPlus";
import Inputs from "../components/Inputs";
import styled from "styled-components";


function SignUpPage() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [cpf, setCpf] = useState('')
    const [disable, setDisable] = useState(false)
    const [textButton, setTextButton] = useState("Cadastrar")


    const navigate = useNavigate();



    function handleCadastrar(e) {
        e.preventDefault();
        setDisable(true);
        setTextButton("Cadastrando...")

        const body = {
            email, name, cpf, password
        }

        postCadastro(body).then(response => {
            console.log(response)
            navigate("/");
        })

        postCadastro(body).catch(() => {
            alert("Não foi possível realizar o cadastro")
            window.location.reload(false);
        })


    }


    return (
        <Container>
            <form onSubmit={handleCadastrar}>
                <Inputs>
                    <input disabled={disable} type="text" placeholder="nome" value={name} onChange={e => setName(e.target.value)} />
                    <input disabled={disable} type="text" placeholder="cpf" value={cpf} onChange={e => setCpf(e.target.value)} />
                    <input disabled={disable} type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <input disabled={disable} type="password" placeholder="senha" value={password} onChange={e => setPassword(e.target.value)} />
                    <button disabled={disable} type="submit">{textButton}</button>
                </Inputs>
            </form>

            <Link to="/">
                <LinkWrap>
                    Já possui uma conta? Entre
                </LinkWrap>
            </Link>

        </Container>
    )


}

export default SignUpPage;


export const LinkWrap = styled.div`
	text-decoration-line: underline;
    color: #FFFFFF;
`;