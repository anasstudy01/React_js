import axiosInstance from "../helpers/axiosInstance";

export async function fetchCoinDetails(id) {
   
    try {
        const response = await axiosInstance.get(`/coins/${id}`);
        console.log(response);
        return response.data;

    } catch(error) {
        console.error(error);
        return null;
    }
}