import axios from 'axios';

const baseURL= import.meta.env.VITE_API_BACKEND

export const getProducts = async () => {
    try {
        return await axios.get(`${baseURL}products`).then(response => {
            return response.data;
        })

    }
    catch (error) {
        console.log('Error in GET products', error)
    }
}