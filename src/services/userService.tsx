import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const getUsers = async () => {
    try {
        const response = await axios.get(`${API_URL}/users`);
        return response.data.users;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
