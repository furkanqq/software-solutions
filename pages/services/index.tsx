import styles from './index.module.scss';

import { IconExploreArrow } from '@/src/assets/IconExploreArrow';

import { XPageTitle } from '@/src/components/XPageTitle';
import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import XFooter from '@/src/composite/XFooter';
import XHeader from '@/src/composite/XHeader';

import {
  keyPhrasesType,
  PortfolioType,
  Portfolio
} from '@/src/config/portfolio.config';
import { OurServicesType, ServicesPage } from '@/src/config/service.config';
import { useEffect, useState, useRef } from 'react';
import Layouts from '@/src/layouts';

export default function Services() {
  const sectionRef = useRef<any>(null); // Ref oluştur
  const [src, setSrc] = useState('/assets/portfolio1.jpeg'); // Mesaj durumunu tutmak için state

  useEffect(() => {
    // Scroll olayını dinleyen fonksiyon
    const handleScroll = () => {
      if (sectionRef.current) {
        // Ref'i kullanarak ilgili DOM elemanını al
        const sectionRect = sectionRef?.current?.getBoundingClientRect();
        // Sayfanın yüksekliğini al
        const pageHeight = window.innerHeight;

        // Hangi metnin gösterileceğini belirle
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

    // Scroll olayını dinle
    window.addEventListener('scroll', handleScroll);

    // Component kaldırıldığında event'i temizle
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  console.log(src);
  return (
    <Layouts>
      <XHeader />
      <main>
        <XPageTitle
          title="We combine our passion for design and code."
          multiTitle="Buraya kısa bir bilgilendirme gelecek"
          marqueTitle="Hizmetler"
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
            <XImage src={src} alt={''} fill />
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
                  <div className={styles.circle_color}>
                    <IconExploreArrow />
                    <span>View Details</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <XFooter />
    </Layouts>
  );
}
