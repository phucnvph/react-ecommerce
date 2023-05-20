import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({children}) => {


    return (
        <>
        <Header></Header>
        <Outlet />
        <Footer></Footer>
        </>
    );
}

export default Layout;