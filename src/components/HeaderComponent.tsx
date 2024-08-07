import React from 'react';
import {NavLink} from "react-router-dom";

const HeaderComponent = () => {
    return (
        <div>
            <span>
                <NavLink to={'/users'}>Users</NavLink>
            </span>
            &nbsp;
            <span>
                <NavLink to={'/posts'}>Posts</NavLink>
            </span>
        </div>
    );
};

export default HeaderComponent;
