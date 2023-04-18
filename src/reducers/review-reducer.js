import { createSlice } from "@reduxjs/toolkit";
import {
    createReviewThunk,
    deleteReviewThunk,
    findReviewThunk,
    findReviewByIdThunk,
    findReviewByUserIdThunk,
    findReviewBySongIdThunk,
    updateReviewThunk
} from "../services/review-thunk";
// import reviews from '../reviews/review.json'

const currentUser = {
    "handle" : "@user123",
    "image": ""
}

const template = {
    ...currentUser,
    "likes" : 0,
}


const initialState = {
    reviews: [],
    loading: false
}

const reviewSlice = createSlice({
    name: 'reviews',
    initialState,
    reducers: {
        createReview(state, action) {
            state.unshift({
                ...action.payload,
                ...template,
                _id: (new Date()).getTime(),
            })
        }
    },
    extraReducers:{
        [findReviewThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewThunk.fulfilled]:
            (state,{ payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewThunk.rejected]:
            (state,action) => {
                state.loading = false
                state.reviews = action.error
            },
        [findReviewBySongIdThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewBySongIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewBySongIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findReviewByUserIdThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewByUserIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewByUserIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findReviewByIdThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewByIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewByIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [createReviewThunk.fulfilled]:
            (state,{ payload }) => {
                state.loading = false
                state.reviews.push(payload)
            },
        [deleteReviewThunk.fulfilled]:
            (state,{ payload }) => {
                state.loading = false
                state.reviews = state.reviews.filter(review => review._id !== payload)
            },
        [updateReviewThunk.fulfilled] :
            (state,{ payload }) => {
                state.loading = false
                const reviewUpdate = state.reviews
                    .findIndex((review) => review._id === payload._id)
                state.reviews[reviewUpdate] = {
                    ...state.reviews[reviewUpdate],
                    ...payload
                }
            },


    }

})

export const {createReview} = reviewSlice.actions;
export default reviewSlice.reducer;