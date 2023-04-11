import axios from "axios";
export const SPOTIFY_API = "https://api.spotify.com";
export const CLIENT_ID = "e58f801281ff453f8bf068fbe50cee98";
export const CLIENT_SECRET = "ffdbe2bf6aed421780a815ec257897d9"
export const ALBUM_API = "http://localhost:4000/api/songs";

const getToken = async () => {
    try {
        const auth = {
            url: 'https://accounts.spotify.com/api/token',
            headers: {
                'Authorization': 'Basic ' + (new Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')),
            },
            form: {
                grant_type: 'client_credentials'
            },
            json: true
        }
        request.post(auth, function (error, response, body) {
            if (!error && response.statusCode === 200) {
                return body.access_token;
                console.log(body.access_token);
            }
        })
    }
    catch(e) {
        console.log(e);
    }
};

export const getTracks = async (trackID) => {
    const token  = await getToken();

    const track_url = `https://api.spotify.com/v1/tracks/'${trackID}`;
    try {
        const response = await axios.get(track_url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    }
    catch (e) {
        console.log(e);
    }
};

export const searchTracks = async (query) => {
    const token  = await getToken();
    const search_url = `"https://api.spotify.com/v1/search?query=${query}&type=track&offset=0&limit=20"`;
    try {
        const response = await axios.get(search_url, {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });
        return response.data;
    }
    catch (e) {
        console.log(e);
    }
};