/** @jsxImportSource @emotion/react */

import { MouseEvent } from 'react';
import { TagProps } from './tag.props';
import { getStyles } from './tag.css';

/**
 * Tags appear in form fields
 *
 * ```js
 * <Tag color="#eee">greet!</Tag>
 * ```
 * @param outlined outlined style
 * @param color tag color
 * @param hollow weather the background hollow out
 * @param radius tag border radius size
 */
const Tag = ({ outlined = false, show = true,rounded, radius, color, css, children, onClick, ...props }: TagProps) => {
  const styles = getStyles({ outlined, show, radius, color, css,rounded});
  const handleClickTag = (e: MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation();
    onClick?.();
  };

  return (
    <span onClick={handleClickTag} css={styles} {...props}>
      {children}
    </span>
  );
};

export default Tag;
