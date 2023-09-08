import axios from "axios";

const api = axios.create({
    baseURL: "https://b5b6-2401-4900-4ddd-dae3-14c5-e1ef-b6fa-b5f2.ngrok-free.app/",
    headers: {"ngrok-skip-browser-warning":"true"}
});

export default api;