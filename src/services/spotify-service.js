import axios from "axios";

export const SPOTIFY_API = "https://api.spotify.com";
export const CLIENT_ID = "e58f801281ff453f8bf068fbe50cee98";
export const CLIENT_SECRET = "ffdbe2bf6aed421780a815ec257897d9"
export const ALBUM_API = "http://localhost:4000/api/songs";

const qs = require('qs');

export const getToken = async () => {
    try {
        const url = 'https://accounts.spotify.com/api/token';
        const data = {
            grant_type: 'client_credentials',
        };
        const headers = {
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            auth: {
                username: CLIENT_ID,
                password: CLIENT_SECRET,
            },
        };

        const response = await axios.post(url, qs.stringify(data), headers);
        //console.log(response.data.access_token);
        //console.log("sucessfully got token");
        return response.data.access_token;
    } catch (e) {
        console.log(e);
    }
};

export const getTrack = async (trackID) => {
    const token = await getToken();

    const track_url = `https://api.spotify.com/v1/tracks/${trackID}`;
    try {
        const response = await axios.get(track_url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    } catch (e) {
        console.log(e);
    }
};

export const searchTracks = async (query) => {
    const token = await getToken();
    const search_url = `https://api.spotify.com/v1/search?query=${query}&type=track&offset=0&limit=20`;
    try {
        const response = await axios.get(search_url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        const result = await response.data;
        //console.log(result)
        return result.tracks.items;
    } catch (e) {
        console.log(query);
        console.log(e);
    }
};