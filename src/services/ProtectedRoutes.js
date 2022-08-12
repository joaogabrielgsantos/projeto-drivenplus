import { Navigate, Outlet } from "react-router-dom"



const Auth = () => {
    const authenticator = JSON.parse(localStorage.getItem('drivenplus'));
    return authenticator
}

const ProtectedRoutes = () => {
    const isAuth = Auth()
    return isAuth ? <Outlet/> : <Navigate to="/" replace />;
}

export default ProtectedRoutes;