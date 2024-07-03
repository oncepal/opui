import { Params, usePost } from "../htttp";

export interface UserInfo {
  age: number;
  avatar: string;
  birthday: string;
  createdAt: string;
  height: number;
  id: string;
  introduction: string;
  name: string;
  phoneNumber: string;
  roles: string[];
  sex: number;
  updatedAt: string;
  weight: number;
  [property: string]: any;
}

export type LoginResponse = {
  code: number;
  data: {
    accessToken: string;
    refreshToken: string;
    userInfo: UserInfo;
  };
  message: string;
};



export const login = async (params: Params)=>{
    const result = await usePost<LoginResponse>('/auth/login',{})
    return result
  }