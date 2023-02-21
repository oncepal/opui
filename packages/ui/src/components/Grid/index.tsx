/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Themed } from '../props';
import { useThemedCSS, useCSS, useTheme } from '../../styles/css';
import { forwardRef, ComponentPropsWithoutRef, Children, cloneElement, DetailedReactHTMLElement } from 'react';
type GridProps = ComponentBaseProps & {
  columns?: number;
  rowGap?: string;
  colGap?: string;
};

type GridItemProps = ComponentBaseProps & {
  span: string;
};

/**
 * The responsive layout grid adapts to screen size and orientation, ensuring consistency across layouts.
 * ```js
 * <Grid columns={4} colGap={2}>
      <Grid.Item>Home</Grid.Item>
      <Grid.Item span={2}>Electronics</Grid.Item>
      <Grid.Item>Cameras</Grid.Item>
      <Grid.Item>Film</Grid.Item>
    </Grid>
 * ```
 * @param columns a row can contain how much item
 * @param gap grid gap with row & col
 */
const Grid = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'> & GridProps>(
  ({ columns, rowGap, colGap, css, children, ...props }, ref) => {
    const theme = useTheme();
    const styles = useCSS({
      display: 'grid',
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridAutoRows: '1fr',
      gridColumnGap: colGap,
      gridRowGap: rowGap,
      ...useThemedCSS(theme, css),
    });

    return (
      <div ref={ref} css={styles} {...props}>
        {Children.map(children, (child: any, i) => {
          const element = child as DetailedReactHTMLElement<any, HTMLDivElement>;
          if (child.type.name == 'GridItem') {
            return (
              <>
                {cloneElement(element, {
                  ...{ ...element.props },
                })}
              </>
            );
          }
          return undefined;
        })}
      </div>
    );
  },
);

const GridItem = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<'div'> & GridItemProps>(
  ({ span, css, children, ...props }, ref) => {
    const theme = useTheme();
    const styles = useCSS({
      gridColumnEnd: 'span ' + span,
      ...useThemedCSS(theme, css),
    });

    return (
      <div ref={ref} css={styles} {...props}>
        {children}
      </div>
    );
  },
);

(Grid as any).Item = GridItem;
export default Grid;
