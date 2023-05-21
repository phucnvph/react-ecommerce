import { Outlet } from "react-router-dom";
import HeaderAdmin from "./HeaderAdmin/HeaderAdmin";
import SidebarAdmin from "./SidebarAdmin/SidebarAdmin";
import FooterAdmin from "./FooterAdmin/FooterAdmin";

const LayoutAdmin = () => {
    return (
        <>
            <HeaderAdmin />
            <div id="layoutSidenav">
                <SidebarAdmin />
                <div id="layoutSidenav_content">
                    <Outlet />
                    <FooterAdmin />
                </div>
            </div>
        </>
    );
}
export default LayoutAdmin;