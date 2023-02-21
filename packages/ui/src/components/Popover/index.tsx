/** @jsxImportSource @emotion/react */

import React from 'react';
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
        <Button auto flat>Open Popover</Button>
      </Popover.Trigger>
      <Popover.Content>
        <Text css={{ p: "$10" }}>
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
      if (child.type.name == 'PopoverContent') {
        return React.cloneElement(element, {
          show: isContentShow,
        });
      }
      return React.cloneElement(element, {
        ...(hover && {
          onMouseOver: () => {
            setIsContentShow(true);
          },
          onMouseOut: () => {
            setIsContentShow(false);
          },
        }),
        onFocus: () => {
          setIsContentShow(true);
        },
        onBlur: () => {
          setIsContentShow(false);
        },
      });
    });
  };
  return (
    <div css={styles} {...props}>
      {handleChildrenRender()}
    </div>
  );
};

const PopoverContent = ({
  show = false,
  position = 'bottom',
  css,
  children,
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'> & PopoverContentProps) => {
  const theme = useTheme();
  const [cp, setCp] = React.useState({});
  const styles = useCSS({
    position: 'absolute',
    ...cp,
    display: show ? 'block' : 'none',

    ...useThemedCSS(theme, css),
  });
  const [usePropsShow, setUsePropsShow] = React.useState(true);
  const handleMouseOver = (e: any) => {
    if (usePropsShow) setUsePropsShow(false);
  };
  const handleMouseOut = (e: any) => {
    setUsePropsShow(true);
  };

  React.useEffect(() => {
    switch (position) {
      case 'top':
        setCp({
          top: 0,
          transform: 'translate3d(0,-105%,0)',
        });
        break;
      case 'left':
        setCp({
          left: 0,
          transform: 'translate3d(-105%,0,0)',
        });
        break;
      case 'bottom':
        setCp({
          bottom: 0,
          transform: 'translate3d(0,105%,0)',
        });
        break;
      case 'right':
        setCp({
          right: 0,
          transform: 'translate3d(105%,0,0)',
        });
        break;
      default:
        break;
    }
  }, [position]);
  return (
    <div
      css={styles}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      className={'popover-content ' + className}
      {...props}>
      {children}
    </div>
  );
};

Popover.Content = PopoverContent;

export default Popover;
