import axios from "axios";

export const fetchUsers = async () => {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        return response.data.users;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const fetchPostsByUserId = async (userId: number) => {
    try{
        const response = await axios.get('https://dummyjson.com/posts/user/' + userId);
        return response.data.posts;
    }
    catch (error) {
        console.log(error);
        throw error;
    }
}


