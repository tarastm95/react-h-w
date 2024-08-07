import React from 'react';
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import apiClient from "../services/apiClient";
import {User} from "../interfaces/User";

interface UserState {
    user: User | null,
    loading: boolean,
    error: string | null
}

const initialState: UserState = {
    user: null,
    loading: false,
    error: null
}

export const fetchUser = createAsyncThunk<User, number>(
    'user/fetchUser',
    async (id) => {
        const response = await apiClient.get<User>(`/users/${id}`);
        return response.data;
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<User>) => {
                state.loading = false;
                state.user = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            })
    }
})
export default userSlice.reducer;


