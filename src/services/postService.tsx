import axios from 'axios';

const API_URL = 'https://dummyjson.com';

export const getPostsByUserId = async (userId: number) => {
    try {
        const response = await axios.get(`${API_URL}/posts?userId=${userId}`);
        return response.data.posts;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
