import React from 'react';
import {NavLink, Outlet} from "react-router-dom";
import './MainLayout.css';
const MainLayout = () => {
    return (
        <div>
            <div>
                <NavLink className="nav" to={'/users'}>Users</NavLink>
                <NavLink className="nav" to={'/posts'}>Posts</NavLink>
                <NavLink className="nav" to={'/comments'}>Comments</NavLink>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;
