import React, { useState } from 'react';
import { UserProps } from '../../models/IUser';
import Post from '../post-component/PostComponent';
import '../../styles/UserComponent.css';

interface UserComponentProps extends UserProps {
    getPosts: (id: number) => void;
    selectedUserId: number | null;
    posts: any[];
}

const UserComponent: React.FC<UserComponentProps> = ({ user, getPosts, selectedUserId, posts}) => {
    const [isLoadingPosts, setIsLoadingPosts] = useState(false);

    const handleClick = async () => {
        setIsLoadingPosts(true);
        await getPosts(user.id);
        setIsLoadingPosts(false);
    };

    return (
        <div className="User">
            <div className="user-info">
                {user.id} {user.firstName} {user.lastName}
            </div>
            <button onClick={handleClick}>
                {isLoadingPosts ? 'Загрузка' : `Показати пост для користувача: ${user.id}`}
            </button>
            {selectedUserId === user.id && (
                <div className="Posts">
                    {posts.length > 0 ? (
                        posts.map((post: any) => <Post key={post.id} {...post} />)
                    ) : (
                        <p>Немає постів для цього користувача</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserComponent;
