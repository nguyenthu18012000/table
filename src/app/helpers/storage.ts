const setItem = (key: string, value: string) => {
    window.localStorage.setItem(key, value);
}

const getItem = (key: string) => {
    const value = window.localStorage.getItem(key);
    return value === null ? "" : value;
}

const deleteItem = (key: string) => {
    window.localStorage.removeItem(key);
}

const storage = {
    setItem,
    getItem,
    deleteItem
}

export default storage;
