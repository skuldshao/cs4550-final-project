import React, {useEffect, useState} from "react";
import {
    findUserByIdThunk,
    findUserThunk,
    updateUserThunk as updateGeneralUserThunk
} from "../../../services/user-thunk";
import {
    profileThunk as userProfileThunk,
    updateUserThunk as updateCurrentUserThunk
} from "../../../services/user-auth-thunk";
import {useDispatch} from "react-redux";

function About({
                   user = {
                       joined: 2023,
                       bio: "Biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography biography",
                       location: "Boston",
                       publicLocation: true
                   }, isEditing, type = "user", isSelf
               }
) {
    const [editing, setEditing] = useState(isEditing)
    const [loading, setLoading] = useState(true);
    const [bio, setBio] = useState("");
    const [publicLocation, setPublicLocation] = useState(false);
    const dispatch = useDispatch();
    const getUserProfile = async () => {
        if (isSelf) {
            const users = await dispatch(userProfileThunk())
            setBio(users.payload.bio);
            const pL = users.payload.locationPublic
            setPublicLocation(pL)
            setLoading(false)
        } else {
            const users = await dispatch(findUserByIdThunk(user._id))
            setBio((users.payload.bio))
            const pL = users.payload.locationPublic
            setPublicLocation(pL)
            setLoading(false)
        }
    };
    useEffect(() => {
        getUserProfile();
    }, []);

    const joinedDate = user.joined;
    const date = new Date(joinedDate); // convert epoch time to milliseconds and create a new Date object
    const formattedDate = date.toLocaleDateString('en-US');
    return (
        <>{!loading && <div className="text-secondary pe-3 pb-3 wd-bg-grey rounded-3 ps-3">
            <p className=" text-white fw-bold fs-5">ABOUT</p>
            <div className="pb-2">Joined {formattedDate}</div>
            {editing ?
                <form>
                    <label htmlFor="biographyInput"
                           className="text-white fs-6 fw-bold align-content-center">Biography</label>
                    <button className="btn btn-danger float-end mb-2" onClick={() => {
                        setEditing(false)
                        if (isSelf) {
                            dispatch(updateCurrentUserThunk({...user, "bio": bio, "locationPublic": publicLocation}))
                        } else {
                            dispatch(updateGeneralUserThunk({...user, "bio": bio, "locationPublic": publicLocation}))
                        }
                    }
                    }>SAVE
                    </button>
                    <textarea
                        className="form-control border-secondary p-1 ps-2 mb-3 shadow-none lh-base bg-black text-secondary"
                        id="biographyInput"
                        placeholder="Biography"
                        rows="8"
                        value={bio} onChange={(event) => {
                        const newBio = event.target.value
                        setBio(newBio)
                    }}/>
                    {type === "user" &&
                    <>
                        <p className="mb-0"><i className="bi bi-geo-alt-fill"/> {user.location}</p>
                        <label className="fw-light ps-4">
                            <input type="checkbox" checked={publicLocation} onClick={() => {
                                const newPL = !publicLocation
                                setPublicLocation(newPL);
                            }
                            }/> Make location public
                        </label>
                    </>}
                </form> :
                <div>
                    <div className="text-white fw-normal mb-2">
                        {bio}
                    </div>
                    {type === "user" && (publicLocation ?
                            <span className="text-white fw-normal">
                            <i className="bi bi-geo-alt-fill"/> {user.location}
                        </span> :
                            <></>
                    )}
                </div>
            }
        </div>}</>
    );
}

export default About
