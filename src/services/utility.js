import axios from "axios";

export const mainURL = `${'https://localhost:7065'}`;

const refreshTokenEndpoint = mainURL + "/refresh";

export const axiosInstance = axios.create({
    mainURL,
});

// Add Request Interceptor
axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
});

// Axios interceptor to handle expired tokens
axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // const originalRequest = error.config;

        console.info(error)
        if (error.response.status === 401 || error.response.status === 404 ) {
            localStorage.clear();
            window.location.reload();
        }
        // if (error.response.status === 401 && !originalRequest._retry) {
        //     originalRequest._retry = true;
        //     // return refreshAccessToken().then(() => {
        //     //     originalRequest.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
        //     //     return axiosInstance(originalRequest);
        //     // });
        // }

        return Promise.reject(error);
    }
);

// Function to refresh the access token using the refresh token
export async function refreshAccessToken() {
    try {
        if (localStorage.getItem('token') === null) {
            return
        }
        const { data } = await axios.post(refreshTokenEndpoint, {
            refresh: localStorage.getItem("refresh_token"),
        });
        return { data };
    } catch (error) {
        throw { error };
    }
}
