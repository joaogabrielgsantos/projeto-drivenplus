import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import CustomerContext from "./contexts/CustomerContext";
import HomePage from "./pages/HomePage";
import PlansPage from "./pages/PlansPage";
import SignInPage from "./pages/SignInPage";
import SignPlanPage from "./pages/SignPlanPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoutes from "./services/ProtectedRoutes";
import ProtectedSignIn from "./services/ProtectedSignIn";



function App() {
    const [member, setMember] = useState("")
    const [idPlan, setIdPlan] = useState(null)
    console.log(idPlan);


    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <CustomerContext.Provider value={{ member, setMember, idPlan, setIdPlan }}>
                    <Routes>
                        <Route element={<ProtectedSignIn />}>
                            <Route path="/" element={<SignInPage />} />
                            <Route path="/signup" element={<SignUpPage />} />
                        </Route>
                        <Route element={<ProtectedRoutes />}>
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/subscriptions" element={<PlansPage />} />
                            <Route path="/subscriptions/:idPlan" element={<SignPlanPage />} />
                        </Route>
                    </Routes>
                </CustomerContext.Provider>
            </BrowserRouter>

        </>

    )
}

export default App;