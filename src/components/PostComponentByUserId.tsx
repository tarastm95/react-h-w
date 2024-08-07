import React from 'react';
import {PostProps} from "../interfaces/PostProps";
const PostComponentByUserId: React.FC<PostProps> = ({id, userId, title, body}) => {
    return (
        <div>
            <span> <strong>id:</strong> {id}</span>
            <span> <strong>userId:</strong> {userId}</span>
            <span> <strong>title:</strong> {title}</span>
            <span> <strong>body:</strong> {body}</span>
        </div>
    );
};

export default PostComponentByUserId;
