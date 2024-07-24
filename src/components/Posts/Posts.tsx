import React, { useEffect, useState } from 'react';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import './Posts.css';
import { NavLink, useSearchParams } from 'react-router-dom';
import postTypes from "../../types/postTypes";
import { PostsRequests } from "../../api/postRequests";

const ITEMS_PER_PAGE = 10;

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<postTypes[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
        const page = searchParams.get('page');
        if (page) {
            setCurrentPage(Number(page));
        }
    }, [searchParams]);

    useEffect(() => {
        PostsRequests()
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, []);

    const indexOfLastPost = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - ITEMS_PER_PAGE;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    const handlePageChange = (pageNumber: number) => {
        setCurrentPage(pageNumber);
        setSearchParams({ page: pageNumber.toString() });
    };

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {currentPosts.map(post => (
                    <li key={post.id}>
                        <h1>Posts by user number: {post.userId}</h1>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                        <NavLink to={`${post.id}/comments`}>Show post comment</NavLink>
                    </li>
                ))}
            </ul>
            <Pagination
                current={currentPage}
                pageSize={ITEMS_PER_PAGE}
                total={posts.length}
                onChange={handlePageChange}
                className="pagination"
            />
        </div>
    );
};

export default Posts;
