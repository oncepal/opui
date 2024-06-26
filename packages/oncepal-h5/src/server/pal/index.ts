import { User } from '../user';

export type PaymentMethod = 0 | 1 | 2;

export type PalNeed = {
  /**
   * 发起人id
   */
  creatorUserId: string;
  /**
   * 描述
   */
  description: string;
  /**
   * id
   */
  id: string;
  /**
   * 图片
   */
  images?: string[];
  /**
   * 搭子类型
   */
  keywords: string;
  /**
   * 地点
   */
  location: string;
  /**
   * 搭子年龄
   */
  palAge: [number, number];
  /**
   * 搭子数量
   */
  palNumber: number;
  /**
   * 搭子性别
   */
  palSex: number;
  /**
   * 支付方式
   */
  paymentMethod: number;
  /**
   * 时间
   */
  time: string;
  pals: Pick<User, 'id' | 'name' | 'avatar'>[];
  [property: string]: any;
};

export function generatePalNeed(): PalNeed {
  return {
    creatorUserId: 'string',
    description: 'string',
    id: 'string',
    pals: [
      { id: '', name: '13', avatar: '124' },
      { id: '', name: '13', avatar: '124' },
      { id: '', name: '13', avatar: '124' },
      { id: '', name: '13', avatar: '124' },
      { id: '', name: '13', avatar: '124' },
      { id: '', name: '13', avatar: '124' },
      { id: '', name: '13', avatar: '124' },
      { id: '', name: '13', avatar: '124' },
      
    ],
    keywords: 'string',
    location: 'string',
    palAge: [18, 18],
    palNumber: 2,
    palSex: 2,
    paymentMethod: 1,
    time: '13',
  };
}
