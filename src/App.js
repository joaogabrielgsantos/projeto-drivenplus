import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./assets/css/globalStyles";
import UserContext from "./contexts/UserContext";
import HomePage from "./pages/HomePage";
import PlansPage from "./pages/PlansPage";
import SignInPage from "./pages/SignInPage";
import SignPlanPage from "./pages/SignPlanPage";
import SignUpPage from "./pages/SignUpPage";
import ProtectedRoutes from "./services/ProtectedRoutes";


function App() {


    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <UserContext.Provider>
                    <Routes>
                        <Route path="/" element={<SignInPage />} />
                        <Route path="/signup" element={<SignUpPage />} />
                        <Route element={<ProtectedRoutes />}>
                            <Route path="/home" element={<HomePage />} />
                            <Route path="/subscriptions" element={<PlansPage />}>
                                <Route path=":idPlan" element={<SignPlanPage />} />
                            </Route>
                        </Route>
                    </Routes>
                </UserContext.Provider>
            </BrowserRouter>

        </>

    )
}

export default App;