import styles from './index.module.scss';
import cn from 'classnames';

import { IconChevronDown } from '@/src/assets/IconChevronDown';

import Container from '@/src/components/XContainer';
import { XLink } from '@/src/components/XLink';

import { NavigationType, Navigation } from '@/src/config/nav.config';
import { useState } from 'react';

export default function XMobile() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section className={styles.mobile}>
      <Container className={styles.content}>
        <div onClick={() => setIsOpen(!isOpen)} className={styles.hamburger}>
          <div style={isOpen ? { right: '-500px' } : {}}></div>
          <div style={isOpen ? { transform: 'rotate(45deg)' } : {}}></div>
          <div
            style={
              isOpen ? { transform: 'rotate(-45deg)', top: '-9px' } : {}
            }></div>
        </div>
        <div className={cn(styles.menu, isOpen && styles.close_menu)}>
          <Container className={styles.content}>
            <ul>
              {Navigation.map((nav: NavigationType, index: number) => (
                <li key={index}>
                  <XLink href={nav.path}>{nav.title}</XLink>
                  {nav.dropdown && (
                    <span>
                      <IconChevronDown />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Container>
        </div>
      </Container>
    </section>
  );
}
