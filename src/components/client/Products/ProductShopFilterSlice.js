import { createSlice } from "@reduxjs/toolkit";

const ProductShopFilterSlice = createSlice({
    name: 'productShopFilter',
    initialState: {
        text: '',
    },
    reducers: {
        // {type: 'productShopFilter/searchAction'}
        searchAction: (state, action) => {
            state.text = action.payload
        }
    }
});

export default ProductShopFilterSlice.reducer;