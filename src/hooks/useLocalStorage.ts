/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react';

function useLocalStorage<T>(key: string, fallbackValue: T) {
  const [value, setValue] = useState(fallbackValue);
  const stored = localStorage.getItem(key);
  useEffect(() => {
    setValue(stored ? JSON.parse(stored) : fallbackValue);
  }, [JSON.stringify(fallbackValue), JSON.stringify(stored), key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}

export default useLocalStorage;
