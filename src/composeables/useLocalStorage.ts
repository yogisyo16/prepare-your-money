import {ref, watch} from 'vue';

export function useLocalStorage<T>(key: string, defaultValue: T) {
    
    const data = ref<T>(defaultValue);

    const storedValue = localStorage.getItem(key);

    if(storedValue) {
        try {
            data.value = JSON.parse(storedValue);
        } catch(e) {
            console.error(`Error parsing JSON from localStorage key "${key}":`, e);
        }
    }

    watch(
        data,
        (newValue) => {
        localStorage.setItem(key, JSON.stringify(newValue));
        },
        { deep: true }
    );

    return data;
}