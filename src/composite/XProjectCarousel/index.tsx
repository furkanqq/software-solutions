import styles from './index.module.scss';

import { XImage } from '@/src/components/XImage';

import React, { useEffect, useState, useRef } from 'react';

export default function XProjectCarousel({ data }: any) {
  const containerRef = useRef<any>(null);
  const [containerPosition, setContainerPosition] = useState({
    left: 0,
    top: 0
  });
  const [isAtTop, setIsAtTop] = useState(false);

  const handleMouseWheel = (event: React.WheelEvent) => {
    console.log('1');
    console.log(event, 'event');
    if (containerRef.current && containerRef.current.contains(event.target)) {
      containerRef.current.scrollLeft += event.deltaY;
      event.preventDefault();
    } else {
      window.scrollBy(0, event.deltaY);
    }
  };

  const updatePosition = () => {
    if (containerRef.current) {
      const { left, top } = containerRef.current.getBoundingClientRect();
      setContainerPosition({ left, top });
      setIsAtTop(top === 0);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updatePosition);
    return () => {
      window.removeEventListener('scroll', updatePosition);
    };
  }, []);

  const [divWidth, setDivWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const width = containerRef.current.offsetWidth as number;
      setDivWidth(width);
    }
  }, [containerRef]);

  return (
    <section style={{ height: divWidth * 2 }} className={styles.projects}>
      <div
        style={{
          left: containerPosition.left,
          overflowY: 'scroll',
          overflowX: 'hidden'
        }}
        onWheel={(e) => {
          if (isAtTop) {
            handleMouseWheel(e);
          }
        }}
        className={styles.sticky_part}
        ref={containerRef}>
        {data?.map((item: any, index: number) => (
          <div className={styles.items} key={index}>
            <div className={styles.item}>
              <div className={styles.thumbnail}>
                <XImage
                  src={
                    process.env.NEXT_PUBLIC_API_URL +
                    '/assets/' +
                    item?.highlight_image
                  }
                  alt={item.title}
                  fill
                />
              </div>
              <div className={styles.information}>
                <div className={styles.left}>
                  <div className={styles.category}>{item?.category}</div>
                  <div className={styles.title}>{item?.title}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
