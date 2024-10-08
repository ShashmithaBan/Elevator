import { configureStore } from "@reduxjs/toolkit";
import btnReducer from './Btn'
import floorReducer from './Floor'

const store = configureStore({
    reducer:{ btn:btnReducer  , floor:floorReducer}
})

  
  export default store; 