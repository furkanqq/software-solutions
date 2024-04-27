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
import { nextFetcher } from '@/src/helpers/fetcherHelper';
import { useEffect, useState } from 'react';

interface IProps {
  color?: 'light' | 'dark';
}

interface ICategory {
  status: string;
  title: string;
  icon: string;
  id: number;
}

interface IServices {
  short_description: string;
  category_id: number;
  spot_text: string;
  content: string;
  status: string;
  title: string;
  image: string;
  icon: string;
}
export default function XNavbar(props: IProps) {
  const [categoryId, setCategoryId] = useState<number>(1);
  const [category, setCategory] = useState<ICategory[]>([]);
  const [services, setServices] = useState<IServices[]>([]);

  useEffect(() => {
    async function fetchData() {
      const data = await nextFetcher(
        `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_service_categories'}`
      );
      setCategory(data?.data);

      const dataServices = await nextFetcher(
        `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_services'}`
      );
      setServices(dataServices?.data);
    }

    fetchData();
  }, []);

  const [scrollY, setScrollY] = useState(0);
  const [headerBg, setHeaderBg] = useState<Boolean>(false);

  useEffect(() => {
    if (window?.innerWidth < 992) return;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 200;
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
    <nav
      className={cn(
        styles.navbar,
        !headerBg && styles.bgColor,
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
            category !== null &&
            nav.path === '/hizmetler' && (
              <div className={styles.big_child}>
                <div className={styles.options}>
                  {category.map(
                    (child, index: number) =>
                      child?.status === 'published' && (
                        <div
                          onClick={() => setCategoryId(child.id)}
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
                      )
                  )}
                </div>
                <div className={styles.contents_part}>
                  {services.map((item: IServices, index: number) => (
                    <div className={styles.contents} key={index}>
                      {categoryId === item.category_id && (
                        <div className={styles.content} key={index}>
                          <div className={styles.header}>
                            <div className={styles.title}>{item.title}</div>
                            {item.icon && (
                              <XImage
                                alt={item.title}
                                src={item.icon}
                                height={40}
                                width={40}
                              />
                            )}
                          </div>
                          <p>{item.short_description}</p>
                        </div>
                      )}
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
