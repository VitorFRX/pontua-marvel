// LINK --> IMPORTS AXIOS
import axios from "axios";
// END AXIOS


export const marvelAPI = axios.create({
    baseURL: `https://gateway.marvel.com/v1/public/`,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    paramsSerializer: {
        indexes: false,
    },
});

export const localAPI = axios.create({
    baseURL: `http://localhost:3001/`,
    headers: {
        "Content-Type": "application/json; charset=utf-8"
    },
    paramsSerializer: {
        indexes: false,
    },
});