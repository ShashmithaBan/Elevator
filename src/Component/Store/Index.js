import { configureStore } from "@reduxjs/toolkit";
import btnReducer from './Btn'

const store = configureStore({
    reducer:{ btn:btnReducer }
})

  
  export default store; 