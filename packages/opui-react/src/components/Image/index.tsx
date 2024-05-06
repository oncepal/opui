/** @jsxImportSource @emotion/react */

import { useState, ReactNode, useLayoutEffect, useRef, ReactEventHandler, SyntheticEvent } from 'react';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps, Themed } from '../props';

import { useThemedCSS, useCSS, useTheme } from '../../styles/css';

type ImageProps = ComponentBaseProps & {
  mask?: ReactNode;
  circle?: boolean;
  lazy?: boolean;
  cover?: boolean;
  scale?: boolean;
  contain?: boolean;
  backdropFilter?: string;
  width?: string;
  loadingImg?: ReactNode;
  errorImg?: ReactNode;
  onError?: ReactEventHandler<HTMLImageElement>;
  onLoad?: ReactEventHandler<HTMLImageElement>;
  height?: string;
};

/**
 * The Image component is used to display images.
 *
 * ```
 * <Image href='#' indicatorAction='none' color='green' />
 * ```
 *
 * @param circle circle style.
 * @param mask mask component on surface.
 * @param lazy lazy load.
 * @param cover css 'objectFit' value.
 * @param scale css 'objectFit' value.
 * @param contain css 'objectFit' value.
 * @param width imgae width.
 * @param height imgae height
 * @param errorImg load error image
 * @param onError image load error handler
 * @param onLoad image loading handler
 * @param backdropFilter css 'backdropFilter' value
 * @param loadingImg showing image in loading
 */
const Image = ({
  circle = false,
  mask,
  lazy = true,
  cover,
  scale,
  contain,
  width = '100%',
  errorImg,
  backdropFilter,
  height,
  onError,
  onLoad,
  css,
  loadingImg,
  ...props
}: Omit<React.ComponentPropsWithoutRef<'img'>, 'onLoad' | 'onError'> & ImageProps) => {
  const ref = useRef(null);
  const theme = useTheme();
  const [loadingState, setLoadingState] = useState<'error' | 'success' | 'loading'>('loading');
  const styles = useCSS({
    verticalAlign: 'middle',
    background: 'transparent',
    borderRadius: ((circle as boolean) && '50%') || '',
    objectFit: (cover && 'cover') || (scale && 'scale-down') || (contain && 'contain') || 'initial',
    width: width,
    imageRendering: 'initial',
    imageOrientation: 'initial',
    height: height,
    ...useThemedCSS(theme, css),
  });

  const containerStyles = useCSS({
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  });

  const maskStyles = useCSS({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    inset: 0,
    backdropFilter,
  });
  const handleImgLoadError = (e: SyntheticEvent<HTMLImageElement>) => {
    setLoadingState('error');
    onError && onError(e);
  };
  const handleImgLoadFinish = (e: SyntheticEvent<HTMLImageElement>) => {
    onLoad && onLoad(e);
  };

  useLayoutEffect(() => {
    (ref.current as any)?.complete && setLoadingState('success');
  }, [ref.current]);

  const img = (
    <img
      ref={ref}
      onError={handleImgLoadError}
      onLoad={handleImgLoadFinish}
      css={styles}
      loading={(lazy && 'lazy') || 'eager'}
      {...props}
    />
  );

  const renderRightImg = () => {
    return (
      <div css={containerStyles}>
        {loadingState == 'loading' && loadingImg}
        {loadingState == 'error' ? errorImg : img}
        {loadingState == 'success' && mask && <div css={maskStyles}>{mask}</div>}
      </div>
    );
  };

  return renderRightImg();
};

export default Image;
