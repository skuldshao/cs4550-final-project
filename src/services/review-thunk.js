import {createAsyncThunk}
    from "@reduxjs/toolkit";
import * as service
from './review-service';

export const findReviewThunk = createAsyncThunk(
    'reviews/findReview',
    async() => await service.findReview()
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