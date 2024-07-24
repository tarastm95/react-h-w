import React, {useEffect, useState} from 'react';
import {AllCommentRequests} from "../../api/commentRequests";
import commentTypes from "../../types/commentTypes";
import {useSearchParams} from "react-router-dom";
import posts from "../Posts/Posts";
import Pagination from "rc-pagination";

const ITEMS_PER_PAGE = 10;

const Comments = () => {
    const [comments, setComments] = useState<commentTypes[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [searchParams,setSearchParams] = useSearchParams();
    useEffect(()=>{
        const page = searchParams.get('page');
        if(page) {
            setCurrentPage(Number(page));
        }
    },[searchParams]);

    useEffect(() => {
        AllCommentRequests()
            .then((response) => {
                console.log(response);
                setComments(response.data);
            })
    }, []);

    const indexOfLastPost = currentPage * ITEMS_PER_PAGE;
    const indexOfFirstPost = indexOfLastPost - ITEMS_PER_PAGE;
    const currentComments = comments.slice(indexOfFirstPost,indexOfLastPost);

    const handlePageChange = (pageNumber:number) => {
        setCurrentPage(pageNumber);
        setSearchParams({page:pageNumber.toString()});
    }

    return (
        <div>
            {
                currentComments.map((comment) => (
                    <div key={comment.id}>

                        <span> <strong>postId:</strong> {comment.postId} </span>
                        <span> <strong>id:</strong> {comment.id}</span>
                        <span> <strong>name:</strong> {comment.name}</span>
                        <span> <strong>email:</strong> {comment.email}</span>
                        <span> <strong>body:</strong> {comment.body}</span>
                    </div>
                ))
            }
            <div>
                <Pagination
                current={currentPage}
                pageSize={ITEMS_PER_PAGE}
                total={comments.length}
                onChange={handlePageChange}
                className="pagination"
                />
            </div>
        </div>
    );
};

export default Comments;
