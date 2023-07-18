import { useEffect } from 'react';
import axios from "axios"

export const BASE_URL = import.meta.env.VITE_BACKEND_IP

export const baseURL = "http://45.156.185.225:5682/api/v1";
export const client = axios.create({
    baseURL
})

// Add Request Interceptor
client.interceptors.request.use(function (config) {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    return config;
});

// Add Response Interceptor
client.interceptors.response.use((response) => response, async (error) => {
    const originalRequest = error.config;
    if (error && (error.response?.status === 401)) {
        localStorage.removeItem('token');
        window.location.reload();
        return Promise.reject(error);
    }
    
    // specific error handling done elsewhere
    return Promise.reject(error);
});


export function useOutsideAlerter(ref, e) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                e()
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}