/** @jsxImportSource @emotion/react */

import { useMargin, usePadding, useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps, Margin, Padding } from '../props';

type RowProps = Margin &
  Padding &
  ComponentBaseProps & {
    vertical?: boolean;
    align?: 'start' | 'center' | 'end' | 'baseline' | 'stretch';
    justify?: 'start' | 'center' | 'end' | 'space-around' | 'space-between';
    gap?: string;
    wrapped?: boolean;
    fullHeight?: boolean;
  };

/**
 * Component provides a way to represent a row in the grid system. It is used when we want to display data in the form of rows..
 * ```js
 * <Row>
 *  <Col>left</Col>
 *  <Col>right</Col>
 * </Row>
 * ```
 * @param vertical vertical flex direction
 * @param wrapped flex wrap
 * @param fullHeight full height or not
 * @param align flex align items
 * @param justify flex justify content
 * @param gap children's gap
 */
const Row = ({ children, vertical, wrapped, fullHeight, align, justify, gap, css, ...props }: RowProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    width: '100%',
    ...useMargin(props),
    ...usePadding(props),
    justifyContent: justify || '',
    flexDirection: vertical ? 'column' : 'row',
    height: fullHeight ? '100%' : 'initial',
    gap: gap,
    alignItems: align || '',
    ...(vertical ? {} : { flexWrap: wrapped ? 'wrap' : 'nowrap' }),
    ...useThemedCSS(theme, css),
  });
  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

export default Row;
