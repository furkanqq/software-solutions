import styles from './index.module.scss';
import cn from 'classnames';

import { IconExploreArrow } from '@/src/assets/IconExploreArrow';
import { IconChevronDown } from '@/src/assets/IconChevronDown';

import { XPageTitle } from '@/src/components/XPageTitle';
import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import { XLink } from '@/src/components/XLink';
import XFooter from '@/src/composite/XFooter';
import XHeader from '@/src/composite/XHeader';

import {
  OurServicesType,
  ServicesPage,
  ServiceType,
  Service
} from '@/src/config/service.config';
import {
  keyPhrasesType,
  PortfolioType,
  Portfolio
} from '@/src/config/portfolio.config';
import { useEffect, useState, useRef } from 'react';
import Layouts from '@/src/layouts';

export default function Services() {
  const sectionRef = useRef<any>(null);
  const [src, setSrc] = useState<string>('/assets/portfolio1.jpeg');
  const [activeService, setActiveService] = useState<ServiceType>(Service[0]);

  // scroll takibi ile gorsel degistirme
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionRect = sectionRef.current.getBoundingClientRect();
        const pageHeight = window.innerHeight;
        if (window.scrollY >= sectionRect.top + pageHeight) {
          setSrc('/assets/portfolio1.jpeg');
        }
        if (window.scrollY >= sectionRect.top + 3 * pageHeight) {
          setSrc('/assets/portfolio2.jpeg');
        }
        if (window.scrollY >= sectionRect.top + 4 * pageHeight) {
          setSrc('/assets/portfolio3.jpeg');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Layouts>
      <XHeader />
      <main>
        <XPageTitle
          title="We combine our passion for design and code."
          marqueTitle="Hizmetler"
          bgColor={'white'}
        />
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
          </Container>
        </section>

        <section className={styles.portfolio} ref={sectionRef}>
          <div className={styles.image_holder}>
            <XImage alt={'image'} src={src} fill />
          </div>
          <div className={styles.content}>
            {Portfolio.map((content: PortfolioType, index: number) => (
              <div className={styles.part} key={index}>
                <label>{content.label}</label>
                <h1>{content.title}</h1>
                <p>{content.description}</p>
                {content.keyPhrases &&
                  content.keyPhrases.map(
                    (phrase: keyPhrasesType, index: number) => (
                      <span key={index}>{phrase.phrase}</span>
                    )
                  )}
                {content.details && (
                  <XLink className={styles.circle_color} href={'/'}>
                    <IconExploreArrow />
                    <span>View Details</span>
                  </XLink>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className={styles.service}>
          <Container className={styles.content}>
            <div className={styles.detail_part}>
              <div className={styles.image_holder}>
                <XImage
                  src={activeService.image}
                  alt={activeService.title}
                  fill
                />
              </div>
              <div className={styles.card}>
                <XImage
                  alt={activeService.title}
                  src={activeService.icon}
                  height={52}
                  width={52}
                />
                <p>{activeService.description}</p>
                {activeService.more && (
                  <div className={styles.more}>
                    <span>Read More</span>
                    <IconExploreArrow />
                  </div>
                )}
              </div>
            </div>
            <div className={styles.choose_part}>
              <div className={styles.first}>
                <span>SERVICES</span>
                <p>
                  We help you to go online and increase your conversion rate
                  Better design for your digital products.
                </p>
              </div>
              <div className={styles.second}>
                {Service.map((serve: ServiceType, index: number) => (
                  <div
                    onClick={() => setActiveService(serve)}
                    className={styles.serve}
                    key={index}>
                    <span>{serve.id}</span>
                    <h2>{serve.title}</h2>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.faq}>
          <Container>
            <div className={styles.faq_wrapper}>
              <h1>Watch the creative process behind our digital marketing.</h1>
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

        <section className={styles.parallax_part}>
          <div className={styles.parallax_holder}>
            <div></div>
          </div>
          <div className={styles.text_part}>
            <div className={styles.text}>
              <h1>Have a project in mind? Let’s get to work.</h1>
              <XLink className={styles.circle_color} href={'/'}>
                <IconExploreArrow />
                <span>GET IN TOUCH</span>
              </XLink>
            </div>
          </div>
        </section>
      </main>
      <XFooter bgColor="transparent" />
    </Layouts>
  );
}
