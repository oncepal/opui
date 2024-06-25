const proxyPrefix = process.env.NODE_ENV == "production" ? "" : "/api";

import { transformFetchParamsInGet } from "@oncepal/utils";
const generateResponse = async (response:Response)=>{

  if (response.ok) {
    
    const res = await response.json();
    const { msg, code } = res;
    if (code == 99999) {
      localStorage.clear();
    }
    return res;
  } else {

     return {}
  }
}
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
  return generateResponse(response)
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

  return generateResponse(response)
  
 
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
  return generateResponse(response)
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

  return generateResponse(response)
}