import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../components/client/Products/ProductSlice';
import ProductShopFilterSlice from '../components/client/Products/ProductShopFilterSlice';
import AuthencationSlice from '../components/authencation/AuthencationSlice';

const store = configureStore({
    reducer: {
        users: AuthencationSlice,
        products: ProductSlice,
        productShopFilter: ProductShopFilterSlice
    }
});

export default store;