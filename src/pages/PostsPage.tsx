import React, {useEffect} from 'react';
import {AppDispatch, RootState, useAppDispatch, useAppSelector} from "../store";
import {fetchPosts} from "../slices/postsSlice";
import PostsComponent from "../components/PostsComponent";


const PostsPage = () => {
    const dispatch = useAppDispatch();
    const {posts, loading, error} = useAppSelector((state: RootState) =>
        state.posts
    );
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch]);
    return (
        <div>
            <h1>Users</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div>
                {posts.map(post => (
                    <PostsComponent id={post.id} userId={post.userId} title={post.title} body={post.body}/>
                ))}
            </div>
        </div>
    );
};

export default PostsPage;
