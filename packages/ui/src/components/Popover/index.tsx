/** @jsxImportSource @emotion/react */

import React, { useMemo } from 'react';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

type PopoverProps = ComponentBaseProps & {
  hover?: boolean;
};
type PopoverContentProps = ComponentBaseProps & {
  position?: 'top' | 'left' | 'right' | 'bottom';
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
          top: 0,
          transform: 'translate3d(0,-100%,0)',
        };

      case 'left':
        return {
          left: 0,
          transform: 'translate3d(-100%,0,0)',
        };

      case 'bottom':
        return {
          bottom: 0,
          transform: 'translate3d(0,100%,0)',
        };

      case 'right':
        return {
          right: 0,
          transform: 'translate3d(100%,0,0)',
        };

      default:
        return {
          bottom: 0,
          transform: 'translate3d(0,100%,0)',
        };
    }
  }, [position]);

  const styles = useCSS({
    position: 'absolute',
    ...cp,
    // display: show ? 'block' : 'none',
    borderRadius: theme.radius.sm,
    visibility: show ? 'visible' : 'hidden',
    transition: 'all .25s ease-out',
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
