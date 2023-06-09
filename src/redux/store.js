import {configureStore} from "@reduxjs/toolkit";
import {postReducer} from "./slices/posts";
import {authReducer} from "./slices/authSlice";

const store = configureStore({
    reducer: {
        posts: postReducer,
        auth: authReducer,
    }
})

export default store