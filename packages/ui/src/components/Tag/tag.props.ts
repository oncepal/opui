import { ComponentBaseProps, Themed } from '../props';
import { ComponentPropsWithoutRef } from 'react';

export type TagProps = ComponentBaseProps &
  ComponentPropsWithoutRef<'span'> & {
    outlined?: boolean;
    color?: Themed<string>;
    radius?: Themed<string>;
    hollow?: boolean;
    show?: boolean;
    rounded?:boolean
  };
