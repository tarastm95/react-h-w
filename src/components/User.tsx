import React, { Component } from 'react';
import Posts from './Posts';
import { getPostsByUserId } from '../services/postService';

interface UserProps {
    users: {
        id: number;
        firstName: string;
        lastName: string;
    }[];
}

interface UserState {
    selectedUserId: number | null;
    posts: Post[];
}

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

class User extends Component<UserProps, UserState> {
    constructor(props: UserProps) {
        super(props);
        this.state = {
            selectedUserId: null,
            posts: [],
        };
    }

    handleClick = (userId: number) => {
        this.fetchPosts(userId);
        this.setState({ selectedUserId: userId });
    };

    fetchPosts = async (userId: number) => {
        try {
            const posts = await getPostsByUserId(userId);
            this.setState({ posts });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    render() {
        const { users } = this.props;
        const { selectedUserId, posts } = this.state;

        return (
            <div>
                {users.map(user => (
                    <div key={user.id}>
                        <p>{user.firstName} {user.lastName}</p>
                        <button onClick={() => this.handleClick(user.id)}>Користувач: {user.id}</button>
                    </div>
                ))}
                {selectedUserId !== null && <Posts posts={posts} />}
            </div>
        );
    }
}

export default User;
