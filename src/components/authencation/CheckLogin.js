import { Navigate, Outlet } from "react-router-dom";

const CheckLogin = () => {
    const isLogin = localStorage.getItem('isLogined');
    return isLogin == undefined || isLogin != 'true' ? <Outlet /> : <Navigate to='/' />
}

export default CheckLogin;