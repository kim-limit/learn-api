import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000";

type bodyType = {
  text: string;
  userId: string;
};
const fetcher = async (method: string, url: string, ...rest) => {
  const res = await axios[method](url, ...rest);
  return res.data;
};

export default fetcher;
