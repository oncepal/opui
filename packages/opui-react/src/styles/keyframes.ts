import { keyframes } from '@emotion/react';
const rotate = (start = 0, end = 360) =>
  keyframes({
    '0%': {
      transform: `rotate(${start}deg)`,
    },
    '100%': {
      transform: `rotate(${end}deg)`,
    },
  });
export { rotate };
