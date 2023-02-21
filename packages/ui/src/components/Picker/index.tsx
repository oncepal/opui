/** @jsxImportSource @emotion/react */

import { useEffect, useState } from 'react';
import { useCSS, useTheme, useThemedCSS } from '../../styles/css';
import { Theme } from '../../styles/themes';
import { ComponentBaseProps } from '../props';

type PickerItem = {
  key: string;
  value: string | number;
};

type PickerProps = ComponentBaseProps & {
  data: PickerItem[][];
  onChange: (item: PickerItem[]) => any;
  value: string[];
};
/**
 * Provides multiple collections of options for the user to choose from,
 * supporting single column selection and multi-column cascading,
 * often used in conjunction with a pop-up layer component.
 * ```
 * <Picker data={[{key:'1',value:"1"}]} />
 * ```
 * @param data picker items
 */
const Picker = ({ data = [], onChange, value, children, css, ...props }: PickerProps) => {
  const theme = useTheme();
  const [pickerStyle, setPickerStyle] = useState<any>({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    minHeight: '10em',
    cursor: 'grab',
    ...useThemedCSS(theme, css),
    '& > .container': {
      display: 'flex',
      justifyContent: 'center',
      flex: 1,
      overflow: 'hidden',
    },
    '& > .indicator': {
      height: '2em',
      position: 'absolute',
      top: '50%',
      right: '1em',
      left: '1em',
      zIndex: 1,
      borderTop: '1px solid rgba(51, 51, 51,.1)',
      borderBottom: '1px solid rgba(51, 51, 51,.1)',
      ebkitTransform: 'translateY(-50%)',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
    },

    '& > .mask': {
      backgroundSize: '100% 100px',
      position: 'absolute',
      top: 0,
      left: 0,
      zIndex: 1,
      width: '100%',
      height: '100%',
      backgroundImage:
        'linear-gradient(180deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4)), linear-gradient(0deg, hsla(0, 0%, 100%, 0.9), hsla(0, 0%, 100%, 0.4))',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'top, bottom',
      webkitTransform: 'translateZ(0)',
      transform: ' translateZ(0)',
      pointerEvents: 'none',
    },
    '& .item': {
      color: 'black',
      height: '2em',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 4px',
    },
  });
  const [currentKey, setCurrentKey] = useState(value || data.map(v => v[0].key));
  const [max, setMax] = useState(data.map(v => v.length - 1));
  const [min, setMin] = useState(data.map(v => v.length - 1 - v.length * 2));
  const [computedData, setComputedData] = useState(data);
  const [moveLength, setMoveLength] = useState(data.map(v => 4));
  const [translateYlength, setTranslateYlength] = useState<number[]>(data.map(v => 4));
  const [offsetY, setOffsetY] = useState<number[]>(data.map(v => 0));
  const [startPageY, setStartPageY] = useState<number[]>(data.map(v => 0));

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>, index: number) => {
    setStartPageY(v =>
      v.map((v, i) => {
        if (i == index) {
          return e.touches[0].pageY;
        }
        return v;
      }),
    );
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>, index: number) => {
    const offsetY = parseFloat(((e.touches[0].pageY - startPageY[index]) / 16).toFixed(1));
    setOffsetY(v =>
      v.map((v, i) => {
        if (i == index) {
          return offsetY;
        }
        return v;
      }),
    );

    setTranslateYlength(l =>
      l.map((v, i) => {
        if (i == index) return moveLength[index] + offsetY;
        return v;
      }),
    );
  };

  const handleTouchEnd = (index: number) => {
    const os = offsetY[index];
    const ml = moveLength[index];
    const remainderPart = (os % 2).toFixed(1);

    const integerPart = Math.trunc(os);
    const decimalPart = os - integerPart;
    let translateY = integerPart;
    if (os > 1 || os < -1) {
      if (Math.abs(parseFloat(remainderPart)) > 1) {
        if (os < 1) {
          translateY = ml + integerPart - 1;
        } else translateY = ml + integerPart + 1;
      } else {
        translateY = ml + integerPart;
      }
      setMoveLength(l =>
        l.map((v, i) => {
          if (i == index) return translateY;
          return v;
        }),
      );
    } else {
      translateY = moveLength[index];
    }
    if (translateY > max[index]) translateY = max[index];
    if (translateY < min[index]) translateY = min[index];
    setCurrentKey(
      data.map((v, i) => {
        if (i == index) return v[(max[index] - translateY) / 2].key;
        return currentKey[index];
      }),
    );
    onChange?.(
      data.map((v, i) => {
        console.log('onChange', v);

        if (i == index) return v[(max[index] - translateY) / 2];
        return v.filter(v => v.key == value[i])[0];
      }),
    );
    setTranslateYlength(l =>
      l.map((v, i) => {
        if (i == index) return translateY;
        return v;
      }),
    );
  };
  const getCurrentItem = (index: number) => {
    return (
      max[index] -
      2 *
        data[index].reduce((a, v, i) => {
          if (v.key == currentKey[index]) a = i;
          return a;
        }, 0)
    );
  };

  useEffect(() => {
    data.map((d, index) => {
      const current = getCurrentItem(index);
      setTranslateYlength(l =>
        l.map((v, i) => {
          if (i == index) return current;
          return v;
        }),
      );
      setMoveLength(l =>
        l.map((v, i) => {
          if (i == index) return current;
          return v;
        }),
      );
    });
  }, []);
  useEffect(() => {
    const ps = pickerStyle;
    translateYlength.map((v, i) => {
      ps['& > .container']['& > .content' + i] = {
        width: '5em',
        transitionTimingFunction: 'cubic-bezier(0.23, 1, 0.68, 1)',
        transitionDuration: '0ms',
        transitionProperty: 'none',
        transform: `translate3d(0px, ${v}em, 0px)`,
      };
    });
    setPickerStyle({ ...ps });
  }, [translateYlength]);
  return (
    <div css={useCSS(pickerStyle)} {...props}>
      <div className='container'>
        {computedData.map((columnData, i) => (
          <div
            key={i + (columnData[0].value as any)}
            className={'content' + i}
            onTouchStart={e => handleTouchStart(e, i)}
            onTouchMove={e => handleTouchMove(e, i)}
            onTouchEnd={e => handleTouchEnd(i)}>
            {columnData?.map(v => {
              return (
                <div className='item' key={v.key}>
                  {v.value}
                </div>
              );
            })}
          </div>
        ))}
      </div>
      <div className='mask'></div>
      <div className='indicator'></div>
    </div>
  );
};

export default Picker;
