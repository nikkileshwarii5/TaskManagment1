import { configureStore } from "@reduxjs/toolkit";
import BoardSlice from "./BoardSlice";
// import NotificationSlice from "./NotificationSlice";
// import asyncDispatchMiddleware from '../middleware/asyncDispatchMiddleware'


const store = configureStore({
  reducer: {
  
   
    boards: BoardSlice.reducer,
  }

})

export default store