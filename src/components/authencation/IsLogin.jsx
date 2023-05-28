import { Navigate, Outlet } from "react-router-dom";

const IsLogin = () => {
    const isLogin = localStorage.getItem('isLogined');
    return isLogin == 'true' ? <Outlet /> : <Navigate to='/login' />
}

export default IsLogin;