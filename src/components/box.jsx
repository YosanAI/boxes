import { useEffect, useState } from 'react';
import { getRandomHexColor } from '../util/color';

export function Box({ size = 220, margin = 0 }) {
  const [bgColor, setBgColor] = useState('red');

  useEffect(() => {
    const intervalID = setInterval(() => {
      setBgColor(getRandomHexColor());
    }, 1000);
    return () => clearInterval(intervalID);
  }, []);

  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: `${size}px`,
        height: `${size}px`,
        margin: `${Math.max(0, margin)}px`,
        borderRadius: '0',
      }}
    />
  );
}
