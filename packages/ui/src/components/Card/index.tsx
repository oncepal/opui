/** @jsxImportSource @emotion/react */

import { ComponentBaseProps, Themed } from '../props';
import vars from '../../styles/vars';
import { useThemedCSS, useCSS, useTheme, useThemedProps,useCloudyBackground } from '../../styles/css';
import { Children, DetailedReactHTMLElement, cloneElement } from 'react';
type CardProps = ComponentBaseProps & {
  color?: Themed<string>;
  cloudy?:boolean
  horizontal?: boolean;
  w?:string
  h?:string
  radius?:Themed<string>
};

type CardImgProps = ComponentBaseProps & {
  title?: React.ReactNode;
  extra?: React.ReactNode;
};

type CardTitleProps = ComponentBaseProps & {};
type CardDescriptionProps = ComponentBaseProps & {};
type CardActionsProps = ComponentBaseProps & {};

/**
 * Card is a container for text, photos, and actions in the context of a single subject.
 * ```js
 * <Card css={{ mw: "400px" }}>
      <Card.Title>
        <Text>A basic card</Text>
      </Card.Title>
    </Card>
 * ```
 */
const Card = ({cloudy,w,h, radius,horizontal = false, css, children, color, ...props }: CardProps) => {
  const theme = useTheme();

  const styles = useCSS({
    display: 'flex',
    padding: '1em',
    flexDirection: 'column',
    width:w,
    height:h,
    borderRadius:useThemedProps(theme,radius),
    ...cloudy && useCloudyBackground(theme),
    ...useThemedCSS(theme, css),
  });

  return (
    <article css={styles} {...props}>
      {(() => {
        const childElements: DetailedReactHTMLElement<any, HTMLDivElement>[] = [];
         Children.map(children, (child: any) => {
          if (['CardImg', 'CardDescription', 'CardTitle', 'CardActions'].includes(child.type.name)) {
            childElements.push(child);
          }
        });
        return childElements.map(element =>
          cloneElement(element, {
            ...{ ...element.props },
          }),
        );
      })() }
    </article>

  );
};

const CardImg = ({ title, extra, css, children, ...props }: CardImgProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    ...useThemedCSS(theme, css),
  });

  return children ? (
    children
  ) : (
    <div css={styles} {...props}>
      <div>{title}</div>
      <div>{extra}</div>
    </div>
  );
};

const CardTitle = ({ css, children, ...props }: CardTitleProps) => {
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
const CardDescription = ({ css, children, ...props }: CardDescriptionProps) => {
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

const CardActions = ({ css, children, ...props }: CardActionsProps) => {
  const theme = useTheme();
  const styles = useCSS({
    display: 'flex',
    alignItems: 'center',
    ...useThemedCSS(theme, css),
  });

  return (
    <div css={styles} {...props}>
      {children}
    </div>
  );
};
Card.Img = CardImg;
Card.Title = CardTitle;
Card.Description = CardDescription;
Card.Actions = CardActions;
export default Card;
