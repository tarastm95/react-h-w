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
            .catch((error)=>{
                console.log(error);
            })
    }, [])
    return (
        <div>
            <div>
                {users.map((user) => (
                    <div key={user.id} className="user" >
                        <span>{user.id}</span>
                        <span>{user.name}</span>
                        <span>{user.username}</span>
                        <span>{user.email}</span>
                        <NavLink to={`${user.id}/posts`}>Show posts {user.id}</NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Users;


