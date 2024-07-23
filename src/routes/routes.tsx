import React from 'react';
import {createBrowserRouter} from 'react-router-dom';
import MainLayout from "../components/MainLayout/MainLayout";
import Users from "../components/Users/Users";
import UserPosts from "../components/UserPosts/UserPosts";
import Posts from "../components/Posts/Posts";
import PostComments from "../components/PostComments/PostComments";
import Comments from "../components/Comments/Comments";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [{
            path: 'users', element: <Users/>
        },
            {
                path:'users/:id/posts', element:<UserPosts/>
            },
            {
                path:'posts' , element: <Posts/>
            },
            {
                path:'posts/:id/comments', element:<PostComments/>
            },
            {
                path:'comments', element:<Comments/>
            }
        ]
    }
]);

export default router;
