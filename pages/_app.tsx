import './../styles/app.scss';

import type { AppProps } from 'next/app';
import Providers from '@/src/provider';
// import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMouseMove = (e: any) => {
  //     setTargetPosition({ x: e.clientX, y: e.clientY });
  //   };

  //   document.addEventListener('mousemove', handleMouseMove);

  //   return () => {
  //     document.removeEventListener('mousemove', handleMouseMove);
  //   };
  // }, []);

  // useEffect(() => {
  //   const updatePosition = () => {
  //     setPosition((prevPosition) => ({
  //       x: lerp(prevPosition.x, targetPosition.x, 0.08),
  //       y: lerp(prevPosition.y, targetPosition.y, 0.08)
  //     }));
  //   };

  //   const animationFrame = requestAnimationFrame(updatePosition);

  //   return () => {
  //     cancelAnimationFrame(animationFrame);
  //   };
  // }, [targetPosition]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setPosition((prevPosition) => ({
  //       x: lerp(prevPosition.x, targetPosition.x, 0.08),
  //       y: lerp(prevPosition.y, targetPosition.y, 0.08)
  //     }));
  //   }, 4);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [targetPosition]);

  // const lerp = (start: number, end: number, factor: number) => {
  //   return start * (1 - factor) + end * factor;
  // };
  return (
    <Providers>
      {/* <div
        className="follower"
        style={{ left: position.x, top: position.y }}></div> */}
      <Component {...pageProps} />
    </Providers>
  );
}
