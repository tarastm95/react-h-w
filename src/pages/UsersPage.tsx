import React, {useEffect} from 'react';
import {RootState, useAppDispatch, useAppSelector} from "../store";
import {FetchUsers} from "../slices/usersSlice";
import UsersComponent from "../components/UsersComponent";

const UsersPage = () => {
    const dispatch = useAppDispatch();
    const {users, loading, error}  = useAppSelector((state: RootState) =>
        state.users
    );
    useEffect(() => {
        dispatch(FetchUsers());
    }, [dispatch]);
    return (
        <div>
            <h1>Users</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div>
                {users.map(user => (
                    <UsersComponent id={user.id} name={user.name} username={user.username} email={user.email}/>
                ))}
            </div>
        </div>
    );
};

export default UsersPage;
