// app/store.js
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/TodoSlice"; // Ensure the path is correct

export const store = configureStore({
    reducer: {
        todo: todoReducer, // Map the slice reducer to a key
    }
});
