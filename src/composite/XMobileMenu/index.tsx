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
import React, { useState } from 'react';

export default function XMobile({
  isOpen,
  setIsOpen
}: {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null);

  return (
    <section className={styles.mobile}>
      <Container className={styles.content}>
        <div onClick={() => setIsOpen(!isOpen)} className={styles.hamburger}>
          <div style={isOpen ? { right: '-500px' } : {}}></div>
          <div style={isOpen ? { transform: 'rotate(45deg)' } : {}}></div>
          <div
            style={
              isOpen ? { transform: 'rotate(-45deg)', top: '-6.5px' } : {}
            }></div>
        </div>
        <div className={cn(styles.menu, isOpen && styles.close_menu)}>
          <ul>
            {Navigation.map((nav: NavigationType, index: number) => (
              <li className={styles.nav} key={index}>
                {nav.dropdown ? (
                  <span onClick={() => setActiveMenu(nav.title)}>
                    <div>{nav.title}</div>
                    <IconChevronDown height={32} width={32} />
                  </span>
                ) : (
                  <span>
                    <XLink href={nav.path}>{nav.title}</XLink>
                  </span>
                )}
                {nav.children !== null &&
                  (nav.children.length > 0 && activeMenu === nav.title ? (
                    <div className={cn(styles.child)}>
                      {nav.children.map(
                        (child: ChildrenType, index: number) => (
                          <div className={styles.item} key={index}>
                            {child.path === '' ? (
                              <div
                                onClick={() => setActiveSubMenu(child.title)}>
                                {child.title}
                              </div>
                            ) : (
                              <XLink
                                onClick={() => setActiveSubMenu(child.title)}
                                href={child.path}>
                                {child.title}
                              </XLink>
                            )}

                            {child.children &&
                            child.children.length > 0 &&
                            activeSubMenu === child.title ? (
                              <div className={styles.grand_child}>
                                {child.children.map((grand, index) => (
                                  <XLink href={grand.path} key={index}>
                                    {grand.title}
                                  </XLink>
                                ))}
                              </div>
                            ) : null}
                          </div>
                        )
                      )}
                    </div>
                  ) : (
                    <></>
                  ))}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
