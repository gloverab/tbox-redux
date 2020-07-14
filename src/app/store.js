import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import appReducer from '../features/app/appSlice';

export default configureStore({
  reducer: {
    app: appReducer,
    counter: counterReducer,
  },
});
