import React from "react";

export const getDate = (d) =>
{
    let day = d.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    let month = d.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }
    const out = `${month}/${day}/${d.getFullYear()}`;
    return out;
}
