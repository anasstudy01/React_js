import axios from "axios";
import { CoinGecko_api } from "./constant";


const axiosInstance = axios.create({
    baseURL:CoinGecko_api,
})

export default axiosInstance;