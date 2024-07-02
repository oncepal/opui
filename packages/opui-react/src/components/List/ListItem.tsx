/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef, createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme } from '../../styles/css';

import { ListContext } from './List';
import { motion } from 'framer-motion';
type ListItemProps = ComponentBaseProps & {
  content?: ReactNode;
};

const ListItem = ({ content, css, children, ...props }: ListItemProps) => {
  const theme = useTheme();

  const listContext = useContext(ListContext);
  const styles = useCSS({
    // ':hover': {
    //   background: theme.colors.grey,
    // },
    ...useThemedCSS(theme, css),
  });
  return (
    <motion.li initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }} css={styles} {...props}>
      {children}
    </motion.li>
  );
};


export default ListItem;
