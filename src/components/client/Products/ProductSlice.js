import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const API_URL = 'https://646253e84dca1a6613438fe1.mockapi.io/';

export const getProducts = createAsyncThunk(
    'products/getProducts',
    async (thunkAPI) => {
        const res = await fetch(`${API_URL}products`)
            .then((data) => data.json());
            console.log('res', res);
        return res;
    }
)

export const getProductId = createAsyncThunk(
    'products/getProductId',
    async (productId, { dispatch }) => {
        const response = await fetch(`${API_URL}products/${productId}`)
            .then((data) => data.json());
        const finalPayload = response;
        return finalPayload; // will dispatch `fulfilled` action
    }
)

export const postAddProduct = createAsyncThunk(
    'products/postAddProduct',
    async (product, { dispatch }) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        };
        const response = await fetch(`${API_URL}products`, requestOptions)
            .then((data) => data.json());
        const finalPayload = response;
        return finalPayload;
    }
)

export const postUpdateProduct = createAsyncThunk(
    'products/postUpdateProduct',
    async (product, { dispatch }) => {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        };
        const response = await fetch(`${API_URL}products/${product.id}`, requestOptions)
            .then((data) => data.json());
        const finalPayload = response;
        return finalPayload;
    }
)

export const postDeleteProduct = createAsyncThunk(
    'products/postDeleteProduct',
    async (product, { dispatch }) => {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(product)
        };
        const response = await fetch(`${API_URL}products/${product.id}`, requestOptions)
            .then((data) => data.json());
        const finalPayload = response;
        return finalPayload;
    }
)

// Init State
const initialState = {
    loading: false,
    products: [],
    isFetchProductID: false,
    product: {}
};

export const ProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: {

        // ============================================================================================================
        // GET & SET all product In State
        [getProducts.pending]: (state) => {
            state.loading = true;
        },
        [getProducts.fulfilled]: (state, { payload }) => {
            state.loading = false;
            state.products = payload;
        },
        [getProducts.rejected]: (state) => {
            state.loading = false;
        },

        // ============================================================================================================
        // GET/SET product by Id In State
        [getProductId.pending]: (state) => {
            state.isFetchProductID = true;
        },
        [getProductId.fulfilled]: (state, { payload }) => {
            state.isFetchProductID = false;
            state.product = payload;
        },
        [getProductId.rejected]: (state) => {
            state.isFetchProductID = false;
        },

        // ============================================================================================================
        // ADD Product In State
        [postAddProduct.fulfilled]: (state, { payload }) => {
            state.products.push(payload);
        },

        // ============================================================================================================
        // Update Product
        [postUpdateProduct.fulfilled]: (state, { payload }) => {
            const index = state.products.findIndex(product => product.id === payload.id);
            state.products[index] = payload;
        },

        // ============================================================================================================
        // Delete Product In State
        [postDeleteProduct.fulfilled]: (state, { payload }) => {
            const index = state.products.findIndex(product => product.id === payload.id);
            state.products.splice(index, 1);
        }
    },
});

export default ProductSlice.reducer;
