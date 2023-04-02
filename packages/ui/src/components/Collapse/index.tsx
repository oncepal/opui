/** @jsxImportSource @emotion/react */

import { Children, cloneElement, ComponentPropsWithoutRef, DetailedReactHTMLElement, ReactNode } from 'react';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import Icon from '../Icon';
import { ComponentBaseProps } from '../props';

type CollapseProps = ComponentBaseProps & {
  expand: boolean;
  animated?: boolean;
  expandIcon?: ReactNode;
  title?: ReactNode;
  subTitle?: ReactNode;
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
 * @param title collapse title
 * @param subTitle collapse subTitle
 * @param animated enable or disable the collapse animation
 * @param expand manage the expand behaivor by prop
 * @param trigger trigger component overide
 */
const Collapse = ({
  title,
  subTitle,
  css,
  animated = true,
  expandIcon,
  expand = false,
  children,
  onChange,
  ...props
}: Omit<ComponentPropsWithoutRef<'div'>, 'title'> & CollapseProps) => {
  const theme = useTheme();

  const handleCollapseClick = () => {
    onChange?.();
  };

  const handleChildrenRender = () => {
    return Children.map(children, (child: any, i) => {
      const element = child as DetailedReactHTMLElement<any, HTMLElement>;
      if (child?.type?.name == 'CollapseContent') {
        return cloneElement(element, {});
      }
      return;
    });
  };

  const collapseContainerStyles = useCSS({
    padding: `${theme.spacing[3]} ${theme.spacing.md}`,

    ...useThemedCSS(theme, css),
  });
  const collapseStyles = useCSS({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    padding: `${theme.spacing[3]} ${theme.spacing.md}`,
  });
  const collapseContentStyles = useCSS({
    transition: 'grid-template-rows .25s ease-out 0s',
    display:'grid',
    gridTemplateRows: expand ?'1fr' :'0fr',
    "& > div":{
      overflow:'hidden',
    }
  });
  return (
    <div css={collapseContainerStyles} {...props}>
      <div css={collapseStyles} onClick={handleCollapseClick}>
        {title && <div>{title}</div>}
        {subTitle && <div>{subTitle}</div>}
        {expandIcon || (
          <i className='bx bxs-chevron-right' style={{
            marginLeft: 'auto',
            transition: 'transform .25s ease-out',
            transform: `rotate(${expand ? '90deg' : '0deg'})`
          }}/>
         
        )}
      </div>
      <div css={collapseContentStyles}><div>{children}</div></div>
    </div>
  );
};

export default Collapse;
