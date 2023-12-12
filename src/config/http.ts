// import {BASE_URL} from 'react-native-dotenv';
import { optionsAxios } from "@/types";
import { apiInstance } from "./axios";
import { BASE_URL } from "./api";
import Cookies from "js-cookie";

class Http {
  async get(path: string, options: optionsAxios = {
    isGeneric: false,
    headers: {}
  }) {
    const url = options.isGeneric ? path : BASE_URL + path;
    const headers: any = options.headers;
    let authData: any = Cookies.get('Auth')
    authData = authData && JSON.parse(authData ?? '');
    const bearer = authData?.auth?.access_token;
    try {
      const res = await apiInstance.get(url, {
        headers: {
          Authorization: `Bearer ${bearer}`,
          headers,
        },
      });
      // console.log(res);
      return new Promise((resolve) => {
        resolve(res);
      });
    } catch (e) {
      // console.log("get error", e);
      return Promise.reject(e);
    }
  }
  async post(path: string, payload?: any, options: any = {}) {
    const url = options.isGeneric ? path : BASE_URL + path;
    let authData: any = Cookies.get('Auth')
    authData = authData && JSON.parse(authData ?? '');
    const bearer = authData?.auth?.access_token;
    try {
      const res = await apiInstance.post(url, payload, {
        headers: {
          Authorization: options.Token
            ? `Bearer ${options.Token}`
            : `Bearer ${bearer}`,
          options,
        },
      });
      return new Promise((resolve) => {
        resolve(res);
      });
    } catch (e) {
      // console.log('post error', e.response);
      return Promise.reject(e);
    }
  }
  async delete(path: string, options: any = {}) {
    const url = options.isGeneric ? path : BASE_URL + path;
    let authData: any = Cookies.get('Auth')
    authData = authData && JSON.parse(authData ?? '');
    const bearer = authData?.auth?.access_token;
    try {
      const res = await apiInstance.delete(url, {
        headers: {
          Authorization: options.Token
            ? `Bearer ${options.Token}`
            : `Bearer ${bearer}`,
          options,
        },
      })
      return new Promise((resolve) => {
        resolve(res);
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }
  // async fetchGet(path: string, options: optionsFetch = {
  //   isGeneric: false,
  //   headers: {},
  //   revalidate: 0,
  // }) {
  //   const url = options.isGeneric ? path : BASE_URL + path;
  //   const headers = options.headers;
  //   const res = await fetch(url, {
  //     next: {revalidate: options.revalidate},
  //     headers: headers
  //   });
  //   return res.json()
  // }
}

export const http = new Http();
