import Cart from "../../../components/client/Cart/Cart";
import Slider from "../../../components/client/Slider/Slider";
import Banner from "../../../components/client/Banner/Banner";
import ProductOverview from "../../../components/client/Products/ProductOverview";

const Home = () => {
    return (
        <>
            <Cart></Cart>
            <Slider></Slider>
            <Banner></Banner>
            <ProductOverview></ProductOverview>
        </>
    );
}

export default Home;