import axios from "axios";

const AxiosInstance = (() => {
  return axios.create({ baseURL: "https://dummyjson.com" });
})();

export default AxiosInstance;
