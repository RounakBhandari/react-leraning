import axios from "axios";
import { useEffect, useState } from "react";
import { Spinners } from "../Components/Spinner";

export const useApiHooks = (url, params) => {
  const [data, setData] = useState();
  const [load, setLoad] = useState(false);
  const [err, setErr] = useState();
  const getData = async () => {
    setLoad(true);
    try {
      const res = await axios.get(url, { params: params });
      setData(res.data);
      setLoad(false);
    } catch (err) {
      setLoad(false);
      setErr(err.message);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return { data, load, err };
};
