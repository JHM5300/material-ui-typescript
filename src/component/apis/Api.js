import axios from "axios";
import { getJsonValue } from "../common/CommonUtill";

const baseURL = "";

const api = axios.create({
  baseURL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json; charset=utf-8",
  },
  timeout: 5000,
});

api.interceptors.request.use(
  function(config) {
    // 요청 인터셉터

    config.headers.common["Access-Control-Allow-Origin"] = "*";
    config.headers.common.Accept = "application/json";
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    // 응답 인터셉터
    // console.log(response, "res response api");

    return response.data;
  },
  async (error) => {
    const { response, config } = error;
    console.log(config);
    return Promise.reject({
      error: getJsonValue(["data", "error"], response, "NO_ERROR_CODE"),
      error_description: getJsonValue(
        ["data", "error_description"],
        response,
        "알 수 없는 에러가 발생했습니다."
      ),
    });
  }
);

export default api;
