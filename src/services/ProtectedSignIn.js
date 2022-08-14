import { Navigate, Outlet } from "react-router-dom"



const Auth = () => {
    const authenticator = JSON.parse(localStorage.getItem('drivenplus'));
    return authenticator
}

const ProtectedSignIn = () => {
    const isAuth = Auth()

    if (isAuth && isAuth.membership) {
        return <Navigate to="/home" replace />

    } else if (isAuth && isAuth.membership === null) {
        return <Navigate to="/subscriptions" replace />
    } else {
        return <Outlet />
    }

}

export default ProtectedSignIn;