import styles from './index.module.scss';

import React, { useEffect, useState, useRef } from 'react';

const MouseFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor;
    };

    const updateFollower = () => {
      setFollowerPos((prevPos) => ({
        x: lerp(prevPos.x, mousePos.x, 0.1),
        y: lerp(prevPos.y, mousePos.y, 0.1)
      }));

      requestAnimationFrame(updateFollower);
    };

    updateFollower();
  }, [mousePos]);

  useEffect(() => {
    if (followerRef.current) {
      followerRef.current.style.left = `${followerPos.x}px`;
      followerRef.current.style.top = `${followerPos.y}px`;
    }
  }, [followerPos]);

  return <div className={styles.follower} ref={followerRef} />;
};

export default MouseFollower;
