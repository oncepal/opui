// /** @jsxImportSource @emotion/react */

// import React, { useState, useEffect } from 'react';
// import { ComponentBaseProps } from '../props';

// type SortButtonProps = ComponentBaseProps & {
//   state?: -1 | 1 | 0;
//   onClick?: ((state: any) => void) | undefined;
//   color?: string;
// };

// const SortButton = ({
//   color,
//   children,
//   onClick,
//   state,
//   co,
//   ...props
// }: SortButtonProps & React.ComponentPropsWithoutRef<'button'>) => {
//   const theme = useTheme();
//   const primary = color ? color : theme.colors.primary;
//   const gray = '#979797';
//   const [count, setCount] = useState<number>(state || 0);
//   const [titleColor, setTitleColor] = useState<string | undefined>('black');
//   const [color1, setColor1] = useState<string | undefined>(gray);
//   const [color2, setColor2] = useState<string | undefined>(gray);
//   const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
//     if (event) {
//       if (count === 0) {
//         setCount(count + 1);
//         setTitleColor(primary);
//         setColor1(primary);
//         setColor2(gray);
//         onClick?.(count + 1);
//       }
//       if (count === 1) {
//         setCount(count - 2);
//         setColor1(gray);
//         setColor2(primary);
//         setTitleColor(primary);
//         onClick?.(count - 2);
//       }
//       if (count === -1) {
//         setCount(count + 1);
//         setColor1(gray);
//         setColor2(gray);
//         setTitleColor('black');
//         onClick?.(count + 1);
//       }
//     }
//   };

//   useEffect(() => {
//     setCount(state || 0);
//     if (state == 0) {
//       setColor1(gray);
//       setColor2(gray);
//       setTitleColor('black');
//     }
//   }, [state]);

//   const styles = useCss({
//     display: 'flex',
//     alignItems: 'center',
//     '& > .animal': {
//       marginLeft: '.5em',
//       '& > .positiveTriangle': {
//         borderRight: '5px solid transparent',
//         borderLeft: '5px solid transparent',
//         borderRadius: '5px',
//         height: 0,
//         width: 0,
//         marginBottom: '3px',
//       },
//       '& > .invertedTriangle': {
//         borderRight: '5px solid transparent',
//         borderLeft: '5px solid transparent',
//         borderRadius: '5px',
//         height: 0,
//         width: 0,
//       },
//     },
//     ...(co && (typeof co == 'function' ? co(theme) : co)),
//   });

//   return (
//     <button css={styles} {...props} onClick={handleClick}>
//       <div style={{ color: `${titleColor}` }} className={`text`}>
//         {children}
//       </div>
//       <div className={`animal`}>
//         <div className={`positiveTriangle`} style={{ borderBottom: `5px solid ${color1}` }} />
//         <div className={`invertedTriangle`} style={{ borderTop: `5px solid ${color2}` }} />
//       </div>
//     </button>
//   );
// };

// export default SortButton;
export default () => {};
