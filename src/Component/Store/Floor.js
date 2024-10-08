import { createSlice } from "@reduxjs/toolkit";

const initialState = { floorNo: 1 , isPassengerIn:false};

const FloorSlice = createSlice({
    name: 'floor',
    initialState: initialState,
    reducers: {
        elevatorReachTheFloor(state, action) {
            switch (action.payload) {
                case 2:
                    state.floorNo = 2;
                    break;
                case 3:
                    state.floorNo = 3;
                    break;
                case 4:
                    state.floorNo = 4;
                    break;
                case 5:
                    state.floorNo = 5;
                    break;
                default:
                    state.floorNo = 1;
                    break;
            }
        },
        isPassengerIn(state){
          state.isPassengerIn = !state.isPassengerIn;
        }
    }
});

export const floorAction = FloorSlice.actions;
export default FloorSlice.reducer;