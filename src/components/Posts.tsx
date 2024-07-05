// Posts.tsx
import React from 'react';

interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
    tags: string[];
    reactions: {
        likes: number;
        dislikes: number;
    };
    views: number;
}

interface PostsProps {
    posts: Post[];
}

const Posts: React.FC<PostsProps> = ({ posts }) => {
    console.log(posts)
    return (
        <div>
            <h2>Posts:</h2>
            {posts.map(post => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <p>Tags: {post.tags.join(', ')}</p>
                    <p>Likes: {post.reactions.likes} Dislikes: {post.reactions.dislikes}</p>
                    <p>Views: {post.views}</p>
                </div>
            ))}
        </div>
    );
};

export default Posts;
