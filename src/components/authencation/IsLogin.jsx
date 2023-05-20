import { Navigate, Outlet } from "react-router-dom";

const IsLogin = () => {
    const isLogin = false;
    return isLogin ? <Outlet /> : <Navigate to='/about' />
}

export default IsLogin;