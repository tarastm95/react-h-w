import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import postTypes from "../../types/postTypes";
import PostRequests from "../../api/postRequests";
import './UserPosts.css';

const UserPosts: React.FC = () => {
    const {id} = useParams();
    console.log(id);
    const [posts, setPosts] = useState<postTypes[]>([]);
    useEffect(() => {
        PostRequests(id?.toString()).then((response) => {
            console.log(response);
            setPosts(response.data);
        })
            .catch((error) => {
                console.log(error);
            })
    }, [id]);
    return (
        <div>
            {
                posts.map((post) => (
                    <div key={post.id} className="post">
                        <span> <strong>id:</strong> {post.id}</span>
                        <span> <strong>userId:</strong> {post.userId}</span>
                        <span> <strong>title:</strong> {post.title}</span>
                        <span> <strong>body:</strong> {post.body}</span>
                    </div>
                ))

            }
        </div>
    );
};

export default UserPosts;
