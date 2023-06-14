import axios from "axios";
import { envApp } from "../env";
import users from "./users";

const axiosInstance = axios.create({
    baseURL: envApp.API,
    timeout: 30000,
});

const logout = () => {
    users.clearToken();
}

axiosInstance.interceptors.request.use(
    (config) => {
        const { pathname } = window?.location;
        if (pathname?.includes("/admin")) {
            config.headers.Authorization = `Bearer ${users.getAdminToken()}`;
        } else {
            config.headers.Authorization = `Bearer ${users.getToken()}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        // if (error.response.status !== 404) {
        //   history.push("/not-found");
        // }
        if (error?.response?.status === 401) {
            // logout();
        }
        if (error?.response?.status === 103) {
            // history.push("/logout");
        }
        
        return error.response;
    }
)

export const sendGet = (
    url: string = ''
) => axiosInstance
    .get(url)
    .then((response) => response);

export const sendPost = (
    url: string = '',
    params: any,
    queryParams: any
) => axiosInstance
    .post(url, params, {params: queryParams, timeout: queryParams?.timeout})
    .then((response) => response);

export const sendPut = (
    url: string = '',
    params: any
) => axiosInstance
    .put(url, params)
    .then((response) => response);

export const sendPatch = (
    url: string = '',
    params: any
) => axiosInstance
    .patch(url, params)
    .then((response) => response);

export const sendDelete = (
    url: string = '',
    params: any
) => axiosInstance
    .delete(url, params)
    .then((response) => response);
