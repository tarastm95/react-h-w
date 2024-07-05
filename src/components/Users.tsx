import React, { Component } from 'react';
import User from "./User";
import { getUsers } from '../services/userService';

interface Users {
    id: number;
    firstName: string;
    lastName: string;
}

interface UsersState {
    data: Users[] | null;
}

class Users extends Component<{}, UsersState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            data: null,
        };
    }

    async componentDidMount() {
        try {
            const users = await getUsers();
            this.setState({ data: users });
        } catch (error) {
            console.error('There was an error fetching the data!', error);
        }
    }

    render() {
        return (
            <div>
                {this.state.data ? (<User users={this.state.data} /> ) : (<div>Loading...</div>)}
            </div>
        );
    }
}

export default Users;
