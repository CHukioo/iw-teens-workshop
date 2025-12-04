import Cookies from "universal-cookie";
import axios from "axios";
import { toast } from "react-toastify";

const cookies = new Cookies();

export const teensWorkshopAxiosAuthInstance = axios.create({
  baseURL: "http://ec8gcco44wc0o88o088oo8og.157.173.100.221.sslip.io/",
  headers: {
    "Content-Type": "application/json",
  },
});

teensWorkshopAxiosAuthInstance.interceptors.request.use(
  (requestConfig) => {
    const newRequestConfig = { ...requestConfig };

    const access_token = cookies.get("token");

    newRequestConfig.headers = {
      ...requestConfig.headers,
      Authorization: `${access_token}`,
    };

    return newRequestConfig;
  },
  (error) => Promise.reject(error)
);

teensWorkshopAxiosAuthInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (err) => {
    const errorMessage =
      err?.response?.data?.message || "Something went wrong :)";

    toast.error(errorMessage);

    return Promise.reject(err);
  }
);

export const httpAuth = teensWorkshopAxiosAuthInstance;
export default httpAuth;
