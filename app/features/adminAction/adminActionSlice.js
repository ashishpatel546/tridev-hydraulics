import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    admin: {
        isAdminLoggedIn: false,
        jwtToken: '',
    }
}

export const adminSlice = createSlice({
    name: 'adminReducer',
    initialState,
    reducers: {
        addAdminLoggedIn : (state, action) => {
            const { isAdminLoggedIn } = action.payload;
            state.admin = {
                ...state.admin,
                isAdminLoggedIn: isAdminLoggedIn,
              };
        },
        addAdminToken : (state, action) => {
            const { token } = action.payload;
            state.admin = {
                ...state.admin,
                jwtToken: token,
              };
        },

    }
})

export const { addAdminLoggedIn , addAdminToken} = adminSlice.actions;
export default adminSlice.reducer;

