import styles from './index.module.scss';

import { IconExploreArrow } from '@/src/assets/IconExploreArrow';

import { XPageTitle } from '@/src/components/XPageTitle';
import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import { XLink } from '@/src/components/XLink';
import XFooter from '@/src/composite/XFooter';
import XHeader from '@/src/composite/XHeader';

import { PortfolioType } from '@/src/config/portfolio.config';
import { nextFetcher } from '@/src/helpers/fetcherHelper';
import { useEffect, useState, useRef } from 'react';
import Layouts from '@/src/layouts';

interface PortfolioPartType {
  data: {
    short_description: string;
    category_id: number;
    highlight: boolean;
    spot_text: string;
    tag_line: string;
    content: string;
    status: string;
    image: string;
    title: string;
    icon: string;
    slug: string;
    id: number;
    sort: null;
  }[];
}

Services.getInitialProps = async () => {
  const data = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_service_area'}`
  );

  const serviceArea = data.data[0];

  const services = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_services'}`
  );

  const servicesData = services;

  const dataCategories = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_service_categories'}`
  );

  const dataCategory = dataCategories;
  return { dataCategory, servicesData, serviceArea };
};

export default function Services({
  dataCategory,
  servicesData,
  serviceArea
}: {
  servicesData: PortfolioPartType;
  dataCategory: any;
  serviceArea: any;
}) {
  // const sectionRef = useRef<HTMLInputElement>(null);
  const [activeService, setActiveService] = useState<any>(
    dataCategory?.data[0]
  );

  console.log(servicesData, 'servicesData');

  const sectionRef = useRef<HTMLElement | null>(null);
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.1,
      root: null
    };

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry: IntersectionObserverEntry) => {
        if (entry.isIntersecting) {
          const index = parseInt(
            entry.target.getAttribute('data-index') || '0',
            10
          );
          setVisibleIndex(index);
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);
    const elements = document.querySelectorAll<HTMLElement>(`.${styles.part}`);
    elements.forEach((el: HTMLElement, index: number) => {
      el.setAttribute('data-index', index.toString());
      observer.observe(el);
    });

    return () => {
      elements.forEach((el: HTMLElement) => observer.unobserve(el));
    };
  }, []);

  return (
    <Layouts>
      <XHeader />
      <main>
        <XPageTitle
          marqueTitle={serviceArea.banner_slide}
          title={serviceArea.banner_title}
          bgColor={'white'}
        />
        <section className={styles.benefits}>
          <Container className={styles.content}>
            <div className={styles.title}>
              <span>{serviceArea.benefits_tag}</span>
              <h1>{serviceArea.benefits_title}</h1>
            </div>
            <div className={styles.describe}>
              <p>{serviceArea.benefits_description}</p>
            </div>
          </Container>
          {/* <Container className={styles.card_part}>
            {ServicesPage.map((service: OurServicesType, index: number) => (
              <div className={styles.card} key={index}>
                <XImage
                  src={service.icon}
                  alt={'icon'}
                  height={52}
                  width={52}
                />
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            ))}
          </Container> */}
        </section>

        <section className={styles.portfolio} ref={sectionRef}>
          <div className={styles.image_holder}>
            {visibleIndex !== null &&
              servicesData?.data[visibleIndex]?.image && (
                <XImage
                  src={
                    process.env.NEXT_PUBLIC_API_URL +
                    '/assets/' +
                    servicesData.data[visibleIndex].image
                  }
                  alt={'image'}
                  fill
                />
              )}
          </div>
          <div className={styles.content}>
            {servicesData?.data
              ?.slice(0, 3)
              .map((content: PortfolioPartType['data'][0], index: number) => (
                <div className={styles.part} key={index}>
                  <label></label>
                  <h1>{content.title}</h1>
                  <p>{content.short_description}</p>
                  {content.tag_line &&
                    content.tag_line
                      .split(',')
                      .map((feature: string) => feature.trim())
                      .map((phrase: string, index: number) => (
                        <span key={index}>{phrase}</span>
                      ))}
                  <XLink className={styles.circle_color} href={'/'}>
                    <IconExploreArrow />
                    <span>Görüntüle</span>
                  </XLink>
                </div>
              ))}
          </div>
        </section>

        <section className={styles.service}>
          <Container className={styles.content}>
            <div className={styles.detail_part}>
              <div className={styles.image_holder}>
                <XImage
                  src={
                    process.env.NEXT_PUBLIC_API_URL +
                    '/assets/' +
                    activeService?.img
                  }
                  alt={activeService?.title}
                  fill
                />
              </div>
              <div className={styles.card}>
                <XImage
                  src={
                    process.env.NEXT_PUBLIC_API_URL +
                    '/assets/' +
                    activeService?.icon
                  }
                  alt={activeService?.title}
                  height={52}
                  width={52}
                />
                <div className={styles.hr}></div>
                <p>{activeService?.description}</p>
              </div>
            </div>
            <div className={styles.choose_part}>
              <div className={styles.first}>
                <span>{serviceArea.services_tag}</span>
                <p>{serviceArea.service_info}</p>
              </div>
              <div className={styles.second}>
                {/* {Service.map((serve: ServiceType, index: number) => (
                  <div
                    onClick={() => setActiveService(serve)}
                    className={styles.serve}
                    key={index}>
                    <span>{serve.id}</span>
                    <h2>{serve.title}</h2>
                  </div>
                ))} */}
                {dataCategory &&
                  dataCategory?.data.map((category: any, index: number) => (
                    <div
                      onClick={() => setActiveService(category)}
                      className={styles.serve}
                      key={index}>
                      <span>{category._id}</span>
                      <h2>{category.title}</h2>
                    </div>
                  ))}
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.portfolio} ref={sectionRef}>
          <div className={styles.content}>
            {servicesData?.data
              ?.slice(3, 6)
              .map((content: PortfolioPartType['data'][0], index: number) => (
                <div className={styles.part} key={index}>
                  <label></label>
                  <h1>{content.title}</h1>
                  <p>{content.short_description}</p>
                  {content.tag_line &&
                    content.tag_line
                      .split(',')
                      .map((feature: string) => feature.trim())
                      .map((phrase: string, index: number) => (
                        <span key={index}>{phrase}</span>
                      ))}
                  <XLink className={styles.circle_color} href={'/'}>
                    <IconExploreArrow />
                    <span>Görüntüle</span>
                  </XLink>
                </div>
              ))}
          </div>
          <div className={styles.image_holder}>
            {visibleIndex !== null &&
              servicesData?.data[visibleIndex]?.image && (
                <XImage
                  src={
                    process.env.NEXT_PUBLIC_API_URL +
                    '/assets/' +
                    servicesData.data[visibleIndex].image
                  }
                  alt={'image'}
                  fill
                />
              )}
          </div>
        </section>

        <section className={styles.faq}>
          <Container>
            <div className={styles.faq_wrapper}>
              <h1>{serviceArea.tagline}</h1>
              {/* <div className={styles.tab_content}>
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
              </div> */}
            </div>
          </Container>
        </section>

        <section className={styles.parallax_part}>
          <div className={styles.parallax_holder}>
            <div></div>
          </div>
          <div className={styles.text_part}>
            <div className={styles.text}>
              <h1>Hayalinizdeki projeler hayata geçsin. Hadi başlayalım.</h1>
              <XLink className={styles.circle_color} href={'/'}>
                <IconExploreArrow />
                <span>İletişime Geç</span>
              </XLink>
            </div>
          </div>
        </section>
      </main>
      <XFooter bgColor="transparent" />
    </Layouts>
  );
}
