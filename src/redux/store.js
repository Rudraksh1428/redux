import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '.features/counterSlice'
const store = configureStore({
  redux:{
    counter : counterReducer 
  }
})