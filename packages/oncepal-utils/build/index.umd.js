(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.utils = {}));
})(this, (function (exports) { 'use strict';

  const copy = (text) => {
      const transfer = document.createElement('input');
      document.body.appendChild(transfer);
      transfer.value = text;
      transfer.select();
      if (document.execCommand('copy')) {
          document.execCommand('copy');
      }
      document.body.removeChild(transfer);
  };
  function useCSSLink(url) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.type = 'text/css';
      link.href = url;
      document.getElementsByTagName('head')[0].appendChild(link);
  }
  function debounce(fn, ms = 300) {
      let timeoutId;
      return function (...args) {
          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => fn.apply(this, args), ms);
      };
  }
  function throttle(fn, wait = 300) {
      let inThrottle, lastFn, lastTime;
      return function () {
          const context = this, args = arguments;
          if (!inThrottle) {
              fn.apply(context, args);
              lastTime = Date.now();
              inThrottle = true;
          }
          else {
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
  const clamp = (target, min, max) => {
      if (target < min) {
          return min;
      }
      else if (target > max) {
          return max;
      }
      return target;
  };
  const isWX = () => {
      const wx = navigator.userAgent.toLowerCase();
      if (wx.match(/MicroMessenger/i) == 'micromessenger') {
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
  const callPhoneNumber = (phoneNumber) => {
      window.location.href = 'tel:' + phoneNumber;
  };
  const linkToRoute = (path) => {
      window.location.href = window.location.origin + path;
  };
  const transformFetchParamsInGet = (params) => {
      let result = '?';
      for (const key in params) {
          if ((params.prototype || params).hasOwnProperty.call(params, key)) {
              result =
                  result + `${key}=${params[key]}` + (Object.keys(params)[Object.keys(params).length - 1] == key ? '' : '&');
          }
      }
      return result;
  };
  const useUrlParams = (name) => {
      const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
      const r = window.location.search.substr(1).match(reg);
      if (r != null)
          return unescape(r[2]);
      return '';
  };
  const getUUID = () => {
      const url = URL.createObjectURL(new Blob([]));
      // const uuid = url.split("/").pop();
      const uuid = url.substring(url.lastIndexOf('/') + 1);
      URL.revokeObjectURL(url);
      return uuid;
  };
  const humpToUnderline = (str) => {
      return str.replace(/([A-Z])/g, '_$1').toLowerCase();
  };
  const underlineToHump = (str) => {
      const a = str.split('_');
      let result = a[0];
      for (let i = 1; i < a.length; i++) {
          result = result + a[i].slice(0, 1).toUpperCase() + a[i].slice(1);
      }
      return result;
  };
  function utf8ToB64(str) {
      return window.btoa(unescape(encodeURIComponent(str)));
  }
  function b64ToUtf8(str) {
      return decodeURIComponent(escape(window.atob(str)));
  }
  function isPC() {
      return !isAndroid() && !isWX() && !isIos();
  }
  function isBrowerDarkMode() {
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  }
  function isObject(item) {
      return item && typeof item === 'object' && item.constructor === Object;
  }
  function deepMerge(target, source) {
      for (const key of Object.keys(source)) {
          if (source[key] instanceof Object)
              Object.assign(source[key], deepMerge(target[key], source[key]));
      }
      // Join `target` and modified `source`
      Object.assign(target || {}, source);
      return target;
  }
  function dec2hex(dec) {
      return ('0' + dec.toString(16)).substring(-2);
  }
  function randomString(len = 50) {
      const arr = new Uint8Array(len / 2);
      window.crypto.getRandomValues(arr);
      return Array.from(arr, dec2hex).join('');
  }
  function sendMessage(phone, content = '') {
      window.location.href = 'tel:' + phone;
  }

  exports.b64ToUtf8 = b64ToUtf8;
  exports.callPhoneNumber = callPhoneNumber;
  exports.clamp = clamp;
  exports.copy = copy;
  exports.debounce = debounce;
  exports.deepMerge = deepMerge;
  exports.getUUID = getUUID;
  exports.humpToUnderline = humpToUnderline;
  exports.isAndroid = isAndroid;
  exports.isBrowerDarkMode = isBrowerDarkMode;
  exports.isBrowerTabInView = isBrowerTabInView;
  exports.isIos = isIos;
  exports.isObject = isObject;
  exports.isPC = isPC;
  exports.isWX = isWX;
  exports.linkToRoute = linkToRoute;
  exports.randomString = randomString;
  exports.sendMessage = sendMessage;
  exports.throttle = throttle;
  exports.transformFetchParamsInGet = transformFetchParamsInGet;
  exports.underlineToHump = underlineToHump;
  exports.useCSSLink = useCSSLink;
  exports.useUrlParams = useUrlParams;
  exports.utf8ToB64 = utf8ToB64;

}));
//# sourceMappingURL=index.umd.js.map
