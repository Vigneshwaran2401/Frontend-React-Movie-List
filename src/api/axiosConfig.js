import axios from "axios";

const api = axios.create({
    baseURL: "https://d6ce-2401-4900-4df0-3977-c8a9-bb-31cf-d1df.ngrok-free.app/",
    headers: {"ngrok-skip-browser-warning":"true"}
});

export default api;