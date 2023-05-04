import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
    const {data} = await axios.get("/news");
    return data;
})

export const fetchRemovePost = createAsyncThunk("posts/fetchRemovePost", async (id) =>
      axios.delete(`/news/${id}`)
)

let initialState = {
    posts: {
        items: [],
        status: "loading"
    }
}

const postSlice = createSlice({
    name:'posts',
    initialState,
    reducer: {

    },
    extraReducers: {
        [fetchRemovePost.pending]: (state, action) => {
            state.posts.items = state.posts.items.filter(obj => obj._id !== action.payload)
        },

        [fetchPosts.pending]: (state) => {
            state.posts.items = []
            state.posts.status = 'loading'
        },
        [fetchPosts.fulfilled]: (state, actions) => {
            state.posts.items = actions.payload
            state.posts.status = 'loaded'
        },
        [fetchPosts.rejected]: (state) => {
            state.posts.items = []
            state.posts.status = 'error'
        }
    }
})

window.state = initialState

export const postReducer = postSlice.reducer