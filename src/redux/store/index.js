import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../slice/countSlice';
import postReducer from '../slice/postSlice'

export default configureStore({
  reducer: {
    counter: counterReducer,
    post: postReducer
  }
})



