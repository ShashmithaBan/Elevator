import { createSlice } from "@reduxjs/toolkit";

const initialState = { elevatorBtnVisible: true , elevatorWay : true , error:null };

const btnSlice = createSlice({
    name: 'btn',
    initialState: initialState,
    reducers: {
        upDownToggle(state) {
            state.elevatorBtnVisible = !state.elevatorBtnVisible; 
        },
        elevatorWayChangeUp(state){
            state.elevatorWay = true;
        },
        elevatorWayChangeDown(state){
            state.elevatorWay = false;
        },
        elevatorError(state){
            state.error = 'You cant reach the following floor';
        }
    }
});

export const btnAction = btnSlice.actions;
export default btnSlice.reducer;