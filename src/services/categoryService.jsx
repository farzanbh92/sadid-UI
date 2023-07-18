
import { axiosInstance, mainURL } from "./utility";

export const categories = async () => {
    try {
        const data = await axiosInstance.get(`${mainURL}/api/Category`);
        return data;
    }
    catch (error) {
        return { error }
    }
};
export const getSingleCategory = async (id) => {
    try {
        const data = await axiosInstance.get(`${mainURL}/api/Category/${id}`);
        return data;
    }
    catch (error) {
        return { error }
    }
};
export const createCategory = async (category) => {
    try {
        const data = await axiosInstance.post(`${mainURL}/api/Category`, {
            category

        });
        return data;
    }
    catch (error) {
        return { error }
    }
};
export const deleteCategory = async (id) => {
    try {
        const data = await axiosInstance.delete(`${mainURL}/api/Category/${id}`);
        return data;
    }
    catch (error) {
        return { error }
    }
};
export const setCategory = async (id, category) => {
    try {
        const data = await axiosInstance.put(`${mainURL}/api/Category/${id}`, {
            category
        });
        return data;
    }
    catch (error) {
        return { error }
    }
};