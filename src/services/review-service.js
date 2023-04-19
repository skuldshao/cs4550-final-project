import axios from "axios";
const REVIEW_API = 'http://localhost:4000/api/reviews';

export const findReview = async () => {
    const response = await axios.get(REVIEW_API);
    return response.data;
}

export const createReview = async(review) => {
    const response = await axios.post(REVIEW_API, review)
    return response.data;
}

export const deleteReview = async (reviewId) => {
    const response = await axios
        .delete(`${REVIEW_API}/${reviewId}`)
    return response.data;
}

export const findReviewBySongId = async (songId) => {
    const response = await axios.get(`${REVIEW_API}/song/${songId}`);
    const reviews = response.data;
    return reviews;
}

export const findReviewByUserId = async (userId) => {
    const response = await axios.get(`${REVIEW_API}/user/${userId}`);
    const reviews = response.data;
    return reviews;
}

export const findReviewById = async (reviewId) => {
    const response = await axios.get(`${REVIEW_API}/${reviewId}`);
    const review = response.data;
    return review;
}

export const updateReview = async (review) => {
    const response = await axios
        .put(`${REVIEW_API}/${review._id}`, review);
    return review;
}