import React, {useEffect, useState} from 'react';
import {useParams, useSearchParams} from "react-router-dom";
import postTypes from "../../types/postTypes";
import PostRequests from "../../api/postRequests";
import './UserPosts.css';
const UserPosts:React.FC = () => {
    const {id} = useParams();
    console.log(id);
    const [posts,setPosts] = useState<postTypes[]>([]);
    useEffect(() => {
        PostRequests(id?.toString()).then((response)=>{
            console.log(response);
            setPosts(response.data);
        })
            .catch((error)=>{
                console.log(error);
            })
    }, [id]);
    return (
        <div>
            {
                posts.map((post)=>(
                    <div key={post.id} className="post">
                               <span>{post.id}</span>
                               <span>{post.userId}</span>
                               <span>{post.title}</span>
                               <span>{post.body}</span>
                    </div>
                ))

            }
        </div>
    );
};

export default UserPosts;
