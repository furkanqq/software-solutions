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

import parse from 'html-react-parser';

import {
  ServicesType,
  BrandsType,
  Services,
  Brands
} from '@/src/config/brand.config';
import { OurServicesType, OurServices } from '@/src/config/service.config';
import { nextFetcher } from '@/src/helpers/fetcherHelper';
import Layouts from '@/src/layouts';
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

interface IPropsHome {
  two_feature_one_title: string;
  two_feature_two_title: string;
  two_feature_one_text: string;
  two_feature_one_icon: string;
  two_feature_two_text: string;
  two_feature_two_icon: string;
  marquee_services: string;
  one_sub_title: string;
  one_link_text: string;
  two_image_one: string;
  two_image_two: string;
  banner_title: string;
  banner_image: string;
  banner_text: string;
  one_title: string;
  two_title: string;
  one_text: string;
  one_link: string;
}

HomePage.getInitialProps = async () => {
  const blogDataFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_blog'}`
  );

  const blogData = blogDataFetch?.data;

  const homeSettingsFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_home_settings'}`
  );

  const homeData = homeSettingsFetch?.data[0];

  return { blogData, homeData };
};

interface IProps {
  blogData: IPropsBlog[];
  homeData: IPropsHome;
}

export default function HomePage({ blogData, homeData }: IProps) {
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
                  <XLink href={'/hizmetler'}>
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
              <div className={styles.image_holder}>
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
              {Brands.map((brand: BrandsType, index: number) => (
                <div className={styles.brand_item} key={index}>
                  <XImage
                    src={brand.icon}
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
              <span>FEATURED SERVICES</span>
              <h1>Our Services</h1>
            </div>
            <div className={styles.describe}>
              <p>
                Nemo enim ipsam voluptatem quia voluptas sit odit aut fugit, sed
                quia.
              </p>
            </div>
          </Container>
          <Container className={styles.card_part}>
            {OurServices.map((service: OurServicesType, index: number) => (
              <div className={styles.card} key={index}>
                <XImage
                  src={service.icon}
                  alt={'icon'}
                  height={52}
                  width={52}
                />
                <label>{service.label}</label>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                {service.more && (
                  <XLink href={'furkanilhan.com'} className={styles.more}>
                    <span>Read More</span>
                    <span>
                      <IconExploreArrow />
                    </span>
                  </XLink>
                )}
              </div>
            ))}
          </Container>
        </section>

        <XProjectCarousel />

        {/* <section className={styles.projects}>
          <div className={styles.sticky_part}>
            <div className={styles.items}>
              <div className={styles.item}>
                <div className={styles.thumbnail}></div>
                <div className={styles.information}>
                  <div className={styles.left}>
                    <div className={styles.category}>Web Tasarım</div>
                    <div className={styles.title}>
                      Balance Network | NFT Project
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.item}>
                <div className={styles.thumbnail}></div>
                <div className={styles.information}>
                  <div className={styles.left}>
                    <div className={styles.category}>Web Tasarım</div>
                    <div className={styles.title}>
                      Balance Network | NFT Project
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.item}>
                <div className={styles.thumbnail}></div>
                <div className={styles.information}>
                  <div className={styles.left}>
                    <div className={styles.category}>Web Tasarım</div>
                    <div className={styles.title}>
                      Balance Network | NFT Project
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

        <section className={styles.faq}>
          <Container>
            <div className={styles.faq_wrapper}>
              <div className={styles.tab_menu}>
                <ul>
                  <li className={styles.active}>
                    Web Tasarım
                    <span>
                      <IconChevronDown height={20} width={20} />
                    </span>
                  </li>
                  <li>Mobil Uygulama</li>
                  <li>Sosyal Medya Yönetimi</li>
                  <li>Dijital Pazarlama</li>
                  <li>Özel Yazılım Geliştirme</li>
                </ul>
              </div>
              <div className={styles.tab_content}>
                <div className={styles.items}>
                  <div className={cn(styles.item, styles.active)}>
                    <div className={styles.header}>
                      <div className={styles.title}>
                        Tasarım süreci nasıl ilerliyor?
                      </div>
                      <div className={styles.chevron}>
                        <IconChevronDown height={30} width={30} />
                      </div>
                    </div>
                    <div className={styles.content}>
                      Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                      metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının
                      bir hurufat numune kitabı oluşturmak üzere bir yazı
                      galerisini alarak karıştırdığı 1500 lerden beri endüstri
                      standardı sahte metinler olarak kullanılmıştır.
                    </div>
                  </div>

                  <div className={cn(styles.item)}>
                    <div className={styles.header}>
                      <div className={styles.title}>
                        Tasarım süreci nasıl ilerliyor?
                      </div>
                      <div className={styles.chevron}>
                        <IconChevronDown height={30} width={30} />
                      </div>
                    </div>
                    <div className={styles.content}>
                      Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                      metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının
                      bir hurufat numune kitabı oluşturmak üzere bir yazı
                      galerisini alarak karıştırdığı 1500 lerden beri endüstri
                      standardı sahte metinler olarak kullanılmıştır.
                    </div>
                  </div>

                  <div className={cn(styles.item)}>
                    <div className={styles.header}>
                      <div className={styles.title}>
                        Tasarım süreci nasıl ilerliyor?
                      </div>
                      <div className={styles.chevron}>
                        <IconChevronDown height={30} width={30} />
                      </div>
                    </div>
                    <div className={styles.content}>
                      Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır
                      metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının
                      bir hurufat numune kitabı oluşturmak üzere bir yazı
                      galerisini alarak karıştırdığı 1500 lerden beri endüstri
                      standardı sahte metinler olarak kullanılmıştır.
                    </div>
                  </div>
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
                blogData?.map((item: IPropsBlog, index: number) => (
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
