import { useEffect, useState } from "react";
export const useFetch = (url) => {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });

  const getFetch = async () => {
    const res = await fetch(url);
    const data = await res.json();

    setState({
      data: data,
      isLoading: false,
      error: null,
    });
   };

  useEffect(() => {
    getFetch();
  }, [url]);

  window.onload = getFetch;
  return { ...state };
};
