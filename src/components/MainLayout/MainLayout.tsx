import React from 'react';
import {NavLink, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <div>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
                <NavLink to={'/comments'}>Comments</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
