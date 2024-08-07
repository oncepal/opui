/** @jsxImportSource @emotion/react */

import { keyframes } from '@emotion/react';
import { Theme } from '../../styles/themes';
import * as React from 'react';
import Row from '../Row';
import Col from '../Col';
import { ComponentBaseProps } from '../props';
import { useCSS, useThemedCSS, useTheme } from '../../styles/hooks';
import * as tokens from '../../styles/tokens'
type NoticeBarProps = ComponentBaseProps &
  Partial<{
    action: React.ReactNode;
    icon: React.ReactNode;
    title: React.ReactNode;
    content: React.ReactNode;
    scroll: boolean;
    duration: number;
    delay: number;
    start?: number;
    end?: number;
  }>;
/**
 * The NoticeBar component, some component libraries are also called Banner, are generally embedded in the area between the Appbar and the main content, and display a fixed notification content or a special prompt, divided into icons, actions and scrollable themes. Information area
 * @param icon A notification icon on the far left
 * @param action An area used to display the subsequent operations of the information display
 * @param title The main summary of the reminder or notification message
 * @param content The main content of the reminder or notification message
 * @param scroll Whether the content of the component scrolls
 * @param children The main text content of the prompt, scrollable or custom content
 */
const NoticeBar = ({
  icon,
  action,
  css,
  title,
  content,
  duration,
  scroll,
  start = 100,
  end,
  children,
  ...props
}: NoticeBarProps) => {
  /**
   *The main style part of the component
   */
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    cursor: 'pointer',
    alignItems: 'center',
    background: !theme.isDarkMode ? theme.colors.textInLightBackground : theme.colors.textInDarkBackground,
    padding: '.5em',
    ...useThemedCSS(theme, css),
  });

  /**
   * The rendering logic of the main content of the message or notification
   * @param title props.title
   * @param content props.content
   */
  const renderContent = () => {
    if (children) {
      return scroll ? (
        <div
          style={{
            width: '100%',
            overflow: 'hidden',
            margin: `0em ${action ? '0.5em' : '0'} 0 ${icon ? '0.5em' : '0'}`,
          }}>
          <div
            css={useCSS({
              width: 'max-content',
              animation: `${keyframes({
                '0%': {
                  transform: `translateX(${start}%)`,
                },
                '100%': {
                  transform: `translateX(${end || -100}%)`,
                },
              })} ${duration || 10}s linear infinite`,
              ':hover': {
                animationPlayState: 'paused',
              },
            })}>
            {children}
          </div>
        </div>
      ) : (
        children
      );
    }

    return (
      <Row vertical align='start'>
        <Col>{title}</Col>
        <Col css={{ fontSize: '.8em' }}>{content}</Col>
      </Row>
    );
  };

  /**
   * The component is essentially a semantic aside, and the children render the corresponding ui
   */
  return (
    <aside css={styles} {...props}>
      {icon}
      {renderContent()}
      {action}
    </aside>
  );
};
export default NoticeBar;
