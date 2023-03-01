import { useCSS, useTheme, useThemedCSS, useThemedProp } from '../../styles/css';
import vars from '../../styles/vars';
import { TagProps } from './tag.props';

export const getStyles = (props: TagProps) => {
  const { show, radius, outlined, css, color } = props;
  const theme = useTheme();
  const getComputedColor = () =>
    useThemedProp(theme, color) || (theme.mode == 'light' ? theme.colors.black : theme.colors.white);
  return useCSS({
    position: 'relative',
    display: show ? 'inline-flex' : 'none',
    alignItems: 'center',
    padding: '0.2em 0.6em',
    borderRadius: radius || (theme ? theme.radius.md : vars.radius.md),
    ...(!outlined
      ? {
          background: getComputedColor(),
          color: theme.colors.white,
        }
      : {
          border: '1px solid ' + getComputedColor(),
          color: getComputedColor(),
        }),

    ...useThemedCSS(theme, css),
  });
};
