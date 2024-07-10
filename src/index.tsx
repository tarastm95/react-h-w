import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Users from './components/Users';
import Posts from './components/Posts';
import Comments from './components/Comments';
import Layout from './components/Layout';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "users",
                element: <Users />
            },
            {
                path: "posts",
                element: <Posts />
            },
            {
                path: "comments",
                element: <Comments />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <RouterProvider router={router} />
);
