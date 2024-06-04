import styles from './index.module.scss';
import cn from 'classnames';

import { IconExploreArrow } from '@/src/assets/IconExploreArrow';
import { IconFooterArrow } from '@/src/assets/IconFooterArrow';
import { IconChevronDown } from '@/src/assets/IconChevronDown';
import { IconExplore } from '@/src/assets/IconExplore';
import { IconPlay } from '@/src/assets/IconPlay';

import XProjectCarousel from '@/src/composite/XProjectCarousel';
import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import { XLink } from '@/src/components/XLink';
import XFooter from '@/src/composite/XFooter';
import XHeader from '@/src/composite/XHeader';

import { nextFetcher } from '@/src/helpers/fetcherHelper';
import parse from 'html-react-parser';
import Layouts from '@/src/layouts';
import { useState } from 'react';
import moment from 'moment';
import 'moment/locale/tr';

moment.locale('tr');

interface IPropsBlog {
  image: undefined | string;
  date_created: string;
  content: string;
  status: string;
  title: string;
  tags: string;
  slug: string;
}

interface IPropsBrands {
  image: string;
}

interface IPropsHome {
  two_feature_one_title: string;
  two_feature_two_title: string;
  two_feature_one_text: string;
  two_feature_one_icon: string;
  two_feature_two_text: string;
  two_feature_two_icon: string;
  services_sub_title: string;
  marquee_services: string;
  services_title: string;
  one_sub_title: string;
  one_link_text: string;
  two_image_one: string;
  two_image_two: string;
  services_text: string;
  banner_title: string;
  banner_image: string;
  banner_text: string;
  banner_link: string;
  one_title: string;
  two_title: string;
  one_text: string;
  one_link: string;
}

interface IPropsServices {
  short_description: string;
  image: string | null;
  sort: number | null;
  category_id: number;
  highlight: boolean;
  spot_text: string;
  content: string;
  status: string;
  title: string;
  icon: string;
  slug: string;
  id: number;
}

interface IPropsFaqFilter {
  title: string;
  id: number;
}

interface IPropsFaq {
  filter_id: number;
  content: string;
  title: string;
  id: number;
}

interface IPropsProjects {
  status: 'published' | 'archived' | 'draft';
  highlight_image: string;
  sort: number | null;
  highlight: boolean;
  spot_text: string;
  filter_id: number;
  image: string;
  title: string;
  id: number;
}

HomePage.getInitialProps = async () => {
  const faqFilterDataFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_faq_filter'}`
  );

  const faqFilterData = faqFilterDataFetch?.data;

  const faqDataFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_faq'}`
  );

  const faqData = faqDataFetch?.data;

  const blogDataFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_blog'}`
  );

  const blogData = blogDataFetch?.data;

  const servicesDataFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_services'}`
  );

  const servicesData = servicesDataFetch?.data;

  const brandsDataFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_brands'}`
  );

  const brandsData = brandsDataFetch?.data;

  const homeSettingsFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_home_settings'}`
  );

  const homeData = homeSettingsFetch?.data[0];

  const projectsDataFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_projects'}`
  );

  const projectsData = projectsDataFetch?.data;

  return {
    faqFilterData,
    servicesData,
    projectsData,
    brandsData,
    blogData,
    homeData,
    faqData
  };
};

interface IProps {
  faqFilterData: IPropsFaqFilter[];
  servicesData: IPropsServices[];
  projectsData: IPropsProjects[];
  brandsData: IPropsBrands[];
  blogData: IPropsBlog[];
  homeData: IPropsHome;
  faqData: IPropsFaq[];
}

