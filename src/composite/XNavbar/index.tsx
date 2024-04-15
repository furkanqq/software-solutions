import styles from './index.module.scss';
import cn from 'classnames';

import { IconChevronDown } from '@/src/assets/IconChevronDown';

import { XImage } from '@/src/components/XImage';
import { XLink } from '@/src/components/XLink';

import {
  NavigationType,
  ChildrenType,
  Navigation
} from '@/src/config/nav.config';
import { useEffect, useState } from 'react';

interface IProps {
  color?: 'light' | 'dark';
}

export default function XNavbar(props: IProps) {
  const [chooseOption, setChooseOption] = useState('');

  useEffect(() => {
    const nav = Navigation.find((x) => x.big === true);
    if (nav !== undefined && nav.children !== null) {
      const child = nav.children[0];
      setChooseOption(child?.title);
    }
  }, []);

  return (
    <nav
      className={cn(
        styles.navbar,
        props.color === 'light' && styles.navbar_light
      )}>
      {Navigation.map((nav: NavigationType, index: number) => (
        <div className={styles.nav} key={index}>
          <XLink href={nav.path}>{nav.title}</XLink>
          {nav.dropdown && (
            <span>
              <IconChevronDown />
            </span>
          )}
          {nav.children !== null && !nav.big ? (
            <div className={styles.child}>
              {nav.children.map((child: ChildrenType, index: number) => (
                <XLink href={child.path} key={index}>
                  {child.title}
                </XLink>
              ))}
            </div>
          ) : (
            nav.children !== null && (
              <div className={styles.big_child}>
                <div className={styles.options}>
                  {nav.children.map((child, index) => (
                    <div
                      onClick={() => setChooseOption(child.title)}
                      className={styles.option}
                      key={index}>
                      <XImage
                        src={'/assets/cloud.png'}
                        alt={'Asd'}
                        height={40}
                        width={40}
                      />
                      <div className={styles.title}>{child.title}</div>
                    </div>
                  ))}
                </div>
                <div className={styles.contents_part}>
                  {nav.children.map((bigChild: ChildrenType, index: number) => (
                    <div className={styles.contents} key={index}>
                      {chooseOption === bigChild.title &&
                        bigChild.children?.map((child, index) => (
                          <div className={styles.content} key={index}>
                            <div className={styles.header}>
                              <div className={styles.title}>{child.title}</div>
                              <XImage
                                alt={child.title}
                                src={child.icon}
                                height={40}
                                width={40}
                              />
                            </div>
                            <p>{child.description}</p>
                          </div>
                        ))}
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      ))}
    </nav>
  );
}