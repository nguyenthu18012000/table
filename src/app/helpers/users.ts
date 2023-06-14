import storage from "./storage";

export const USER_TOKEN = "token";
export const USER_REFRESH_TOKEN = "refreshToken";
export const ADMIN_TOKEN = "adminToken";
export const ADMIN_REFRESH_TOKEN = "adminRefreshToken";

const setToken = (value: string) => {
    storage.setItem(USER_TOKEN, value);
}

const getToken = () => {
    return storage.getItem(USER_TOKEN);
}

const deleteToken = () => {
    storage.deleteItem(USER_TOKEN);
}

const setRefreshToken = (value: string) => {
    storage.setItem(USER_REFRESH_TOKEN, value);
}

const getRefreshToken = () => {
    return storage.getItem(USER_REFRESH_TOKEN);
}

const deleteRefreshToken = () => {
    storage.deleteItem(USER_REFRESH_TOKEN);
}

const setAdminToken = (value: string) => {
    storage.setItem(ADMIN_TOKEN, value);
}

const getAdminToken = () => {
    return storage.getItem(ADMIN_TOKEN);
}

const deleteAdminToken = () => {
    storage.deleteItem(ADMIN_TOKEN);
}

const setAdminRefreshToken = (value: string) => {
    storage.setItem(ADMIN_REFRESH_TOKEN, value);
}

const getAdminRefreshToken = () => {
    return storage.getItem(ADMIN_REFRESH_TOKEN);
}

const deleteAdminRefreshToken = () => {
    storage.deleteItem(ADMIN_REFRESH_TOKEN);
}

const clearToken = () => {
    storage.deleteItem(USER_TOKEN);
    storage.deleteItem(USER_REFRESH_TOKEN);
    storage.deleteItem(ADMIN_TOKEN);
    storage.deleteItem(ADMIN_REFRESH_TOKEN);
}

const users = {
    setToken,
    getToken,
    deleteToken,
    setRefreshToken,
    getRefreshToken,
    deleteRefreshToken,
    setAdminToken,
    getAdminToken,
    deleteAdminToken,
    setAdminRefreshToken,
    getAdminRefreshToken,
    deleteAdminRefreshToken,
    clearToken
};

export default users;
