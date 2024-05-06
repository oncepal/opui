/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { ReactNode } from 'react';
import { ComponentBaseProps } from '../props';
import { useThemedCSS, useTheme, useCSS } from '../../styles/css';
type CellProps = ComponentBaseProps & {
  title?: ReactNode;
  subTitle?: ReactNode;
  value?: ReactNode;
  centered?: boolean;
};

/**
 * Basic display cells for mobile.
 * ```js
 * <Cell title='name' value='yanmingxu' />
 * ```
 * @param title cell title
 * @param value cell value
 * @param subTitle cell subTitle
 * @param centered centered or not
 * @param onClick click handler
 */
const Cell = ({ title, value, subTitle, css, centered = true, onClick }: CellProps) => {
  const theme = useTheme();

  const styles = useCSS({
    textAlign: 'initial',
    display: 'flex',
    width: '100%',
    alignItems: centered ? 'center' : 'initial',
    '& > div:nth-of-type(2n)': {
      marginLeft: 'auto',
    },
    ...useThemedCSS(theme, css),
  });

  const handleClickCell = () => {
    onClick && onClick();
  };

  return (
    <div css={styles} onClick={handleClickCell}>
      <div>
        {title}
        <div>{subTitle}</div>
      </div>
      <div>{value}</div>
    </div>
  );
};

export default Cell;
