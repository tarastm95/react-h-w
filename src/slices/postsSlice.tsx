import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import apiClient from "../services/apiClient";
import {PostProps} from "../interfaces/PostProps";

export const fetchPosts = createAsyncThunk<PostProps[]>('posts/fetchPosts',
    async () => {
        const response = await apiClient.get<PostProps[]>('/posts')
        return response.data;
    }
)

interface PostState {
    posts: PostProps[],
    loading: boolean,
    error: string | null
}

const initialState:PostState = {
    posts: [],
    loading: false,
    error: null
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPosts.fulfilled,(state, action: PayloadAction<PostProps[]>)=>{
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPosts.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    }
})
export default postsSlice.reducer;
