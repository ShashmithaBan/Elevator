import { createSlice } from "@reduxjs/toolkit";


const initialState = {btnVisible:false}
const btnSlice = createSlice({
    name : 'btn',
    initialState : initialState,
    reducers:{
        upDownToggle(state){
            state.btnVisible=!state.btnVisible;
        }
    }
})

export const btnAction = btnSlice.actions;
export default btnSlice.reducer