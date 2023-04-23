import React from "react";

export const getDate = (d) =>
{
    const out = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    return out;
}



export function ratingToStars(rating) {

    let stars = '';

    for (let i = 0; i < rating; i++) {
        stars += '★';
    }

    for (let i = rating; i < 5; i++) {
        stars += '☆';
    }

    return stars;
}