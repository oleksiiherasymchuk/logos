import { useEffect, useState } from "react";

const useFetch = (endpoint, count, setData) => {

  useEffect(() => {
    count === 5 && fetchData();
  }, [endpoint, count]);

  const fetchData = async () => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/${endpoint}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      console.log(err);
    } 
  };

  // return { data };
};

export default useFetch;
