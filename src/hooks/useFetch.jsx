import { useEffect, useState } from "react";

function useFetch({ url, method = "GET", headers = {} }) {
  const [dataResponse, setDataResponse] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const DEFAULT_HEADERS = {
    accept: "application/json",
    Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`,
  };

  useEffect(() => {
    setIsLoading(true);

    fetch(`${import.meta.env.VITE_MOVIE_API_KEY}/${url}`, {
      method: method,
      headers: {
        ...DEFAULT_HEADERS,
        ...headers,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        setDataResponse(data);
      })
      .finally(() => {
        setIsLoading(false);
			});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, method, JSON.stringify(headers)]);

  return { dataResponse, isLoading };
}

export default useFetch;
