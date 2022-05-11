import axios from "axios";

export const beraTopApi = axios.create({
    baseURL: "https://beratop-api.herokuapp.com/",
});
