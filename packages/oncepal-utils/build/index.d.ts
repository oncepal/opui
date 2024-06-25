declare const copy: (text: string) => void;
declare function useCSSLink(url: string): void;
declare function debounce(fn: Function, ms?: number): (this: any, ...args: any[]) => void;
declare function throttle(fn: Function, wait?: number): (this: any) => void;
declare function isBrowerTabInView(): boolean;
declare const clamp: (target: number, min: number, max: number) => number;
declare const isWX: () => boolean;
declare const isAndroid: () => boolean;
declare const isIos: () => boolean;
declare const callPhoneNumber: (phoneNumber: string) => void;
declare const linkToRoute: (path: string) => void;
declare const transformFetchParamsInGet: (params: {
    [key: string]: any;
}) => string;
declare const useUrlParams: (name: string) => string;
declare const getUUID: () => string;
declare const humpToUnderline: (str: string) => string;
declare const underlineToHump: (str: string) => string;
declare function utf8ToB64(str: string): string;
declare function b64ToUtf8(str: string): string;
declare function isPC(): boolean;
declare function isBrowerDarkMode(): boolean;
declare function isObject(item: any): any;
declare function deepMerge(target: any, source: any): any;
declare function randomString(len?: number): string;
declare function sendMessage(phone: string | number, content?: string): void;
export { sendMessage, isBrowerDarkMode, isObject, debounce, useCSSLink, randomString, utf8ToB64, b64ToUtf8, underlineToHump, humpToUnderline, useUrlParams, transformFetchParamsInGet, callPhoneNumber, isPC, isWX, isAndroid, isIos, isBrowerTabInView, throttle, copy, clamp, getUUID, linkToRoute, deepMerge, };
