const proxyPrefix = process.env.NODE_ENV == "production" ? "" : "/api";

import { transformFetchParamsInGet } from "@oncepal/utils";

export async function fetchPost<T>(url: string, params?: any): Promise<T> {
  const response = await fetch(proxyPrefix + url, {
    method: "POST",
    mode: "cors",
    credentials: "include",
    secure: false,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
      "Current-Language": "en-US",
    },
    body: JSON.stringify(params),
  } as RequestInit & { secure: boolean });
  // 下面的取值每个项目有自己的返回值
  const res = await response.json();
  const { msg, code } = res;
  if (response.ok) {
    if (code == 99999) {
      localStorage.clear();
    }
    return res;
  } else {
    const error = new Error(msg);
    return Promise.reject(error);
  }
}

export async function fetchGet<T>(url: string, query?: any): Promise<T> {
  const computedParams = query ? transformFetchParamsInGet(query) : "";
  const response = await fetch(proxyPrefix + url + computedParams, {
    method: "GET",
    mode: "cors",
    credentials: "include",
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  });

  // 下面的取值每个项目有自己的返回值
  const res = await response.json();
  const { msg, code } = res;
  if (response.ok) {
    if (code == 99999) {
      localStorage.clear();
    }
    return res;
  } else {
    const error = new Error(msg);
    return Promise.reject(error);
  }
}
export async function fetchDelete<T>(url: string, query?: any): Promise<T> {
  const computedParams = query ? transformFetchParamsInGet(query) : "";
  const response = await fetch(proxyPrefix + url + computedParams, {
    method: "Delete",
    mode: "cors",
    credentials: "include",
    secure: false,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  } as RequestInit & { secure: boolean });

  // 下面的取值每个项目有自己的返回值
  const res = await response.json();
  const { msg, code } = res;
  if (response.ok) {
    if (code == 99999) {
      localStorage.clear();
    }
    return res;
  } else {
    const error = new Error(msg);
    return Promise.reject(error);
  }
}
export async function fetchPatch<T>(url: string, params?: any): Promise<T> {
  const computedParams = params ? transformFetchParamsInGet(params) : "";
  const response = await fetch(proxyPrefix + url + computedParams, {
    method: "Patch",
    mode: "cors",
    credentials: "include",
    secure: false,
    headers: {
      "X-Requested-With": "XMLHttpRequest",
    },
  } as RequestInit & { secure: boolean });

  // 下面的取值每个项目有自己的返回值
  const res = await response.json();
  const { msg, code } = res;
  if (response.ok) {
    if (code == 99999) {
      localStorage.clear();
    }
    return res;
  } else {
    const error = new Error(msg);
    return Promise.reject(error);
  }
}