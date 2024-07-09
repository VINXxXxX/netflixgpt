// appStore.jsx
import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./userSlice"; // Named export

const appStore = configureStore({
    reducer: {
        user: userReducer,
    },
});

export default appStore;
