/** @jsxImportSource @emotion/react */

import { useMargin, usePadding, useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { ComponentBaseProps, Margin, Padding } from '../props';

type RowProps = Margin &
  Padding &
  ComponentBaseProps & {
    absolute?: boolean;
   
  };

/**
 * Component provides a way to represent a row in the grid system. It is used when we want to display data in the form of rows..
 * ```js
 * <Sidebar>
 *  <Col>left</Col>
 *  <Col>right</Col>
 * </Sidebar>
 * ```
 * @param vertical vertical flex direction
 * @param wrapped flex wrap
 * @param fullHeight full height or not
 * @param align flex align items
 * @param justify flex justify content
 * @param gap children's gap
 */
const Sidebar = ({ children, absolute,css, ...props }: RowProps) => {
  const theme = useTheme();
  const styles = useCSS({
    position:absolute?'absolute':'static',
    display: 'flex',
    width: '100%',
    ...useMargin(props),
    ...usePadding(props),
    ...useThemedCSS(theme, css),
  });
  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default Sidebar;
