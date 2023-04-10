import React, {useState} from "react";
import "./index.css"

const Rating = () => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);
    return (
        <div className="wd-rating">
            {
                [...Array(5)].map((star, index)=> {
                    index += 1;
                    return(
                        <button
                            type="button"
                            key={index}
                            className={index <= (hover || rating) ? "wd-on" : "wd-off"}
                            onClick={() => setRating(index)}
                            onMouseEnter={() => setHover(index)}
                            onMouseLeave={() => setHover(rating)}
                        >
                            <span className="wd-star">&#9733;</span>
                        </button>
                    )
                })}
        </div>

    );
};

export default Rating;