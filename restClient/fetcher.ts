import axios from "axios";
import { msgType } from "./types";

axios.defaults.baseURL = "http://localhost:8000";

type fetcherType = {
  status: number;
  // topic: string;
  message: string;
  data?: msgType[];
};

// const fetcher = async (
//   method: string,
//   url: string,
//   ...rest: { [key: string]: any }[]
// ) => {
//   const res = await axios[method]<fetcherType>(url, ...rest);
//   return res.data;
// };

const fetcher = (
  method: string,
  url: string,
  ...rest: { [key: string]: any }[]
) => {
  return axios[method](url, ...rest).then((res) => res.data);
};

export default fetcher;
