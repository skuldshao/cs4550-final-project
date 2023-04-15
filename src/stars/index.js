import React from "react";

const Stars = ({rating}) => {
    const stars = [];
    for (let i = 0; i < Math.floor(rating); i++) {
        stars.push(<i className="bi bi-star-fill wd-gold"/>);
    }
    let half = false;
    if ((rating - stars.length) > 0) {
        half = true;
    }
    const mt = 5 - (Math.ceil(rating))
    const mtStars = [];
    for (let i = 0; i < mt; i++) {
        mtStars.push(<i className="bi bi-star wd-gold"/>);
    }
    return (
        <>
            {
                stars.map(() => {
                    return (<i className="bi bi-star-fill wd-gold"/>)
                })
            }
            {
                half && <i className="bi bi-star-half wd-gold"/>
            }
            {
                mtStars.map(value => {
                    return value
                })
            }
        </>
    )
}
export default Stars