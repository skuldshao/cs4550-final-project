import React, {useState} from "react";

function About({
                   user = {
                       yearJoined: 2023,
                       bio: "Biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography",
                       location: "Boston",
                       publicLocation: true
                   }, isEditing, type = "user"
               }
) {

    const [bio, setBio] = useState(user.bio);
    const [publicLocation, setPublicLocation] = useState(user.publicLocation);
    return (
        <div className="row ps-3 text-secondary">
            <p>Joined {user.yearJoined}</p>
            {isEditing ?
                <form>
                    <textarea
                        className="form-control border-secondary p-1 ps-2 mb-3 shadow-none lh-base bg-black text-secondary"
                        id="biographyInput"
                        placeholder="Biography"
                        rows="8"
                        value={bio} onChange={(event) => {
                        setBio(event.target.value)
                        user.bio = bio;
                    }}/>
                    {type === "user" &&
                    <>
                        <p className="mb-0"><i className="bi bi-geo-alt-fill"/> {user.location}</p>
                        <label className="fw-light ps-4">
                            <input type="checkbox" onClick={() => {
                                setPublicLocation(!publicLocation);
                                user.publicLocation = publicLocation;
                            }
                            }/> Make location public
                        </label></>}
                </form> :
                <div>
                    <p>{bio}</p>
                    {type === "user" && (publicLocation ?
                        <p><i className="bi bi-geo-alt-fill"/> {user.location}</p> : <></>)}
                </div>
            }
        </div>
    );
}

export default About
