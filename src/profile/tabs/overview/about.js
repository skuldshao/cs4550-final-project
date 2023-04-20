import React, {useState} from "react";

function About({
                   user = {
                       joined: 2023,
                       bio: "Biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography",
                       location: "Boston",
                       publicLocation: true
                   }, isEditing, type = "user"
               }
) {
    const [bio, setBio] = useState(user.bio);
    const [publicLocation, setPublicLocation] = useState(user.publicLocation);
    return (
        <div className="text-secondary pe-3 pb-3 wd-bg-grey rounded-3 ps-3">
            <p className=" text-white fw-bold fs-5">ABOUT</p>
            <div className="pb-2">Joined {user.joined}</div>
            {isEditing ?
                <form>
                    <label htmlFor="biographyInput" className="text-white fs-6 fw-bold">Biography</label>
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
                    <span className="text-white fw-normal">
                        {bio}
                    </span>
                    {type === "user" && (publicLocation ?
                            <span className="text-white fw-normal">
                            <i className="bi bi-geo-alt-fill"/> {user.location}
                        </span> :
                            <></>
                    )}
                </div>
            }
        </div>
    );
}

export default About
