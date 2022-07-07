import { configureStore } from '@reduxjs/toolkit';
import prodreduce from "../features/Crudslice" 
export const store = configureStore({
  reducer: {
    product: prodreduce
  },
});
