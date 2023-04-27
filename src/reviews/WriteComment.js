import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {profileThunk as userProfileThunk} from "../services/user-auth-thunk";
import {useDispatch} from "react-redux";
import {updateReviewThunk} from "../services/review-thunk";
import {updateUserThunk} from "../services/user-auth-thunk";

const WriteComment = ({review, user}) => {
    console.log(user)
    const [writeReview, setWriteReview] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const {id} = useParams();
    let type = '';

    const pathname = window.location.pathname;

    if (pathname.includes('album')) {
        type = 'album';
    } else {
        type = 'track';
    }

    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const getProfile = async () => {
        const profileData = await dispatch(userProfileThunk());
        const profile = profileData.payload;
        setProfile(profile);
        setLoading(false);
    };

    useEffect(() => {
        getProfile()
    }, [loading]);

    const dispatch = useDispatch();

    const handleAddComment = async (event) => {
        event.preventDefault();
        let errorMessage = '';
        if (writeReview === '') {
            setFormValid(false);
            errorMessage = 'Please fill in a comment before proceeding.';
        } else {
            let thing;
            const toSet = await dispatch(userProfileThunk())
            thing = toSet.payload
            const newComment = {
                userId: profile._id,
                date: Date.now(),
                comment: writeReview,
                avatarIcon: profile.avatarIcon,
                handle: profile.handle
            }
            const newCommentForUser = {
                reviewID: review._id,
                date: Date.now(),
                comment: writeReview,
                itemType: type
            }
            const newComments = [...user.comments, newCommentForUser]
            const newReviews = [...review.comments, newComment]
            dispatch(updateReviewThunk({...review, "comments": newReviews}));
            dispatch(updateUserThunk({...thing, "comments": newComments}))
            setFormValid(true);
            setWriteReview("");
            //clear form fields if needed
        }
        setErrorMessage(errorMessage);
    }


    return (
        <>
            <span className="text-white me-3">
                <label htmlFor="new-review" className="form-label">
                    Comment away:
                </label>
                <div className="row">
                    <div className="w-100">
                    <textarea id="new-review" name="new-review"
                              placeholder="Share your thoughts here"
                              rows={4}
                              value={writeReview}
                              className="form-control border-0 wd-review-textarea"
                              onChange={(event) => setWriteReview(event.target.value)}>

                    </textarea>
                    </div>
                </div>
                <div className="col d-flex justify-content-center m-3">
                    <button className="rounded-pill wd-add-review wd-add-review"
                            onClick={handleAddComment}
                    >Add
                    </button>
                </div>
                {formValid ? null :
                    <div className="text-danger text-center">{errorMessage}</div>
                }
            </span>
        </>)
}
export default WriteComment