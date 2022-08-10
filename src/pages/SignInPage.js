import { Link } from "react-router-dom";
function SignInPage (){
    return (
        <>
            <h1>Página de login</h1>
            <Link to="/signup">Avançar Página</Link>
        </>
    )
}

export default SignInPage;