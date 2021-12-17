import { useState } from 'react';

const useLocalStorage = (key, initialValue) => {
    const [defaultValue, setDefaultValue] = useState(() => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : null;
        }
        catch {
            return initialValue
        }
    });

    const setValue = value => {
        setDefaultValue(value);
        localStorage.setItem(key, JSON.stringify(value));
    }

    return [defaultValue, setValue]
}

export default useLocalStorage;