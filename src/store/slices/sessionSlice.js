import { createSlice } from '@reduxjs/toolkit';

const sessionSlice = createSlice({
    name: 'session',
    initialState: {
        authUser: null,
    },
    reducers: {
        setAuthUser: (state, action) => {
            state.authUser = action.payload;
        },
    },
});

export const { setAuthUser } = sessionSlice.actions;

export default sessionSlice.reducer;
