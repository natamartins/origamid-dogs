import React, { useCallback, useState } from "react";
import { Await } from "react-router-dom";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const request = useCallback(async (url, options) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url, options)
      json = await response.json()
      if (response.ok === false) throw new Error('Nenhum dado a se cadastrar!')
    } catch (err) {
      json = null
    } finally {
      setLoading(false);
      setLoading(false)
      return { response, json }
    }

  }, []);

  return {
    data,
    loading,
    error,
    request
  }
};

export default useFetch;
