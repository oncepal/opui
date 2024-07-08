/** @jsxImportSource @emotion/react */

import { Theme } from '../../styles/themes';
import { createRoot } from 'react-dom/client';
import { ReactNode } from 'react';
import { ComponentBaseProps } from '../props';
import { useCSS, useTheme, useThemedCSS } from '../../styles/hooks';

type ToastProps = ComponentBaseProps &
  Partial<{
    visible: boolean;
    duration: number;
    title?: ReactNode;
    icon?: ReactNode;
    content?: ReactNode;
    color: string;
  }>;

/**
 * Datetimes present a calendar interface and time wheel,
 * making it easy for users to select dates and times.
 * @param ...
 */
const Toast = ({ title, content, color, children, css, ...props }: ToastProps) => {
  const theme = useTheme();
  const styles = useCSS({
    position: 'fixed',
    top: '50%',
    left: '50%',
    width: '80vw',
    height: 'auto',
    textAlign: 'center',
    transform: 'translate(-50%, -50%)',
    zIndex:theme.toast.zIndex,
    borderRadius: '4px',
    background: color || (theme.isDarkMode?theme.colors.darkBackground: theme?.colors?.lightBackground),
    color: 'white',
    padding: '.4em 1em',
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} {...props}>
      {children || (
        <div>
          <div>{title}</div>
          <div>{content}</div>
        </div>
      )}
    </div>
  );
};

Toast.show = ({ title, color, icon, duration = 2500, ...rest }: ToastProps) => {
  const aside = document.createElement('aside');
  document.body.appendChild(aside);
  const root = createRoot(aside);
  root.render(<Toast {...({ title, icon, color, ...rest } as any)} />);

  setTimeout(() => {
    root.unmount();
    document.body.removeChild(aside);
  }, duration);
};

export default Toast;
