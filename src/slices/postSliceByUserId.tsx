import {PostProps} from "../interfaces/PostProps";
import apiClient from "../services/apiClient";
import {createAsyncThunk, createSlice,PayloadAction} from "@reduxjs/toolkit";

export const fetchPostsByUserId = createAsyncThunk<PostProps[], string>('posts/fetchPostsByUserId',
    async (userId) => {
        const response = await apiClient.get<PostProps[]>(`/posts?userId=${userId}`);
        return response.data;
    })

interface PostState {
    posts: PostProps[],
    loading: boolean,
    error: string | null
}

const initialState: PostState = {
    posts: [],
    loading: false,
    error: null
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostsByUserId.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchPostsByUserId.fulfilled, (state, action: PayloadAction<PostProps[]>) => {
                state.loading = false;
                state.posts = action.payload;
            })
            .addCase(fetchPostsByUserId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    }
})

export default postSlice.reducer;
