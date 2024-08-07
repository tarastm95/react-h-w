import React from 'react';
import { User } from '../interfaces/User';
import ButtonComponent from './ButtonComponent';
import { useNavigate } from 'react-router-dom';

const UserComponent: React.FC<User> = ({ id, name, username, email }) => {
    const navigate = useNavigate();

    const handleButtonClick = () => {
        navigate(`/post?userId=${id}`);
    };

    return (
        <div>
            <span> <strong>name:</strong> {name}</span>
            <span> <strong>username:</strong> {username}</span>
            <span> <strong>email:</strong> {email}</span>
            <ButtonComponent onClick={handleButtonClick} text="Подивитись пости користувача" />
        </div>
    );
};

export default UserComponent;
