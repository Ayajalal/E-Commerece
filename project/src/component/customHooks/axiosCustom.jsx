import axios from "axios";
import React from "react";

const AxiosInstance = (() => {
  return axios.create({ baseURL: "https://dummyjson.com" });
})();

export default AxiosInstance;
