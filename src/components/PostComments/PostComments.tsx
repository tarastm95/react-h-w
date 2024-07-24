import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import commentRequests from "../../api/commentRequests";
import commentTypes from "../../types/commentTypes";


const PostComments: React.FC = () => {
    const {id} = useParams();
    const [comments, setComments] = useState<commentTypes[]>([]);
    useEffect(() => {
        commentRequests(id)
            .then((response) => {
                console.log(response);
                setComments(response.data);
            })
    }, [id]);

    console.log(id);
    return (
        <div>
            {
                comments.map((comment) => (
                    <div key={comment.id}>
                        <span> <strong>id:</strong>
                             {comment.id}
                        </span>
                        <span> <strong>name:</strong>
                            {comment.name}
                       </span>
                        <span> <strong>email:</strong>
                            {comment.email}
                        </span>
                        <span> <strong>body:</strong>
                            {comment.body}
                        </span>

                    </div>
                ))
            }
        </div>
    );
};

export default PostComments;
