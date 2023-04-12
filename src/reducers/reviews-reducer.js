import {createSlice}
    from "@reduxjs/toolkit";
import {deleteReviewThunk, findReviewsThunk, findReviewByIdThunk, findReviewsBySongIdThunk, findReviewsByUserIdThunk, createReviewThunk, updateReviewThunk}
    from "../services/reviews-thunks";
import {findReviewsBySongId} from "../services/reviews-service";

const initialState = {
    reviews: [],
    loading: false
}

const reviewsSlice = createSlice({
    name: 'reviews',
    initialState,
    extraReducers: {
        [findReviewsThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewsThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findReviewsBySongIdThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewsBySongIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewsBySongIdThunk.rejected]:
            (state, action) => {
                state.loading = false
                state.error = action.error
            },
        [findReviewsByUserIdThunk.pending]:
            (state) => {
                state.loading = true
                state.reviews = []
            },
        [findReviewsByUserIdThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews = payload
            },
        [findReviewsByUserIdThunk.rejected]:
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
        [deleteReviewThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.reviews = state.reviews
                    .filter(t => t._id !== payload)
            },
        [createReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.reviews.push(payload)
            },
        [updateReviewThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const reviewNdx = state.reviews
                    .findIndex((a) => a._id === payload._id)
                state.reviews[reviewNdx] = {
                    ...state.reviews[reviewNdx],
                    ...payload
                }
            }
    },
    reducers: { }
});

export default reviewsSlice.reducer;