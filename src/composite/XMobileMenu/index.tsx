import styles from './index.module.scss';
import cn from 'classnames';

import { IconChevronDown } from '@/src/assets/IconChevronDown';

import Container from '@/src/components/XContainer';
import { XLink } from '@/src/components/XLink';

import {
  NavigationType,
  ChildrenType,
  Navigation
} from '@/src/config/nav.config';
import { useEffect, useState } from 'react';
import React from 'react';

export default function XMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [chooseOption, setChooseOption] = useState('');

  useEffect(() => {
    const nav = Navigation.find((x) => x.big === true);
    if (nav !== undefined && nav.children !== null) {
      const child = nav.children[0];
      setChooseOption(child?.title);
    }
  }, []);

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
          <ul>
            {Navigation.map((nav: NavigationType, index: number) => (
              <li className={styles.nav} key={index}>
                {nav.dropdown ? (
                  <span>
                    <div>{nav.title}</div>
                    <IconChevronDown height={32} width={32} />
                  </span>
                ) : (
                  <span>
                    <XLink href={nav.path}>{nav.title}</XLink>
                  </span>
                )}
                {nav.children !== null && (
                  <div className={styles.child}>
                    {nav.children.map((child: ChildrenType, index: number) => (
                      <React.Fragment key={index}>
                        <XLink href={child.path}>{child.title}</XLink>
                        {child.children && (
                          <div>
                            {child.children.map((grand, index) => (
                              <div key={index}>{grand.title}</div>
                            ))}
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
