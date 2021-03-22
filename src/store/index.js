import { configureStore } from '@reduxjs/toolkit';
import { sessionSlice } from './slices/';

export default configureStore({
  reducer: {
    session: sessionSlice
  },
});
