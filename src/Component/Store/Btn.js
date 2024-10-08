import { createSlice } from "@reduxjs/toolkit";

const initialState = { elevatorBtnVisible: true };

const btnSlice = createSlice({
    name: 'btn',
    initialState: initialState,
    reducers: {
        upDownToggle(state) {
            state.elevatorBtnVisible = !state.elevatorBtnVisible; 
        }
    }
});

export const btnAction = btnSlice.actions;
export default btnSlice.reducer;