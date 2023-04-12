import axios from 'axios';
const API_BASE = "http://localhost:4000/" || process.env.REACT_APP_API_BASE;
const REVIEWS_API = `${API_BASE}/reviews`;

export const createReview = async (review) => {
    const response = await axios.post(REVIEWS_API, review)
    return response.data;
}

export const findReviews = async () => {
    const response = await axios.get(REVIEWS_API);
    const reviews = response.data;
    return reviews;
}

export const findReviewsBySongId = async (songId) => {
    const response = await axios.get(`${REVIEWS_API}/song/${songId}`);
    const reviews = response.data;
    return reviews;
}

export const findReviewsByUserId = async (userId) => {
    const response = await axios.get(`${REVIEWS_API}/user/${userId}`);
    const reviews = response.data;
    return reviews;
}

export const findReviewById = async (reviewId) => {
    const response = await axios.get(`${REVIEWS_API}/${reviewId}`);
    const review = response.data;
    return review;
}

export const deleteReview = async (reviewId) => {
    const response = await axios
        .delete(`${REVIEWS_API}/${reviewId}`)
    return response.data
}

export const updateReview = async (review) => {
    const response = await axios
        .put(`${REVIEWS_API}/${review._id}`, review);
    return response.data;
}
