const useCopy = (text: string) => {
  const transfer = document.createElement('input');
  document.body.appendChild(transfer);
  transfer.value = text;
  transfer.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
  }
  document.body.removeChild(transfer);
};
function useCSSLink(url: string) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
}
function useDebounceFn(fn: Function, ms = 300) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}
function useThrottleFn(fn: Function, wait = 300) {
  let inuseThrottleFn: boolean, lastFn: ReturnType<typeof setTimeout>, lastTime: number;
  return function (this: any) {
    const context = this,
      args = arguments;
    if (!inuseThrottleFn) {
      fn.apply(context, args);
      lastTime = Date.now();
      inuseThrottleFn = true;
    } else {
      clearTimeout(lastFn);
      lastFn = setTimeout(() => {
        if (Date.now() - lastTime >= wait) {
          fn.apply(context, args);
          lastTime = Date.now();
        }
      }, Math.max(wait - (Date.now() - lastTime), 0));
    }
  };
}
function useIsBrowerTabInView() {
  return !document.hidden;
}
const useClamp = (target: number, min: number, max: number) => {
  if (target < min) {
    return min;
  } else if (target > max) {
    return max;
  }
  return target;
};
const useIsWx = () => {
  const wx = navigator.userAgent.toLowerCase();
  if ((wx as any).match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  }
  return false;
};
const useIsAndroid = () => {
  const android = navigator.userAgent;
  if (android.indexOf('Android') > -1 || android.indexOf('Adr') > -1) {
    return true;
  }
  return false;
};
const useIsIOS = () => {
  const ios = navigator.userAgent;
  if (!!ios.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    return true;
  }
  return false;
};

const useHrefTo = (path: string) => {
  window.location.href = window.location.origin + path;
};
const useQuery = (params: { [key: string]: any }) => {
  let result = '?';
  for (const key in params) {
    if ((params.prototype || params).hasOwnProperty.call(params, key)) {
      result =
        result + `${key}=${params[key]}` + (Object.keys(params)[Object.keys(params).length - 1] == key ? '' : '&');
    }
  }
  return result;
};
const useUrlParams = (name: string) => {
  const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
  const r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return '';
};

const useUUID = () => {
  const url = URL.createObjectURL(new Blob([]));
  // const uuid = url.split("/").pop();
  const uuid = url.substring(url.lastIndexOf('/') + 1);
  URL.revokeObjectURL(url);
  return uuid;
};

const useUnderline = (str: string) => {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
};
const useHump = (str: string) => {
  const a = str.split('_');
  let result = a[0];
  for (let i = 1; i < a.length; i++) {
    result = result + a[i].slice(0, 1).toUpperCase() + a[i].slice(1);
  }
  return result;
};
function useLocalStorage(key: string, value?: string) {
  if (!value) return localStorage.getItem(key)||'';
  else localStorage.setItem(key, value); 
  return ''
}
function useBtoa64(utf8: string) {
  return window.btoa(unescape(encodeURIComponent(utf8)));
}

function useUtf8(btoa64: string) {
  return decodeURIComponent(escape(window.atob(btoa64)));
}

function useIsPC() {
  return !useIsAndroid() && !useIsWx() && !useIsIOS();
}
function useIsBrowerDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function useIsObject(item: any) {
  return item && typeof item === 'object' && item.constructor === Object;
}

function useMerge(target: any, source: any) {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) Object.assign(source[key], useMerge(target[key], source[key]));
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source);
  return target;
}

function useDecTohex(dec: { toString: (arg0: number) => string }) {
  return ('0' + dec.toString(16)).substring(-2);
}

function useRandomString(len = 50) {
  const arr = new Uint8Array(len / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, useDecTohex).join('');
}
function usePhoneCall(phone: string) {
  window.location.href = 'tel:' + phone;
}
export {
  usePhoneCall,
  useIsBrowerDarkMode,
  useIsObject,
  useDebounceFn,
  useCSSLink,
  useRandomString,
  useBtoa64,
  useUtf8,
  useHump,
  useUnderline,
  useUrlParams,
  useQuery,
  useIsPC,
  useIsWx,useLocalStorage,
  useIsAndroid,
  useIsIOS,
  useIsBrowerTabInView,
  useThrottleFn,
  useCopy,
  useClamp,
  useUUID,
  useHrefTo,
  useMerge,
};
