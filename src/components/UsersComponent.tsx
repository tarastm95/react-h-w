import React from 'react';
import {User} from "../interfaces/User";
import ButtonComponent from "./ButtonComponent";
import {useNavigate} from "react-router-dom";

const UsersComponent: React.FC<User> = ({id, name, username, email}) => {
    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate(`/user/${id}`)
    }
    return (
        <div>
            <span>{id}</span>
            <span>{name}</span>
            <span>{username}</span>
            <span>{email}</span>
            <ButtonComponent onClick={handleButtonClick} text="Подивитись користувача"></ButtonComponent>
        </div>
    );
};

export default UsersComponent;
