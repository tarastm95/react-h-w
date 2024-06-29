import React, { useEffect, useState } from 'react';
import UserComponent from '../user-component/UserComponent';
import { fetchUsers, fetchPostsByUserId } from '../../services/apiService';
import '../../styles/UsersComponent.css';

const UsersComponent: React.FC = () => {
    const [users, setUsers] = useState<any[]>([]);
    const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
    const [posts, setPosts] = useState<any[]>([]);

    useEffect(() => {
        const getUsers = async () => {
            try {
                const usersData = await fetchUsers();
                setUsers(usersData);
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };

        getUsers();
    }, []);

    const getPosts = async (userId: number) => {
        try {
            const postsData = await fetchPostsByUserId(userId);
            setPosts(postsData);
            setSelectedUserId(userId);
        } catch (error) {
            console.log('Error fetching posts:', error);
        }
    };

    return (
        <div className="Users">
            {users.map((user: any) => (
                <UserComponent
                    key={user.id}
                    user={user}
                    getPosts={getPosts}
                    selectedUserId={selectedUserId}
                    posts={posts}
                />
            ))}
        </div>
    );
};

export default UsersComponent;
