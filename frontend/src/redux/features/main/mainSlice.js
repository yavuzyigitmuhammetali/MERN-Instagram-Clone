import { createSlice } from "@reduxjs/toolkit";

export const mainSlice = createSlice({
    name: "main",
    initialState: {
        loading:false
    },
    reducers: {
        SET_LOADING(state,action){
            state.loading = action.payload;
        }
    },
});

export const {SET_LOADING} = mainSlice.actions;

export default mainSlice.reducer;