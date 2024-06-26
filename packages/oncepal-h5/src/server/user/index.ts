/**
 * User
 */
export type User= {
    age?: number;
    avatar: string;
    birthday?: string;
    height?: number;
    id: string;
    introduction: string;
    /**
     * 姓名
     */
    name: string;
    phoneNumber: string;
    sex: number;
    weight?: number;
    [property: string]: any;
}
export function generateUser(): User {
    return {
        id: '',
        introduction: 'xxxxxxxxxxxxxxxxxxxxtring',
        name: 'xym',
        phoneNumber: '13996092317',
        sex: 0,
        avatar:''
    };
  }
  