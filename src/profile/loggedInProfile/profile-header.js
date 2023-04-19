import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
import {ADMINKEY} from "../../login/login"
import {profileThunk as userProfileThunk, logoutThunk as userLogoutThunk} from "../../services/user-auth-thunk";
import {
    profileThunk as adminProfileThunk,
    logoutThunk as adminLogoutThunk,
} from "../../services/admin-auth-thunk";
import {useDispatch, useSelector} from "react-redux";
import userAuthReducer from "../../reducers/user-auth-reducer";

function ProfileHeader({
                           // who = {
                           //     "userName": "Rowlet",
                           //     "handle": "rowlie",
                           //     "avatarIcon": "https://ovicio.com.br/wp-content/uploads/2022/06/20220616-20220616_200814-555x555.jpg",
                           //     "number": "123-456-7890",
                           //     "email": "rowlet@pokemon.com",
                           // },
                           active, type
                       }) {
    // const {currentUser} = useSelector(state => state.userAuth);
    // const [who, setWho] = useState({currentUser});
    // console.log(currentUser);
    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // let admin;
    // let adminPayload;
    // //
    // useEffect(() => {
    //     adminPayload = dispatch(adminProfileThunk());
    //     admin = adminPayload.type !== 'adminAuth/profile/rejected' && adminPayload.type !== undefined;
    //     let response;
    //     if (admin) {
    //         dispatch(adminProfileThunk());
    //     } else {
    //         dispatch(userProfileThunk());
    //     }
    // }, []);
    //
    // const handleLogout = async () => {
    //     let payload;
    //     if (admin) {
    //         payload = await dispatch(adminLogoutThunk());
    //     } else {
    //         payload = await dispatch(userLogoutThunk());
    //     }
    //     if (payload !== 'adminAuth/logout/rejected' && payload !== 'userAuth/logout/rejected') {
    //         navigate("/login")
    //     }
    // }
    // const {currentUser} = useSelector((state) => state.users);
    const [profile, setProfile] = useState({});
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const getAdminProfile = async () => {
        // const profile = await userService.profile();
        const action = await dispatch(adminProfileThunk());
        setProfile(action.payload);
    };
    const getUserProfile = async () => {
        const user = await dispatch(userProfileThunk())
        setProfile(user.payload);
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
            getAdminProfile();
        } else {
            getUserProfile();
        }
    }, []);

    return (
        <div className="d-flex justify-content-between">
            {profile && <div className="d-flex">
                {console.log(profile)}
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