
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "../Pages/login/Login";
import Register from "../Pages/register/register";
import Chat from "../Pages/chat/Chat";
import { useAuth } from "../Pages/context/AuthContext";


const PrivateRoute = () => {
    const { user } = useAuth();
    return user ? <Chat /> : <Navigate to="/login" />;
};

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/chat" element={<PrivateRoute />} />
                <Route path="*" element={<Navigate to="/chat" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;