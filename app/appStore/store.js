import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "../features/adminAction/adminActionSlice";

export const store = configureStore({   
    reducer : {adminReducer: adminReducer}
});
