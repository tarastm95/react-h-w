import {User} from "../interfaces/User";
import apiClient from "../services/apiClient";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";



export const FetchUsers = createAsyncThunk<User[]>('users/FetchUsers', async () => {
    const response = await apiClient.get<User[]>('/users');
    return response.data;
})

interface UserState {
    users: User[],
    loading: boolean,
    error: string | null
}

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

const usersSlice = createSlice ({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(FetchUsers.pending, (state) => {
                state.loading = true;
            })
            .addCase(FetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
                state.loading = false;
                state.users = action.payload;
            })
            .addCase(FetchUsers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            });
    }
})

export default usersSlice.reducer;
