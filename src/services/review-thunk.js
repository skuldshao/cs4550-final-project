import {createAsyncThunk}
    from "@reduxjs/toolkit";
import * as service
from './review-service';

export const findReviewThunk = createAsyncThunk(
    'reviews/findReview',
    async() => await service.findReview()
)

export const findReviewBySongIdThunk = createAsyncThunk(
    'reviews/findReviewBySongId', async (songId) =>
        await service.findReviewBySongId(songId)
)

export const findReviewByUserIdThunk = createAsyncThunk(
    'reviews/findReviewByUserId', async (userId) =>
        await service.findReviewByUserId(userId)
)

export const findReviewByIdThunk = createAsyncThunk(
    'reviews/findReviewById', async (reviewId) =>
        await service.findReviewById(reviewId)
)

export const createReviewThunk = createAsyncThunk(
    'reviews/createReview',
    async(review) => await service.createReview(review)

)

export const deleteReviewThunk = createAsyncThunk(
    'reviews/deleteReview',
    async(reviewId) => await service.deleteReview(reviewId)

)

export const updateReviewThunk = createAsyncThunk(
    'reviews/updateReview',
    async(review) => await service.updateReview(review)
)