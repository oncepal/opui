/** @jsxImportSource @emotion/react */

import { useThemedCSS, useThemedProps, useCSS, useTheme } from '../../styles/hooks';

import { ComponentBaseProps, Themed, ThemedCSS } from '../props';

import { motion } from 'framer-motion';

type InputProps = ComponentBaseProps & {
    placeholder?:string
};


const InputPlaceholder = ({
  css,
  placeholder,
  ...props
}: InputProps) => {
  const theme = useTheme();

  const padding = '.5rem 1rem .5rem 1rem';

  const placeholderStyles = useCSS({
    position: 'absolute',
    left: 0,
    padding,
    transition: 'all .25s ease-out',
    textAlign: 'left',
    userSelect: 'none',
    cursor: 'text',
    pointerEvents: 'none',
    ...useThemedCSS(theme, css),
  });

  return (
    <motion.span {...props} css={placeholderStyles}>{placeholder}</motion.span>
  );
};

export default InputPlaceholder;
