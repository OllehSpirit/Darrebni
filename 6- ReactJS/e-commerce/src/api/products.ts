import { bodyData } from '../CONSTANTS/types';
import { axiosInstance } from './axiosService';

export const getProducts = async () => {
    try {
        return await axiosInstance.get(`/products`).then(response => {
            return response.data;
        })

    }
    catch (error) {
        console.log('Error in GET products', error)
    }
}

export const getProduct = async (id: number) => {
    try {
        return await axiosInstance.get(`/products/${id}`).then(response => {
            return response.data;
        })

    }
    catch (error) {
        console.log('Error in GET products', error)
    }
}

export const postProduct = async (data: bodyData) => {
    try {
        return await axiosInstance.post(`/products`,
            {
                data
            },
            {
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            }
        )

    }
    catch (error) {
        console.log('Error in POST product', error)
    }
}

export const putProduct = async (id: number, data: FormData) => {
    console.log("🚀 ~ putProduct ~ image:", data)
    console.log("🚀 ~ putProduct ~ image:", data.get('image'))
    try {
        return await axiosInstance.put(`/products/${id}`,
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            },
        )

    }
    catch (error) {
        console.log('Error in POST product', error)
    }
}


export const deleteProduct = async (id: number) => {
    try {
        return await axiosInstance.delete(`/products/${id}`)
    }
    catch (error) {
        console.log('Error in delete product', error)
    }
}


export const getCategories = async () => {
    try {
        return await axiosInstance.get(`/products/categories`).then(response => {
            return response.data;
        })

    }
    catch (error) {
        console.log('Error in GET categories', error)
    }
}