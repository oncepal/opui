/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { keyframes } from '@emotion/react';

import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';
import { useThemedCSS, useCSS, useTheme } from '../../styles/css';

type CountDownProps = ComponentBaseProps & {
  h?: number;
  m?: number;
  s?: number;
  time?: number;
  label?: React.ReactNode;
  animation?: boolean;
};

const CountDown = ({ h = 0, m = 0, s = 0, time = 0, label, animation, css, ...props }: CountDownProps) => {
  const theme = useTheme();
  const end: number = h * 3600 + m * 60 + s;
  const timeEnd: number = time;
  const [loading, setLoading] = useState(false);
  const [start, setStart] = useState(false);
  const [num, setNum] = useState(end);
  const [timeNum, setTimeNum] = useState(timeEnd);
  const [ho, setHours] = useState<any>(''); //小时
  const [mi, setMinutes] = useState<any>(''); //分钟
  const [se, setSeconds] = useState<any>(''); //秒
  const [moveS, setMoveS] = useState(s * 1.25);
  useEffect(() => {
    let timer: any;
    timer = 0;
    if (num !== 0) {
      timer = setInterval(() => {
        setNum(n => {
          const hours =
            Math.floor((n / 60 / 60) % 24) < 10 ? `0${Math.floor((n / 60 / 60) % 24)}` : Math.floor((n / 60 / 60) % 24);
          const minutes = Math.floor(n / 60);
          // let minutes = Math.floor((n / 60) % 60) < 10 ? `0${Math.floor((n / 60) % 60)}` : Math.floor((n / 60) % 60)
          const seconds = Math.floor(n % 60) < 10 ? `0${Math.floor(n % 60)}` : Math.floor(n % 60);
          setHours(() => hours);
          setMinutes(() => minutes);
          setSeconds(() => seconds); //函数写法保证值在setInterval里更新，避免useEffect的bug
          setLoading(true);
          setStart(true);
          if (n === 0) {
            setStart(false);
            setMoveS(0);
            clearInterval(timer);
          }
          return n - 1;
        });
      }, 1000);
    }
    if (timeNum !== 0) {
      timer = setInterval(() => {
        setTimeNum(n => {
          const hours =
            Math.floor((n / 60 / 60) % 24) < 10 ? `0${Math.floor((n / 60 / 60) % 24)}` : Math.floor((n / 60 / 60) % 24);
          const minutes = Math.floor((n / 60) % 60) < 10 ? `0${Math.floor((n / 60) % 60)}` : Math.floor((n / 60) % 60);
          const seconds = Math.floor(n % 60) < 10 ? `0${Math.floor(n % 60)}` : Math.floor(n % 60);
          setHours(() => hours);
          setMinutes(() => minutes);
          setSeconds(() => seconds); //函数写法保证值在setInterval里更新，避免useEffect的bug
          setLoading(true);
          setStart(true);
          if (n === 0) {
            clearInterval(timer);
            setMoveS(0);
            setStart(false);
          }
          return n - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, []);

  const move = keyframes({
    '0%': {
      transform: 'rotate(0deg)',
    },
    '100%': {
      transform: 'rotate(360deg)',
    },
  });
  const styles = useCSS({
    display: 'inline-flex',
    alignItems: 'center',
    ...useThemedCSS(theme, css),
    '.text': {
      marginLeft: '5px',
      marginTop: '-1px',
    },
    '.circle': {
      border: `9px solid ${theme.colors.greyLight}`,
      borderRadius: '50%',
      width: '16px',
      height: '16px',
      '.slice': {
        overflow: 'hidden',
        width: '50%',
        border: 'solid 9px transparent',
        borderRightColor: `${theme.colors.primary}`,
        borderRadius: '50%',
        animation: `${move} ${moveS}s linear infinite`,
        position: 'relative',
        top: '-8.9px',
        left: '-8.9px',
        transform: 'rotate(-44deg)',
      },
      '.noslice': {
        overflow: 'hidden',
        width: '50%',
        border: 'solid 9px transparent',
        borderRightColor: `${theme.colors.primary}`,
        borderRadius: '50%',
        animation: `${move} ${moveS}s linear infinite`,
        position: 'relative',
        top: '-8.9px',
        left: '-8.9px',
        transform: 'rotate(-44deg)',
      },
    },
  });

  const renderContent = () => {
    if (animation) {
      // 动画
      return (
        <div css={styles} {...props}>
          <div className={`circle`}>
            <div className={!start ? `circle noslice` : `circle slice`} />
          </div>
          {!loading ? (
            <div className='text'>{label}</div>
          ) : m > 0 ? (
            <div className={`text`}>{`${mi}:${se}`}</div>
          ) : (
            <div className={`text`}>{`${mi}:${se}`}</div>
          )}
        </div>
      );
    }
    return (
      <div css={styles} {...props}>
        {!loading ? label : m > 0 ? <span>{`${mi}:${se}`}</span> : <span>{`${mi}:${se}`}</span>}
      </div>
    );
  };
  return renderContent();
  // return animation ? (
  //   <div css={styles} className={computedClassNames} {...props}>
  //     <div className={`circle`}>
  //       <div className={!start ? `circle noslice` : `circle slice`} />
  //     </div>
  //     {!loading ? (
  //       <div className='text'>{label}</div>
  //     ) : m > 0 ? (
  //       <div className={`text`}>{`${mi}:${se}`}</div>
  //     ) : (
  //       <div className={`text`}>{se}</div>
  //     )}
  //   </div>
  // ) : (
  //   <div css={styles} className={computedClassNames} {...props}>
  //     {!loading ? label : m > 0 ? <span>{`${mi}:${se}`}</span> : <span>{se}</span>}
  //   </div>
  // );
};
export default CountDown;
