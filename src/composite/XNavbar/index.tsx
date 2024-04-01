import styles from './index.module.scss';

import { IconChevronDown } from '@/src/assets/IconChevronDown';

import { XLink } from '@/src/components/XLink';

import { NavigationType, Navigation } from '@/src/config/nav.config';

export default function XNavbar() {
  return (
    <nav className={styles.navbar}>
      {Navigation.map((nav: NavigationType, index: number) => (
        <div className={styles.nav} key={index}>
          <XLink href={nav.path}>{nav.title}</XLink>
          {nav.dropdown && (
            <span>
              <IconChevronDown />
            </span>
          )}
          {nav.children !== null && (
            <div className={styles.child}>
              {nav.children.map((child, index) => (
                <XLink href={child.path} key={index}>
                  {child.title}
                </XLink>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}
