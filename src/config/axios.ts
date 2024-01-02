import axios, { AxiosError } from "axios";

import { ApiError } from "./errors";
import Cookies from "js-cookie";
// import { authStore } from "web/store";
import { NextPageContext } from "next";
import { debugAPIError, debugAPIRequest, debugAPIResponse } from "@/helpers";
import { errorResponse } from "@/types";

export const nextPr = (ctx: NextPageContext) => ctx.res

export const apiInstance = axios.create({
  // .. where we make our configurations
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate, public, max-age=0",
    "Access-Control-Allow-Origin": "*",
    Pragma: "no-cache",
    Expires: "0",
  },
});

apiInstance.interceptors.request.use(
  (request) => {
    debugAPIRequest(request);
    return request;
  },
  (error) => {
    // console.log(error);
    return Promise.reject(error);
  }
);

apiInstance.interceptors.response.use(
  (response) => {
    // console.log(response);
    // Edit response config
    debugAPIResponse(response);
    return response;
  },
  (error: AxiosError<errorResponse>) => {
    debugAPIError(error);
    console.log(error.code);
    console.log(error.message);
    console.log(error.name);
    if (error.response?.status === 401) {
      Cookies.remove("Auth");
      Cookies.set("loggedIn", "false")
      // authStore.clearStoredData();
      if (typeof window === 'undefined') {
        return error;
      } else {
        window.location.href="/auth/login"
      }
    }
    throw error;
  }
);
