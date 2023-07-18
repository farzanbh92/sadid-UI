import axios from "axios"
import { axiosInstance, mainURL } from "./utility";

export const loginMobile = async (userCredential) => {
    try {
        const data = await axios.post(`${mainURL}/api/Auth/mobile`, {
            mobile: userCredential.mobile
        });
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        return data;
    }
    catch (error) {
        return { error }
    }
};
export const verifyCode = async (userCredential) => {
    try {
        const data = await axios.post(`${mainURL}/api/Auth/verify`, {
            code: userCredential.code,
            mobile: userCredential.mobile,
        });
        localStorage.setItem("access_token", data.access);
        localStorage.setItem("refresh_token", data.refresh);
        return data;
    }
    catch (error) {
        return { error }
    }
};

export const account = async () => {
    try {
        const data = await axiosInstance.get(`${mainURL}/api/Auth`);

        return { data };
    }
    catch (error) {
        return { error }
    }
};