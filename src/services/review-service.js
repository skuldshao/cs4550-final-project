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


export const updateReview = async (review) => {
    const response = await axios
        .put(`${REVIEW_API}/${review._id}`, review);
    return review;
}