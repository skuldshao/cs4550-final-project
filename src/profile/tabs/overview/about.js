import React from "react";

function About( {
                       about = {
                           yearJoined: 2023,
                           bio: "Biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography",
                           location: "Boston",
                           publicLocation: true
                       },
                       isEditing }
) {
    return (
        <div className="row ps-3 text-secondary">
            <p>Joined {about.yearJoined}</p>
            {isEditing ?
                <form>
                    <textarea
                           className="form-control border-secondary p-1 ps-2 mb-3 shadow-none lh-base bg-black text-secondary"
                           id="biographyInput"
                           placeholder="Biography"
                           rows="8"
                           value={about.bio}></textarea>
                    <p className="mb-0"><i className="bi bi-geo-alt-fill"></i> {about.location}</p>
                    <label className="fw-light ps-4">
                            <input type="checkbox"/> Make location public
                        </label>
                </form> :
                <div>
                    <p>{about.bio}</p>
                    {about.publicLocation ? <p><i className="bi bi-geo-alt-fill"></i> {about.location}</p> : <></>}
                </div>
            }
        </div>
    );
}

export default About
