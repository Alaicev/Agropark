import axios from "axios";


const instance = axios.create({
    baseURL: "https://agropark-vavilov-sar.onrender.com/"
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem("tocen")

    return config
})

export default instance