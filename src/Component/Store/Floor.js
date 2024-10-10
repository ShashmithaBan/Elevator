import { createSlice } from "@reduxjs/toolkit";

const initialState = { floorNo:0 , isPassengerIn: false , selectedFloor : [] , requestedFloor:[]};

const FloorSlice = createSlice({
    name: 'floor',
    initialState: initialState,
    reducers: {
        updateRequestedFloor(state,action){
            state.requestedFloor = [...state.requestedFloor,action.payload];
        },
        retrieveRequestedFloor(state){
            return state.requestedFloor;
        },
        isRequestedFloorsEmpty(state){
          if(state.requestedFloor.length === 0){
              return true;
          }
        },
        removeReachedFloorFromRequested(state){
            state.requestedFloor.shift();
        },
        elevatorReachTheFloor(state, action) {
            state.floorNo = action.payload;
            
        },
        isPassengerIn(state){
          state.isPassengerIn = !state.isPassengerIn;
        },
        getingSelectedFloor(state, action) { 
            console.log("Before update:", state.selectedFloor);
            state.selectedFloor = [...state.selectedFloor, action.payload];
            console.log("After update:", state.selectedFloor);
        },
        retriveNextFloor(state){
            return state.selectedFloor;
        },
        removeReachedFloorFromSelected(state){
            state.selectedFloor.shift();
        },
        
    }
});

export const floorAction = FloorSlice.actions;
export default FloorSlice.reducer;