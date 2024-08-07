import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from "../store";
import {fetchUser} from "../slices/userSlice";
import {useParams} from "react-router-dom";
import UserComponent from "../components/UserComponent";

const UserPage = () => {
    const {id} = useParams<{ id: string }>();
    const dispatch = useAppDispatch();
    const {user, loading, error} = useAppSelector((state) => state.user);
    useEffect(() => {
        if (id) {
            dispatch(fetchUser(Number(id)));
        }
    }, [dispatch, id]);
    return (
        <div>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            {user && (
                <UserComponent id={user.id} name={user.name} username={user.username} email={user.email} />

            )}
        </div>
    );
};

export default UserPage;
