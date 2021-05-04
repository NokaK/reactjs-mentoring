import { useEffect } from "react";
const useFetch = (data) => {
  useEffect(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
        reject("error");
      }, 1000);
    });
  }, [data]);
  return data;
};

export default useFetch;
