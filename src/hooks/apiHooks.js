import axios from "axios";
import { useEffect, useState } from "react";

export const useApiHooks = (url, params) => {
  const [data, setData] = useState();

  const getData = async () => {
    try {
      const res = await axios.get(url, { params: params });

      setData(res.data);
    } catch (err) {}
  };
  useEffect(() => {
    getData();
  }, []);
  return data;
};
