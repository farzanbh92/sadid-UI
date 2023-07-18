
import { axiosInstance, mainURL } from "./utility";

export const requests = async () => {
    try {
        const data = await axiosInstance.get(`${mainURL}/api/Request`);
        return { data };
    }
    catch (error) {
        return { error }
    }
};
export const getSingleRequest = async (id) => {
    try {
        const data = await axiosInstance.get(`${mainURL}/api/Request/${id}`);
        return { data };
    }
    catch (error) {
        return { error }
    }
};
export const createRequest = async (request) => {
    try {
        const data = await axiosInstance.post(`${mainURL}/api/Request`, {
            request
        });
        return { data };
    }
    catch (error) {
        return { error }
    }
};
export const deleteRequest = async (id) => {
    try {
        const data = await axiosInstance.delete(`${mainURL}/api/Request/${id}`);
        return { data };
    }
    catch (error) {
        return { error }
    }
};
export const setRequest = async (id, request) => {
    try {
        const data = await axiosInstance.put(`${mainURL}/api/Request/${id}`, {
            request
        });
        return { data };
    }
    catch (error) {
        return { error }
    }
};
export const createFlow = async (id, flow) => {
    try {
        const data = await axiosInstance.post(`${mainURL}/api/Request/${id}/flow`, {
            flow
        });
        return { data };
    }
    catch (error) {
        return { error }
    }
};

export const getFlow = async (id) => {
    try {
        const data = await axiosInstance.get(`${mainURL}/api/Request/${id}/flow`);
        return { data };
    }
    catch (error) {
        return { error }
    }
};
