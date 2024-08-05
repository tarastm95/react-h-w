import {createSlice, isFulfilled} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost";
import {loadPosts} from "../reducers/posts/post.extra.reducers";


type PostSliceType = {
    posts: IPost[],
    isLoadedPosts: boolean
}

const postInitState: PostSliceType = {
    posts: [],
    isLoadedPosts: false
}

export const postSlice = createSlice({
    name: "postsSlice",
    initialState: postInitState,
    reducers: {
        xxx: (state) => {
            state.isLoadedPosts = true
        }
    },
    extraReducers: (builder) =>
        builder
            .addCase(loadPosts.fulfilled, (state, action) => {
                state.posts = action.payload;
                state.isLoadedPosts = true;
            })
            .addCase(loadPosts.rejected, (state, action) => {

            })
            .addMatcher(isFulfilled(loadPosts), (state, action) => {
                // state.isLoadedPosts = true;
            })
});

export const postActions = {
    ...postSlice.actions,
    loadPosts

}
