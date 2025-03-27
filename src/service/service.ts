import axios, { AxiosRequestConfig, Method } from "axios";
import { RequestParams } from "../types";

interface MyData {
  USER_QUERY: string,
  SQL_QUERY: string
  intended_api: string,
  base64: string,
  pdf_url: string[]
}
/* Call Request Method to fetch / Post Data  */
const request = async (requestParams: RequestParams, signal?: AbortSignal) => {
  const result = {
    data: null,
    error: null,
  } as {
    data: MyData | null;
    error: string | null;
  };

  /* Get Access Token from Local Storage */
  const token = localStorage.getItem('jwtToken');
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  /* Axios Request Config */
  const axiosReqConfig: AxiosRequestConfig = {
    method: requestParams.method as Method,
    url: requestParams.url,
    data: requestParams.requestBody,
    responseType: requestParams.responseType
      ? requestParams.responseType
      : undefined,
    signal, // Add the signal to the Axios request
  };

  const response = await axios(axiosReqConfig);
  result.data = response.data;
  return result;
};
/* Default Export Request Obj */
export default request;
