import { Routes, Route } from "react-router-dom";
import Home from "../pages/client/Home/Home";
import Layout from "../components/client/Layout";
import Shop from "../pages/client/Shop/Shop";
import Contact from "../pages/client/Contact/Contact";
import About from "../pages/client/About/About";
import Blog from "../pages/client/Blog/Blog";
import BlogDetail from "../pages/client/Blog/BlogDetail";
import ShoppingCart from "../pages/client/ShoppingCart/ShoppingCart";
import IsLogin from "../components/authencation/IsLogin";

const RootRouters = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout />} >
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/cart" element={<ShoppingCart />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/about" element={<About />} />
                <Route element={<IsLogin />}>
                    <Route path="/contact" element={<Contact />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default RootRouters;
