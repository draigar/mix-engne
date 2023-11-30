// import {BASE_URL} from 'react-native-dotenv';
import { optionsAxios } from "@/types";
import { apiInstance } from "./axios";
import { BASE_URL } from "./api";

class Http {
  async get(path: string, options: optionsAxios = {
    isGeneric: false,
    headers: {}
  }) {
    const url = options.isGeneric ? path : BASE_URL + path;
    const headers: any = options.headers;
    try {
      const res = await apiInstance.get(url, {
        headers: {
          Authorization: `Bearer `,
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
    try {
      const res = await apiInstance.post(url, payload, {
        headers: {
          Authorization: options.Token
            ? `Bearer ${options.Token}`
            : `Bearer `,
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
    try {
      const res = await apiInstance.delete(url, {
        headers: {
          Authorization: options.Token
            ? `Bearer ${options.Token}`
            : `Bearer `,
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
