import {createAsyncThunk} from "@reduxjs/toolkit";

import {AxiosError} from "axios";
import {postService} from "../../../services/api.service";

export const loadPosts = createAsyncThunk(
    'postSlice/loadPosts',
    async (_, thunkAPI) => {
        try {
            let response = await postService.getAll();
            // thunkAPI.dispatch(postActions.xxx());
            return thunkAPI.fulfillWithValue(response);
        } catch (e) {
            let e1 = e as AxiosError;
            return thunkAPI.rejectWithValue(e1);
        }
    }
)
