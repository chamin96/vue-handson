import qs from "qs";
import axios from "axios";

const CLIENT_ID = "dFs-mYpnxevbeiuaMNOZFvjFCbiasVJCAu5C3fsKOlQ";
const ROOT_URL = "https://unsplash.com";
const API_URL = "https://api.unsplash.com";
const SCOPE = "public+read_user+read_photos+write_photos+read_collections";

export default {
    login() {
        const querystring = {
            client_id: CLIENT_ID,
            redirect_uri: "http://localhost:8080/oauth2/callback",
            response_type: "code",
        };

        window.location = `${ROOT_URL}/oauth/authorize?${qs.stringify(
            querystring
        )}&scope=${SCOPE}`;
    },
    fetchImages(token) {
        return axios.get(`${API_URL}/photos`, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
    },
    getPublicImages() {
        return axios.get(`${API_URL}/photos`, {
            headers: {
                Authorization: `Client-ID ${CLIENT_ID}`,
            },
        });
    },
};
