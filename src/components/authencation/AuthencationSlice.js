import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';

const API_URL = 'https://646253e84dca1a6613438fe1.mockapi.io/';

export const getUsers = createAsyncThunk(
    'users/getUsers',
    async (thunkAPI) => {
        const res = await fetch(`${API_URL}users`)
            .then((data) => data.json());
        return res;
    }
)

// Init State
const initialState = {
    users: [],
};

export const AuthencationSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: {

        [getUsers.pending]: (state) => {
        },
        [getUsers.fulfilled]: (state, { payload }) => {
            state.users = payload;
        },
        [getUsers.rejected]: (state) => {
        }
    },
});

export default AuthencationSlice.reducer;
