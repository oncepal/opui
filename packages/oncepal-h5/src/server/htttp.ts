const proxyPrefix = process.env.NODE_ENV == 'production' ? '' : '/api';

import { useLocalStorage, useQuery } from '@oncepal/utils';

export type Params = { [key: string]: any };
export type Res<T> = Promise<{
  msg:string
  code:number
  data?:T | any
}>
const useErrorRes =(code:number)=> ({
  msg:'',
  code
})
const useResponse = async <T>(response: Response):Res<T> => {
  if (response.ok) {
    const res = await response.json();
    const { msg, code } = res;
    if (code == 99999) {
      localStorage.clear();
    }
    return res;
  } else {
    return useErrorRes(response.status);
  }
};

export const useHeaders = (headers?: HeadersInit): HeadersInit => {
  return {
    Authorization: useLocalStorage('accessToken'),
    // 'X-Requested-With': 'XMLHttpRequest',
    // 'Content-Type': 'application/json',
    'Current-Language': 'en-US',
    ...headers,
  };
};
export const useFetchInit = (init?: RequestInit): RequestInit => {
  return {
    mode: 'cors',
    credentials: 'include',
    ...init,
  };
};

export async function useFetch<T>(
  url: string,
  options?: { params?: Params; method: string; isQuery: boolean },
): Res<T> {
  const { params, method, isQuery } = options!;
  const query = isQuery ? useQuery(params!) : '';
  const fetchInit = {
    method,
    ...(!isQuery && { body: JSON.stringify(params) }),
  };
  const response = await fetch(proxyPrefix + url + query, {
    ...useFetchInit(fetchInit),
    headers: useHeaders(),
  });
  return useResponse<T>(response);
}

export async function usePost<T>(url: string, params: Params): Res<T> {
  return useFetch<T>(url, {
    method: 'Post',
    params: params,
    isQuery: false,
  });
}

export async function useGet<T>(url: string, params?: Params): Res<T> {
  return useFetch(url, {
    method: 'Get',
    params: params,
    isQuery: params ? true : false,
  });
}

export async function useDelete<T>(url: string, params?: Params): Res<T> {
  return useFetch(url, {
    method: 'Delete',
    params: params,
    isQuery: params ? true : false,
  });
}
export async function usePatch<T>(url: string, params: Params): Res<T> {
  return useFetch(url, {
    method: 'Patch',
    params: params,
    isQuery: false,
  });
}

export async function usePut<T>(url: string, params: Params): Res<T> {
  return useFetch(url, {
    method: 'Put',
    params: params,
    isQuery: false,
  });
}
