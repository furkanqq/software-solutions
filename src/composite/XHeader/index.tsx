import styles from './index.module.scss';
import cn from 'classnames';

import Container from '@/src/components/XContainer';
import { XButton } from '@/src/components/XButton';
import { XImage } from '@/src/components/XImage';
import { XLink } from '@/src/components/XLink';

import { useEffect, useState } from 'react';
import XMobile from '../XMobileMenu';
import XNavbar from '../XNavbar';

interface IProps {
  color?: 'light' | 'dark';
}

export default function XHeader(props: IProps) {
  const [scrollY, setScrollY] = useState(0);
  const [isHeaderVisible, setIsHeaderVisible] = useState<Boolean>(true);
  const [headerBg, setHeaderBg] = useState<Boolean>(false);

  useEffect(() => {
    if (window?.innerWidth < 992) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 200;

      if (currentScrollY > scrollY) {
        setIsHeaderVisible(false);
      } else if (
        currentScrollY < scrollY - scrollThreshold ||
        currentScrollY === 0
      ) {
        setIsHeaderVisible(true);
      } else {
        setIsHeaderVisible(true);
      }

      if (currentScrollY < scrollY - scrollThreshold || currentScrollY === 0) {
        setHeaderBg(false);
      } else {
        setHeaderBg(true);
      }

      setScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollY]);

  return (
    <header
      className={cn(
        styles.header,
        !isHeaderVisible && styles.active,
        !headerBg && styles.bgColor,
        props.color === 'light' && styles.header_light
      )}>
      <Container>
        <div className={styles.header_content}>
          <XLink href="/">
            <div className={styles.header_logo}>
              <XImage
                src={
                  props.color === 'light'
                    ? !headerBg
                      ? '/assets/balance_dark.svg'
                      : '/assets/balance_light.svg'
                    : '/assets/balance_light.svg'
                }
                alt={'balance-software'}
                fill
              />
            </div>
          </XLink>
          <div className={styles.header_nav}>
            <XNavbar color={props.color} />
          </div>
          <div className={styles.header_button}>
            <XButton
              color={
                props.color === 'light'
                  ? !headerBg
                    ? 'outline-white'
                    : 'outline'
                  : 'outline'
              }>
              Teklif Al
            </XButton>
            <XMobile />
          </div>
        </div>
      </Container>
    </header>
  );
}
