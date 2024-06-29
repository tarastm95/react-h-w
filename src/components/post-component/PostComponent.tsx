import React from "react";
import { PostProps } from "../../models/IPost";
import '../../styles/PostComponent.css';

const Post: React.FC<PostProps> = ({ id, title, body, tags, reactions, views, userId }) => {
    return (
        <div className="post">
            <h3>{title}</h3>
            <p>{body}</p>
            <p>Tags: {tags.join(', ')}</p>
            <p>Likes: {reactions.likes}, Dislikes: {reactions.dislikes}</p>
            <p>Views: {views}</p>
        </div>
    );
};

export default Post;
