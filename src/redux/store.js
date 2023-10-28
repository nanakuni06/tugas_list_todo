import { configureStore } from "@reduxjs/toolkit";
import todoRecucer from "./reducers/todo-reducers";

const store = configureStore({
    reducer: {
        todo: todoRecucer
    }
})

export default store;