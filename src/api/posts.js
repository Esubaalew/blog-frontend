import  axios from 'axios';

const API_URL = 'http://localhost:8000/api/posts/';

export const fetchPosts = async () => {
    try {
        const response = await axios.get(`${API_URL}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

export const createPost = async (postData) => {
    try {
        const response = await axios.post(`${API_URL}/posts/`, postData);
        return response.data;
    } catch (error) {
        console.error('Error creating post:', error);
        throw error;
    }
};


export const fetchPostBySlug = async (slug) => {
    try {
        const response = await axios.get(`http://localhost:8000/api/post/${slug}/`);
        return response.data;
    } catch (error) {
        throw error;
    }
};