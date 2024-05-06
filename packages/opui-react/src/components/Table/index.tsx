/** @jsxImportSource @emotion/react */

import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import vars from '../../styles/vars';
type TableProps = ComponentBaseProps & {
  headers: string[];
  data: any[];
  columns: { key: string }[];
};
/**
 *
 * ```jsx
 * <Table color="#eee />
 * ```
 * @param headers outlined style
 * @param data tag color
 */
const Table = ({ columns, headers, data, css, children, ...props }: TableProps) => {
  const theme = useTheme();
  const styles = useCSS({
    overflowX: 'auto',
    border: '2px solid #bbc4cd',
    ...useThemedCSS(theme, css),
  });

  const header = (
    <div>
      {headers?.map((head, i) => (
        <div
          style={{
            height: '4em',
            width: '18em',
            padding: '0.6em',
            background: i == 0 ? '#e4e8ed' : '',
            borderRight: '1px solid #bbc4cd',
            borderBottom: i != headers.length - 1 ? '1px solid #bbc4cd' : '',
            fontWeight: [0, 1, 4, 9, 10].includes(i) ? theme.fontWeights.bold : theme.fontWeights.normal,
          }}>
          {head}
        </div>
      ))}
    </div>
  );

  const content = data.map((d, i) => (
    <div style={{ display: 'flex' }}>
      {columns.map((c, ii) => (
        <div
          style={{
            position: 'relative',
            display: 'flex',
            width: '14em',
            height: '4em',
            padding: '0.6em',
            borderRight: ii != columns.length - 1 ? '1px solid #bbc4cd' : '',
            borderBottom: i != data.length - 1 ? '1px solid #bbc4cd' : '',
          }}>
          {d[c.key]}
        </div>
      ))}
    </div>
  ));

  const footer = <></>;

  return (
    <div css={styles} {...props}>
      <div style={{ display: 'flex' }}>
        {header}
        {content}
        {footer}
      </div>
    </div>
  );
};

export default Table;
