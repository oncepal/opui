/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Margin, Padding } from '../props';
import { usePadding, useMargin, useCSS, useTheme, useThemedCSS } from '../../styles/css';

type ColProps = ComponentBaseProps & {
  alignSelf?: 'start' | 'center' | 'end' | 'baseline' | 'stretch' | 'normal';
  flex?: number | string;
  noFlex?: boolean;
  rightFloat?: boolean;
  leftText?: boolean;
  rightText?: boolean;
  w?:string
  h?:string
} & Margin &
  Padding;

/**
 * Component provides a way to represent a column in the grid system. It is used when we want to display data in the form of columns.
 * ```js
 * <Row>
 *  <Col>left</Col>
 *  <Col>right</Col>
 * </Row>
 * ```
 * @param flex flex value
 * @param noFlex not use flex
 * @param alignSelf flex layout align self
 * @param leftText text align left
 * @param rightText text align right
 * @param rightFloat auto float to right
 */
const Col = ({
  w,h,
  children,
  noFlex,
  flex = 'none',
  rightFloat,
  css,
  alignSelf = 'center',
  leftText = false,
  rightText = false,
  ...props
}: ColProps) => {
  const theme = useTheme();
  const styles = useCSS({
    width:w,
    height:h,
    alignSelf,
    textAlign: (leftText && 'left') || (rightText && 'right') || 'center',
    ...useMargin(props),
    ...usePadding(props),
    marginLeft: rightFloat ? 'auto' : props.ml || props.mx,
    ...(!rightFloat && { flex: noFlex ? '' : flex }),
    ...useThemedCSS(theme, css),
  });
  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default Col;
