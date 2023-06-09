import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchUserData = createAsyncThunk("auth/fetchUserData", async (params) => {
    const {data} = await axios.post("/auth/login", params);
    return data;
})

export const fetchAuthMe = createAsyncThunk("auth/fetchAuthMe", async () => {
    if(window.localStorage.getItem("tocen")){
        const {data} = await axios.get("/auth/me");
        return data;
    }
})

const initialState = {
    data: null,
    status: "loading"
}


const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.data = null
        }
    },
    extraReducers: {
        [fetchUserData.pending]: (state) => {
            state.data = null
            state.status = 'loading'
        },
        [fetchUserData.fulfilled]: (state, actions) => {
            state.data = actions.payload
            state.status = 'loaded'
        },
        [fetchUserData.rejected]: (state) => {
            state.data = null
            state.status = 'error'
        },
        [fetchAuthMe.pending]: (state) => {
            state.data = null
            state.status = 'loading'
        },
        [fetchAuthMe.fulfilled]: (state, actions) => {
            state.data = actions.payload
            state.status = 'loaded'
        },
        [fetchAuthMe.rejected]: (state) => {
            state.data = null
            state.status = 'error'
        }
    }
})

export const selectIsAuth = (state) =>  !!state.auth.data
export const authReducer = authSlice.reducer

export const { logout } = authSlice.actions