/** @jsxImportSource @emotion/react */

import {Children, cloneElement, DetailedReactHTMLElement, ReactNode} from 'react';
import arrowSVG from '../../icons/arrow-up.svg';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import Icon from '../Icon';
import { ComponentBaseProps } from '../props';

type CollapseProps = ComponentBaseProps & {
  title?: ReactNode ;
  subTitle?: ReactNode ;
  expand: boolean;
  animated?: boolean;
  onChange: () => void;
};
type CollapseContentProps = ComponentBaseProps & {

};

type CollapseTriggerProps = ComponentBaseProps & {

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
 * @param title collapse title content
 * @param animated enable or disable the collapse animation
 * @param expand manage the expand behaivor by prop
 * @param trigger trigger component overide
 */
const Collapse = ({ title, css,animated = true, expand = false, children, ...props }: CollapseProps) => {
  const theme = useTheme();

  const handleClickTrigger = () => {
    props?.onChange?.();
  };

  const renderTrigger = () => {
    const trigger = Children.toArray(children).filter((c:any)=>c?.type?.name == 'CollapseTrigger')
    if (trigger.length >0)
      return cloneElement(trigger[0] as DetailedReactHTMLElement<any, HTMLElement>, {
        css: useCSS({
          marginLeft: 'auto',
          transformOrigin: '50% 50%',
          transform: `rotate(${expand ? '0deg' : '180deg'})`,
        }),
      });
    else
      return <CollapseTrigger>
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
          onClick={handleClickTrigger}
        />
      </CollapseTrigger>
  };

  const handleChildrenRender = () => {
    return [...Children.map(children, (child: any, i) => {
      const element = child as DetailedReactHTMLElement<any, HTMLElement>;
      if (child?.type?.name == 'CollapseContent') {
        return cloneElement(element, {

        });
      }
      return;
    }),renderTrigger()];
  };

  const styles = useCSS({
    display: 'flex',
    alignItems: 'center',
    ...useThemedCSS(theme,css)
  })

  return (

      <div css={styles} {...props}>

        {handleChildrenRender()}
      </div>
  );
};



const CollapseTrigger = ({children,css,...props}:CollapseContentProps) => {
  const theme = useTheme()
  const styles = useCSS({
    display: 'flex',
    alignItems: 'center',
    ...useThemedCSS(theme,css)
  })

  return <div css={styles} {...props}>
    {children}
  </div>
}

const CollapseContent = ({children,css,...props}:CollapseTriggerProps) => {
  const theme = useTheme()
  const styles = useCSS({
    display: 'flex',
    alignItems: 'center',
    ...useThemedCSS(theme,css)
  })

  return <div css={styles} {...props}>
    {children}
  </div>
}
Collapse.Content = CollapseContent
Collapse.Trigger = CollapseTrigger
export default Collapse;
