/** @jsxImportSource @emotion/react */

import React, { useMemo } from 'react';
import { useCSS, useTheme, useThemedCSS,useTransition } from '../../styles/hooks';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';
import * as tokens from '../../styles/tokens'
type PopoverProps = ComponentBaseProps & {
  hover?: boolean;
};
type PopoverContentProps = ComponentBaseProps & {
  position?: 'top' | 'left' | 'right' | 'bottom';
  offset?:string
  show?: boolean;
};

/**
 * Popover is a non-modal dialog that floats around its disclosure. 
 * It's commonly used for displaying additional rich content on top of something. 
 * ```
 * <Popover>
      <Popover.Trigger>
        <Button>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Text>
          This is the content of the popover.
        </Text>
      </Popover.Content>
    </Popover>
 *  ```
 * @param hover Trigger method
 */
const Popover = ({ hover = false, css, children, ...props }: React.ComponentPropsWithoutRef<'div'> & PopoverProps) => {
  const theme = useTheme();
  const [isContentShow, setIsContentShow] = React.useState(false);
  const styles = useCSS({
    position: 'relative',
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',

    ...useThemedCSS(theme, css),
  });

  const handleChildrenRender = () => {
    return React.Children.map(children, (child: any, i) => {
      const element = child as React.DetailedReactHTMLElement<any, HTMLElement>;
      if (child?.type?.name == 'PopoverContent') {
        return React.cloneElement(element, {
          show: isContentShow,
          setIsContentShow,
        });
      }
      if (child?.type?.name == 'PopoverTrigger') {
        return React.cloneElement(element, {
          onFocus: () => {
            if (!isContentShow) setIsContentShow(true);
          },
          onBlur: () => {
            if (isContentShow) setIsContentShow(false);
          },
        });
      }
      return;
    });
  };
  return (
    <div
      css={styles}
      onMouseOver={() => {
        setIsContentShow(true);
      }}
      onMouseOut={() => {
        setIsContentShow(false);
      }}
      {...props}>
      {handleChildrenRender()}
    </div>
  );
};

const PopoverTrigger = ({ css, children, ...props }: React.ComponentPropsWithoutRef<'div'> & PopoverContentProps) => {
  const theme = useTheme();

  const styles = useCSS({
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};

const PopoverContent = ({
  show = false,
  offset,
  position = 'bottom',
  css,
  children,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & PopoverContentProps) => {
  const theme = useTheme();

  const cp = useMemo(() => {
    switch (position) {
      case 'top':
        return {
          top: offset||0,
          transform: 'translate3d(0,-100%,0)',
        };

      case 'left':
        return {
          left: offset||0,
          transform: 'translate3d(-100%,0,0)',
        };

      case 'bottom':
        return {
          bottom: offset || 0,
          transform: 'translate3d(0,100%,0)',
        };

      case 'right':
        return {
          right:offset|| 0,
          transform: 'translate3d(100%,0,0)',
        };

      default:
        return {
          bottom: offset||0,
          transform: 'translate3d(0,100%,0)',
        };
    }
  }, [position]);

  const styles = useCSS({
    position: 'absolute',
    ...cp,
    borderRadius: tokens.radius.xs,
    padding:`${tokens.spacings.xs} ${tokens.spacings.md}`,
    lineHeight:tokens.lineHeights.base,
    width:'max-content',
    background:theme.isDarkMode?theme.colors.darkBackground:theme.colors.lightBackground,
    color:theme.isDarkMode?theme.colors.textInDarkBackground:theme.colors.textInLightBackground,
    visibility: show ? 'visible' : 'hidden',
    ...useTransition(),

    ...useThemedCSS(theme, css),
  });

  const handleMouseOut = (e: any) => {
    (props as any).setIsContentShow(false);
  };

  return (
    <div css={styles} onMouseOut={handleMouseOut} {...props}>
      {children}
    </div>
  );
};

Popover.Content = PopoverContent;
Popover.Trigger = PopoverTrigger;
export default Popover;
