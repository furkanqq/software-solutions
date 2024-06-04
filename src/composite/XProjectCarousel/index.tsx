import styles from './index.module.scss';

import { XImage } from '@/src/components/XImage';

import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useRef } from 'react';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollTrigger);

export default function XProjectCarousel({ data }: any) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  React.useLayoutEffect(() => {
    const gsapContext = gsap.context(() => {
      const panels = gsap.utils.toArray('.panel');

      gsap.to(panels, {
        scrollTrigger: {
          end: () => '+=' + scrollRef.current?.offsetWidth,
          trigger: containerRef.current,
          snap: 1 / (panels.length - 1),
          pin: true,
          scrub: 1
        },
        xPercent: -100 * (panels.length - 1),
        ease: 'none'
      });
    }, containerRef);

    return () => gsapContext.revert();
  }, []);

  return (
    <section className={styles.projects} ref={containerRef}>
      <div className={styles.sticky_part} ref={scrollRef}>
        {data?.map((item: any, index: number) => (
          <div className={`${styles.items} panel`} key={index}>
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
