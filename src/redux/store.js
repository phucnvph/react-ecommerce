import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../components/client/Products/ProductSlice';
import ProductShopFilterSlice from '../components/client/Products/ProductShopFilterSlice';

const store = configureStore({
    reducer: {
        products: ProductSlice,
        productShopFilter: ProductShopFilterSlice
    }
});

export default store;