import React, {useState} from "react";
import {createReview} from "../reducers/review-reducer";
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import {createReviewThunk} from "../services/review-thunk";


const WriteReview = (itemDetail) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    const [writeReview, setWriteReview] = useState('');
    const [formValid, setFormValid] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const {id} = useParams();

    const dispatch = useDispatch();

    const handleAddReview = (event) => {
        event.preventDefault();
        let errorMessage = '';
        if (rating === 0 || writeReview === '') {
            setFormValid(false);
            errorMessage = 'Please fill in both the rating and review text before proceeding.';
        }
        else {
            // const current = new Date();
            const newReview = {
                itemID: id,
                //userId: ObjectId,
                itemName: itemDetail.getItemDetail.itemName,
                artist: itemDetail.getItemDetail.artist,
                art: "",
                //date: `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`,
                review: writeReview,
                rating: rating,
            }
            dispatch(createReviewThunk(newReview));
            setFormValid(true);
            //clear form fields if needed
        }
        setErrorMessage(errorMessage);
    }

    // const date = new Date();
    console.log("rating: " + rating);
    console.log("params: " + id);
    // console.log("date: " + `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}`);
    console.log("item name: " + itemDetail.getItemDetail.itemName);
    console.log("artist: " + itemDetail.getItemDetail.artist);



        return (
            <form>
                <div className="align-content-center border p-3 text-white">
                    <label htmlFor="new-review">
                        Write a review:
                    </label>
                    <div className="row">
                        <div className="w-100">
                    <textarea id="new-review" name="new-review"
                              placeholder="Share your thoughts here."
                              rows={4}
                              className="form-control border-0 wd-review-textarea"
                              onChange={(event) => setWriteReview(event.target.value)}>

                    </textarea>
                        </div>
                        <div className="row">
                            <div className="col">
                                <div className="wd-rating text-center ps-3">
                                    {
                                        [...Array(5)].map((star, index)=> {
                                            index += 1;
                                            return(
                                                <button
                                                    type="button"
                                                    key={index}
                                                    className={index <= (hover || rating) ? "wd-on wd-star-rating" : "wd-off wd-star-rating"}
                                                    onClick={() => setRating(index)}
                                                    onMouseEnter={() => setHover(index)}
                                                    onMouseLeave={() => setHover(rating)}
                                                >
                                                    <span className="wd-star">&#9733;</span>
                                                </button>
                                            )
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <button className="rounded-pill wd-add-review wd-add-review"
                                onClick={handleAddReview}
                        >Add</button>
                    </div>
                    {formValid ? null :
                        <div className="text-danger text-center">{errorMessage}</div>
                    }
                </div>
            </form>

    )
}
export default WriteReview;