export default function HomePage({
  faqFilterData,
  servicesData,
  projectsData,
  brandsData,
  blogData,
  homeData,
  faqData
}: IProps) {
  const [faqFilter, setFaqFilter] = useState<number>(0);
  const [faqFilterId, setFaqFilterId] = useState<number>(faqFilterData[0]?.id);
  const [faqContent, setFaqContent] = useState<number>(0);
  return (
    <Layouts>
      <main>
        <XHeader />
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h1>{parse(homeData?.banner_title)}</h1>
              <p>{homeData?.banner_text}</p>
              <div className={styles.watch}>
                <span>Watch</span>
                <IconPlay />
              </div>
            </div>
            <div className={styles.explore}>
              <div className={styles.image_holder}>
                <div className={styles.scale}>
                  <XLink href={homeData.banner_link}>
                    <IconExplore className={styles.icon_explore} />
                    <IconExploreArrow
                      className={styles.icon_explore_arrow}
                      height={28}
                      width={28}
                    />
                  </XLink>
                </div>
              </div>
              <div className={styles.banner_image}>
                <XImage
                  src={`${process.env.NEXT_PUBLIC_API_URL + '/assets/' + homeData?.banner_image}`}
                  alt={'banner-image'}
                  fill
                />
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.benefits}>
          <Container className={styles.content}>
            <div className={styles.title}>
              <span>{homeData?.one_sub_title}</span>
              <h1>{homeData?.one_title}</h1>
            </div>
            <div className={styles.describe}>
              <p>{homeData?.one_text}</p>
              <XLink href={homeData?.one_link}>
                {homeData?.one_link_text} <IconExploreArrow />
              </XLink>
            </div>
          </Container>
        </section>

        <section className={styles.about}>
          <Container className={styles.content}>
            <div className={styles.image_part}>
              <div
                style={{
                  '--bg-image': `url(${process.env.NEXT_PUBLIC_API_URL + '/assets/' + homeData?.two_image_two})`
                }}
                className={styles.image_holder}>
                <XImage
                  src={`${process.env.NEXT_PUBLIC_API_URL + '/assets/' + homeData?.two_image_one}`}
                  alt={'office'}
                  fill
                />
              </div>
            </div>
            <div className={styles.describe_part}>
              <h1>{homeData?.two_title}</h1>
              <div className={styles.properties}>
                <div className={styles.first}>
                  <XImage
                    src={`${process.env.NEXT_PUBLIC_API_URL + '/assets/' + homeData?.two_feature_one_icon}`}
                    alt={'first-icon'}
                    height={52}
                    width={52}
                  />
                  <div>
                    <h3>{homeData?.two_feature_one_title}</h3>
                    <p>{homeData?.two_feature_one_text}</p>
                  </div>
                </div>
                <div className={styles.first}>
                  <XImage
                    src={`${process.env.NEXT_PUBLIC_API_URL + '/assets/' + homeData?.two_feature_two_icon}`}
                    alt={'first-icon'}
                    height={52}
                    width={52}
                  />
                  <div>
                    <h3>{homeData?.two_feature_two_title}</h3>
                    <p>{homeData?.two_feature_two_text}</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.brands}>
          <div className={styles.slide}>
            <div className={styles.box}>
              {homeData?.marquee_services.split(',').map((tag, index) => (
                <div className={styles.item} key={index}>
                  <h2>
                    <span> {tag.trim()} </span>
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.brand}>
            <div className={styles.slider}>
              {brandsData.map((brand: IPropsBrands, index: number) => (
                <div className={styles.brand_item} key={index}>
                  <XImage
                    src={
                      process.env.NEXT_PUBLIC_API_URL +
                      '/assets/' +
                      brand?.image
                    }
                    alt={'icon'}
                    width={120}
                    height={32}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.benefits}>
          <Container className={styles.content}>
            <div className={styles.title}>
              <span>{homeData?.services_sub_title}</span>
              <h1>{homeData?.services_title}</h1>
            </div>
            <div className={styles.describe}>
              <p>{homeData?.services_text}</p>
            </div>
          </Container>

          <Container className={styles.card_part}>
            {servicesData.map(
              (service: IPropsServices, index: number) =>
                service?.highlight && (
                  <div className={styles.card} key={index}>
                    <XImage
                      src={
                        process.env.NEXT_PUBLIC_API_URL +
                        '/assets/' +
                        service?.icon
                      }
                      alt={'icon'}
                      height={52}
                      width={52}
                    />
                    <label>{service.spot_text}</label>
                    <h2>{service.title}</h2>
                    <p>{service.short_description}</p>
                    <XLink
                      href={'hizmet/' + service?.slug}
                      className={styles.more}>
                      <span>Bilgi Al</span>
                      <span>
                        <IconExploreArrow />
                      </span>
                    </XLink>
                  </div>
                )
            )}
          </Container>
        </section>

        <XProjectCarousel data={projectsData} />

        <section className={styles.faq}>
          <Container>
            <div className={styles.faq_wrapper}>
              <div className={styles.tab_menu}>
                <ul>
                  {faqFilterData?.map(
                    (item: IPropsFaqFilter, index: number) => (
                      <li
                        onClick={() => {
                          setFaqFilter(index);
                          setFaqFilterId(item?.id);
                        }}
                        className={cn(faqFilter === index && styles.active)}
                        key={index}>
                        {item?.title}{' '}
                        {faqFilter === index && (
                          <span>
                            <IconChevronDown height={20} width={20} />
                          </span>
                        )}
                      </li>
                    )
                  )}
                </ul>
              </div>
              <div className={styles.tab_content}>
                <div className={styles.items}>
                  {faqData
                    ?.filter((x) => x?.filter_id === faqFilterId)
                    .map((item: IPropsFaq, index: number) => (
                      <div
                        className={cn(
                          styles.item,
                          faqContent === index && styles.active
                        )}
                        onClick={() => {
                          setFaqContent(index);
                        }}
                        key={index}>
                        <div className={styles.header}>
                          <div className={styles.title}>{item?.title}</div>
                          <div className={styles.chevron}>
                            <IconChevronDown height={30} width={30} />
                          </div>
                        </div>
                        <div className={styles.content}>{item?.content}</div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.blog}>
          <Container>
            <div className={styles.top}>
              <div className={styles.section_title}>Blog.</div>
              <XLink className={styles.all_blog_button} href="/blog">
                Tüm İçerikleri Gör <IconFooterArrow height={16} width={16} />
              </XLink>
            </div>
            <div className={styles.items}>
              {blogData &&
                blogData?.slice(-4).map((item: IPropsBlog, index: number) => (
                  <div className={styles.item} key={index}>
                    <div className={styles.thumbnail}>
                      <XImage
                        src={
                          process.env.NEXT_PUBLIC_API_URL +
                          '/assets/' +
                          item?.image
                        }
                        alt="blog"
                        fill
                      />
                    </div>
                    <div className={styles.content}>
                      <div className={styles.date}>
                        {moment(item?.date_created).format('Do MMMM YYYY')}{' '}
                      </div>
                      <XLink
                        href={'/blog/' + item?.slug}
                        className={styles.title}>
                        {item?.title}
                      </XLink>
                      <div className={styles.tags}>
                        {item?.tags.split(',').map((tag, index) => (
                          <span className={styles.tag} key={index}>
                            {tag.trim()}{' '}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Container>
        </section>
      </main>
      <XFooter bgColor="white" />
    </Layouts>
  );
}
