import { createSlice } from "@reduxjs/toolkit";

const initialState = { floorNo:0 , isPassengerIn: false , selectedFloor : []};

const FloorSlice = createSlice({
    name: 'floor',
    initialState: initialState,
    reducers: {
        elevatorReachTheFloor(state, action) {
            switch (action.payload) {
                case 1:
                    state.floorNo = 1;
                    break;
                case 2:
                    state.floorNo = 2;
                    break;
                case 3:
                    state.floorNo = 3;
                    break;
                case 4:
                    state.floorNo = 4;
                    break;
                default:
                    state.floorNo = 0;
                    break;
            }
        },
        isPassengerIn(state){
          state.isPassengerIn = !state.isPassengerIn;
        },
        getingSelectedFloor(state, action) {
            
            console.log("Before update:", state.selectedFloor);
            state.selectedFloor = [...state.selectedFloor, action.payload];
            console.log("After update:", state.selectedFloor);
        },
        
    }
});

export const floorAction = FloorSlice.actions;
export default FloorSlice.reducer;