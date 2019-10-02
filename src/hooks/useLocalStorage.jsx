import React, { useState, useEffect } from 'react';

const useLocalStorage = (key, initialValue) => {

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = (value) => {
        window.localStorage.setItem(key, JSON.stringify(value));
        setStoredValue(value)
    }

    return [storedValue, setValue];
}

const useDarkMode = () => {
    const [darkModeStatus, setDarkModeStatus] = useLocalStorage('darkKey');

    useEffect(() => {
        if(darkModeStatus===true) {
            document.body.classList.toggle('dark-mode');
        }
    }, [darkModeStatus])

    return [darkModeStatus, setDarkModeStatus];
}

export default useDarkMode;