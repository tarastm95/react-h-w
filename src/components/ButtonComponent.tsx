import React from 'react';
import {ButtonComponentProps} from "../interfaces/ButtonComponentProps";

const ButtonComponent: React.FC<ButtonComponentProps> = ({onClick, text}) => {
    return (
        <div>
            <button onClick={onClick}>{text}</button>
        </div>
    );
};

export default ButtonComponent;
