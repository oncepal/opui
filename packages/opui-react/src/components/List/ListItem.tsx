/** @jsxImportSource @emotion/react */

import { ComponentPropsWithoutRef, createContext, ReactNode, useContext, useEffect, useRef, useState } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme } from '../../styles/hooks';
import * as tokens from '../../styles/tokens'
import { ListContext } from './List';
import { motion } from 'framer-motion';
type ListItemProps = ComponentBaseProps & {
  content?: ReactNode;
};

const ListItem = ({ content, css, children, ...props }: ListItemProps) => {
  const theme = useTheme();

  const listContext = useContext(ListContext);
  const styles = useCSS({
    ...useThemedCSS(theme, css),
  });
  return (
    <motion.li
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      whileTap={{
        background: tokens.colors.grey,
      }}
      viewport={{ once: true }}
      css={styles}
      {...props}>
      {children}
    </motion.li>
  );
};

export default ListItem;
