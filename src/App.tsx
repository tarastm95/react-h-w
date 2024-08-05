import React, {useEffect} from 'react';
import './App.css';
import {useSelector} from "react-redux";
import {useAppDispatch, useAppSelector } from "./redux/store";
import {userActions} from "./redux/slices/userSlice";
import {postActions} from "./redux/slices/postSlice";
const App = () => {
    let {postSlice: {posts, isLoadedPosts}} = useAppSelector(state => state);
    let {userSlice: {users,isLoaded}} = useAppSelector(state => state);

    let dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(userActions.loadUsers());

    }, []);

    useEffect(() => {
        dispatch(postActions.loadPosts());
    }, []);


    return (
        <div>
            {!isLoaded && <div>Loading in process....</div>}

            {users.map(user => <div>{user.name}</div>)}
            <div>
                {!isLoadedPosts && <div>Loading in process....</div>}
                <h1>Posts:</h1>
                {posts.map(post => <div>
                    <span>
                       {post.id}
                    </span>
                    <span>
                       {post.userId}
                    </span>
                    <span>
                       {post.title}
                    </span>
                    <span>
                        {post.body}
                    </span>

                </div>)}
            </div>
        </div>
    );
}

export default App;
