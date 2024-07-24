import React, {useEffect, useState} from 'react';
import {getUsers} from "../../api/userRequests";
import {UserTypes} from "../../types/userTypes";
import './Users.css';
import {NavLink} from "react-router-dom";
import {Simulate} from "react-dom/test-utils";
import error = Simulate.error;

const Users: React.FC = () => {
    const [users, setUsers] = useState<UserTypes[]>([]);
    useEffect(() => {
        getUsers()
            .then((response) => {
                console.log(response);
                setUsers(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])
    return (
        <div>
            <div>
                {users.map((user) => (
                    <div key={user.id} className="user">
                        <span><strong>id:</strong> {user.id}</span>
                        <span> <strong>name:</strong> {user.name}</span>
                        <span> <strong>username:</strong> {user.username}</span>
                        <span><strong>email</strong> {user.email}</span>
                        <NavLink to={`${user.id}/posts`}>Show posts {user.id}</NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;


