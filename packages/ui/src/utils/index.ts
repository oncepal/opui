const copy = (text: string) => {
  const transfer = document.createElement('input');
  document.body.appendChild(transfer);
  transfer.value = text;
  transfer.select();
  if (document.execCommand('copy')) {
    document.execCommand('copy');
  }
  document.body.removeChild(transfer);
};
function addCSSLink(url: string) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.getElementsByTagName('head')[0].appendChild(link);
}
function debounce(fn: Function, ms = 300) {
  let timeoutId: ReturnType<typeof setTimeout>;
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
}
function throttle(fn: Function, wait = 300) {
  let inThrottle: boolean, lastFn: ReturnType<typeof setTimeout>, lastTime: number;
  return function (this: any) {
    const context = this,
      args = arguments;
    if (!inThrottle) {
      fn.apply(context, args);
      lastTime = Date.now();
      inThrottle = true;
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
function isBrowerTabInView() {
  return !document.hidden;
}
const clamp = (target: number, min: number, max: number) => {
  if (target < min) {
    return min;
  } else if (target > max) {
    return max;
  }
  return target;
};
const isWX = () => {
  const wx = navigator.userAgent.toLowerCase();
  if ((wx as any).match(/MicroMessenger/i) == 'micromessenger') {
    return true;
  }
  return false;
};
const isAndroid = () => {
  const android = navigator.userAgent;
  if (android.indexOf('Android') > -1 || android.indexOf('Adr') > -1) {
    return true;
  }
  return false;
};
const isIos = () => {
  const ios = navigator.userAgent;
  if (!!ios.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
    return true;
  }
  return false;
};

const callPhoneNumber = (phoneNumber: string) => {
  window.location.href = 'tel:' + phoneNumber;
};

const transformFetchParamsInGet = (params: { [key: string]: any }) => {
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

const getUUID = () => {
  const url = URL.createObjectURL(new Blob([]));
  // const uuid = url.split("/").pop();
  const uuid = url.substring(url.lastIndexOf('/') + 1);
  URL.revokeObjectURL(url);
  return uuid;
};

const humpToUnderline = (str: string) => {
  return str.replace(/([A-Z])/g, '_$1').toLowerCase();
};
const underlineToHump = (str: string) => {
  const a = str.split('_');
  let result = a[0];
  for (let i = 1; i < a.length; i++) {
    result = result + a[i].slice(0, 1).toUpperCase() + a[i].slice(1);
  }
  return result;
};

function utf8ToB64(str: string) {
  return window.btoa(unescape(encodeURIComponent(str)));
}

function b64ToUtf8(str: string) {
  return decodeURIComponent(escape(window.atob(str)));
}

function isPC() {
  return !isAndroid() && !isWX() && !isIos();
}
function isBrowerDarkMode() {
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function isObject(item: any) {
  return item && typeof item === 'object' && item.constructor === Object;
}

function deepMerge(target: any, source: any) {
  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object) Object.assign(source[key], deepMerge(target[key], source[key]));
  }

  // Join `target` and modified `source`
  Object.assign(target || {}, source);
  return target;
}

function dec2hex(dec: { toString: (arg0: number) => string }) {
  return ('0' + dec.toString(16)).substring(-2);
}

function randomString(len = 50) {
  const arr = new Uint8Array(len / 2);
  window.crypto.getRandomValues(arr);
  return Array.from(arr, dec2hex).join('');
}
function sendMessage(phone: string | number, content = '') {
  window.location.href = 'tel:' + phone;
}
export {
  sendMessage,
  isBrowerDarkMode,
  isObject,
  debounce,
  addCSSLink,
  randomString,
  utf8ToB64,
  b64ToUtf8,
  underlineToHump,
  humpToUnderline,
  useUrlParams,
  transformFetchParamsInGet,
  callPhoneNumber,
  isPC,
  isWX,
  isAndroid,
  isIos,
  isBrowerTabInView,
  throttle,
  copy,
  clamp,
  getUUID,
  deepMerge,
};
