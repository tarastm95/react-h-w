import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/posts">Posts</Link>
                    </li>
                    <li>
                        <Link to="/comments">Comments</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div>
    );
};

export default Layout;
