/** @jsxImportSource @emotion/react */

import { Children, cloneElement, ComponentPropsWithoutRef, DetailedReactHTMLElement, ReactNode } from 'react';
import arrowSVG from '../../icons/arrow-up.svg';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import Icon from '../Icon';
import { ComponentBaseProps } from '../props';

type CollapseProps = ComponentBaseProps & {
  expand: boolean;
  animated?: boolean;
  expandIcon?: ReactNode;
  content?: ReactNode;
  onChange: () => void;
};
/**
 * Collapse display a list of high-level options that can expand/collapse to reveal more information.
 * ```js
 *  <Collapse title="Option A">
        <Text>
          Lorem ipsum dolor sit amet
        </Text>
    </Collapse>
 * ```
 * @param content collapse content
 * @param animated enable or disable the collapse animation
 * @param expand manage the expand behaivor by prop
 * @param trigger trigger component overide
 */
const Collapse = ({ content, css, animated = true, expandIcon, expand = false, children,onChange, ...props }:ComponentPropsWithoutRef<'div'>& CollapseProps) => {
  const theme = useTheme();

  const handleCollapseClick = ()=>{
    onChange?.()
  }

  const handleChildrenRender = () => {
    return Children.map(children, (child: any, i) => {
      const element = child as DetailedReactHTMLElement<any, HTMLElement>;
      if (child?.type?.name == 'CollapseContent') {
        return cloneElement(element, {});
      }
      return;
    });
  };

  const styles = useCSS({
    display: 'flex',
    alignItems: 'center',
    padding:`${theme.spacing[3]} ${theme.spacing.md}`,
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} {...props}>
      <div onClick={handleCollapseClick}>
        {content}
        {expandIcon || (
          <Icon
            width='1.2em'
            height='1.2em'
            color={theme.colors.black}
            src={arrowSVG}
            css={{
              marginLeft: 'auto',
              transition: 'transform .1s',
              transform: `rotate(${expand ? '0deg' : '180deg'})`,
            }}
          />
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Collapse;
