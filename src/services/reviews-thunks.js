import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./reviews-service"

export const findReviewsThunk = createAsyncThunk(
    'reviews/findReviews', async () =>
        await service.findReviews()
)

export const findReviewsBySongIdThunk = createAsyncThunk(
    'reviews/findReviewsBySongId', async (songId) =>
        await service.findReviewsBySongId(songId)
)

export const findReviewsByUserIdThunk = createAsyncThunk(
    'reviews/findReviewsByUserId', async (userId) =>
        await service.findReviewsByUserId(userId)
)

export const findReviewByIdThunk = createAsyncThunk(
    'reviews/findReviewById', async (reviewId) =>
        await service.findReviewById(reviewId)
)

export const deleteReviewThunk = createAsyncThunk(
    'reviews/deleteReview',
    async (reviewId) => {
        await service.deleteReview(reviewId)
        return reviewId
})

export const createReviewThunk = createAsyncThunk(
    'reviews/createReview',
async (review) => {
    const newReview = await service.createReview(review)
    return newReview
})

export const updateReviewThunk =
    createAsyncThunk(
        'reviews/updateReview',
        async (review) =>
            await service.updateReview(review)
    )

