import React from "react";

export function MsToMin(ms) {
    let total = Math.floor(ms / 1000);
    let mins = Math.floor(total / 60);
    let secs = mins % 60;

    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;

}

export function getGenres(g) {
    let str = "";
    for (let i = 0; i < g.length; i++) {
        str += g[i];
        if (i != g.length - 1) {
            str += ", ";
        }
    }
    return str;
}

