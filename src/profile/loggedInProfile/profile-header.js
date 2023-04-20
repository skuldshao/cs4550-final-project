import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {ADMINKEY} from "../../login/login"
import {profileThunk as userProfileThunk, logoutThunk as userLogoutThunk} from "../../services/user-auth-thunk";
import {
    profileThunk as adminProfileThunk,
    logoutThunk as adminLogoutThunk,
} from "../../services/admin-auth-thunk";
import {useDispatch} from "react-redux";

function ProfileHeader({
                           active, type
                       }) {
    const [profile, setProfile] = useState({});
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getAdminProfile = async () => {
        const user = await dispatch(adminProfileThunk());
        setProfile(user.payload);
        setLoading(false);
    };
    const getUserProfile = async () => {
        const user = await dispatch(userProfileThunk())
        setProfile(user.payload);
        setLoading(false)
    };
    const handleLogout = async () => {
        if (type === "admin") {
            await dispatch(adminLogoutThunk());
        } else {
            await dispatch(userLogoutThunk());
        }
        navigate("/login");
    };
    useEffect(() => {
        if (type === "admin") {
            dispatch(adminProfileThunk())
            getAdminProfile();
        } else {
            dispatch(userProfileThunk())
            getUserProfile();
        }
    }, []);

    return (
        <div className="d-flex justify-content-between">
            {!loading && <div className="d-flex">
                <img className="rounded-circle pt-0 ms-5 align-self-center" width={100} height={100}
                     src={`/images/${profile.avatarIcon}`}/>
                <div className="ps-5 wd-off-white-fg">
                    <div className="lh-1 text-white fw-bold fs-1 wd-off-white-fg pb-2">{profile.userName}</div>
                    <div className="lh-1 text-secondary pb-1">@{profile.handle}</div>
                    <>
                        <div className="lh-1 text-secondary pb-1">{profile.number}</div>
                        <div className="lh-1 text-secondary">{profile.email}</div>
                        {type === "admin" && <div className="lh-1 text-secondary pt-1">{ADMINKEY}</div>}
                    </>
                </div>
            </div>}
            {profile && <div className="align-self-center me-5">
                <button className="btn btn-outline-danger  rounded-3 fw-bold mb-2" onClick={async () => {
                    await handleLogout()
                }}>
                    LOGOUT
                </button>
                <br/>
                <Link to={(type === "admin" || active === "overview") ? `/profile/edit` : `/profile/edit/${active}`}>
                    <button className="btn btn-outline-secondary  rounded-3 fw-bold">
                        EDIT
                        <i className="bi bi-pencil ps-2"/>
                    </button>
                </Link>
            </div>}
        </div>
    );
}

export default ProfileHeader