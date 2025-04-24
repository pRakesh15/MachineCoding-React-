import { useEffect, useState } from "react";

const useDebounceValue = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  //basically nothing just return the value after some time like after the last event 
  //we just receive the data.

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);
    //have to clear the time out..
  return ()=>clearTimeout(timer);
  }, [value, delay]);

  return debounceValue;
};

export default useDebounceValue;
