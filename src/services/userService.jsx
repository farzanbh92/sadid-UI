import { axiosInstance, mainURL } from "./utility";

export const getUsers = async () => {
    try {
        const data = await axiosInstance.get(`${mainURL}/api/User`);
        return { data };
    }
    catch (error) {
        return { error }
    }
};
export const getUser = async (id) => {
    try {
        const data = await axiosInstance.get(`${mainURL}/api/User/${id}`);
        return { data };
    }
    catch (error) {
        return { error }
    }
};