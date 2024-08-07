import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../store';
import { fetchPostsByUserId } from '../slices/postSliceByUserId';
import PostComponentByUserId from "../components/PostComponentByUserId";

const PostPage: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const userId = queryParams.get('userId');

    const dispatch = useAppDispatch();
    const { posts, loading, error } = useAppSelector((state) => state.post);

    useEffect(() => {
        if (userId) {
            dispatch(fetchPostsByUserId(userId));
        }
    }, [dispatch, userId]);

    return (
        <div>
            <h1>Posts by User {userId}</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div>
                {posts.map(post => (
                    <PostComponentByUserId id={post.id} userId={post.userId} title={post.title} body={post.body}/>
                ))}
            </div>
        </div>
    );
};

export default PostPage;
