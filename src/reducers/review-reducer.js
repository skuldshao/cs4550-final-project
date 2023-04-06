import { createSlice } from "@reduxjs/toolkit";
import reviews from '../reviews/review.json'

const currentUser = {
    "handle" : "@user123",
    "image": ""
}

const template = {
    ...currentUser,
    "likes" : 0,
}

const reviewSlice = createSlice({
    name: 'reviews',
    initialState: reviews,
    reducers: {
        createReview(state, action) {
            state.unshift({
                ...action.payload,
                ...template,
                _id: (new Date()).getTime(),
            })
        }
    }
})

export const {createReview} = reviewSlice.actions;
export default reviewSlice.reducer;