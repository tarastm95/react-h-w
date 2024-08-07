import {configureStore} from '@reduxjs/toolkit';
import usersReducer from '../slices/usersSlice';
import userReducer from '../slices/userSlice';
import postsReducer from '../slices/postsSlice';
import postReducer from '../slices/postSliceByUserId'
import {useDispatch, useSelector} from "react-redux";

const store = configureStore({
    reducer: {
        users: usersReducer,
        user: userReducer,
        posts: postsReducer,
        post: postReducer

    },
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export type AppDispatch = typeof store.dispatch;
export const useAppSelector = useSelector.withTypes<RootState>();

export default store;
