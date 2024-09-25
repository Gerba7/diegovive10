'use client'

export function getLocalStorage(key, defaultValue) {

    const stickyValue = localStorage.getItem(key);

    if(stickyValue !== null && stickyValue !== undefined) {
        try {
            return JSON.parse(stickyValue);
        } catch(err) {
            console.error(`Error parsing JSON for key "${key}"`, err);
            return defaultValue
        }
    } else {
        return defaultValue
    }

}


export function setLocalStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}