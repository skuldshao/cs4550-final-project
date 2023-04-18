import React from "react";

const TimeDisplay = ({itemDate}) => {
    const diff = (Date.now() / 1000) - (itemDate);
    let timeElapsedString = "";

    const elapsedDays = Math.floor(diff / (60 * 60 * 24));
    if (elapsedDays > 0) {
        timeElapsedString += `${elapsedDays}d `;
    } else {
        const elapsedHours = Math.floor((diff / (60 * 60)) % 24);
        if (elapsedHours > 0) {
            timeElapsedString += `${elapsedHours}h `;
        } else {
            const elapsedMinutes = Math.floor((diff / 60) % 60);
            if (elapsedMinutes > 0) {
                timeElapsedString += `${elapsedMinutes}m `;
            } else {
                const elapsedSeconds = Math.floor(diff % 60);
                timeElapsedString += `${elapsedSeconds}s`;
            }
        }
    }
    return (
        <span className="text-secondary fw-normal me-5">{timeElapsedString} ago</span>
    )
}
export default TimeDisplay;