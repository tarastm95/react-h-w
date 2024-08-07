import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import MainLayout from "./components/MainLayout";
import UsersPage from "./pages/UsersPage";
import PostsPage from "./pages/PostsPage";
import UserPage from "./pages/UserPage";
import PostPage from "./pages/PostPage";
import store from "./store";
import {Provider} from "react-redux";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

const router = createBrowserRouter([{
    path: "/", element: <MainLayout/>,
    children: [{
        path: "users", element: <UsersPage/>
    },
        {
            path: "user/:id", element: <UserPage/>
        },
        {
            path: "posts", element: <PostsPage/>
        },
        {
            path: "post", element: <PostPage/>
        }
    ]
}])

root.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
);


