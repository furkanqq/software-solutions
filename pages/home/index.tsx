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

import {
  ServicesType,
  BrandsType,
  Services,
  Brands
} from '@/src/config/brand.config';
import { OurServicesType, OurServices } from '@/src/config/service.config';
import Layouts from '@/src/layouts';

export default function HomePage() {
  return (
    <Layouts>
      <main>
        <XHeader />
        <section className={styles.banner}>
          <Container className={styles.container}>
            <div className={styles.content}>
              <h1>
                HIGH END
                <br /> <span>CREATIVE</span> AGENCY
              </h1>
              <p>
                {`   Through our years of experience, we've also learned that while
                each channel has its own set of advantages.`}
              </p>
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
                  src={'/assets/bannerImage.jpeg'}
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
              <span>OUR BENEFITS</span>
              <h1>Our Team of Dedicated Digital Professionals.</h1>
            </div>
            <div className={styles.describe}>
              <p>
                Through our years of experience, we’ve also learned that while
                each channel has its own set of advantages, they all work best
                when strategically paired with other channels.
              </p>
              <XLink href={'furkanilhan.com'}>
                View All Blabla <IconExploreArrow />
              </XLink>
            </div>
          </Container>
        </section>

        <section className={styles.about}>
          <Container className={styles.content}>
            <div className={styles.image_part}>
              <div className={styles.image_holder}>
                <XImage src={'/assets/office.jpeg'} alt={'office'} fill />
              </div>
            </div>
            <div className={styles.describe_part}>
              <h1>Unlock Revenue Growth for Your Business.</h1>
              <div className={styles.properties}>
                <div className={styles.first}>
                  <XImage
                    src={'/assets/first.png'}
                    alt={'first-icon'}
                    height={52}
                    width={52}
                  />
                  <div>
                    <h3>High Standerd</h3>
                    <p>
                      Adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div className={styles.first}>
                  <XImage
                    src={'/assets/second.png'}
                    alt={'first-icon'}
                    height={52}
                    width={52}
                  />
                  <div>
                    <h3>Ease of Communication</h3>
                    <p>
                      Adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        <section className={styles.brands}>
          <div className={styles.slide}>
            <div className={styles.box}>
              {Services.map((service: ServicesType, index: number) => (
                <div className={styles.item} key={index}>
                  <h2>
                    <span>{service.title}</span>
                  </h2>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.brand}>
            {Brands.map((brand: BrandsType, index: number) => (
              <div className={styles.brand_item} key={index}>
                <XImage src={brand.icon} alt={'icon'} width={120} height={32} />
              </div>
            ))}
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
              <div className={styles.all_blog_button}>
                Tüm İçerikleri Gör <IconFooterArrow height={16} width={16} />
              </div>
            </div>
            <div className={styles.items}>
              <div className={styles.item}>
                <div className={styles.thumbnail}>
                  <XImage src="/assets/blog-thumbnail.jpeg" alt="blog" fill />
                </div>
                <div className={styles.content}>
                  <div className={styles.date}>24 Mart 2024</div>
                  <div className={styles.title}>
                    Mobil uygulama geliştirmede React Native
                  </div>
                  <div className={styles.tags}>
                    <span>React</span>
                    <span>Mobil Uygulama</span>
                  </div>
                </div>
              </div>
              <div className={styles.item}>
                <div className={styles.thumbnail}>
                  <XImage src="/assets/blog-thumbnail.jpeg" alt="blog" fill />
                </div>
                <div className={styles.content}>
                  <div className={styles.date}>24 Mart 2024</div>
                  <div className={styles.title}>
                    Mobil uygulama geliştirmede React Native
                  </div>
                  <div className={styles.tags}>
                    <span>React</span>
                    <span>Mobil Uygulama</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
      </main>
      <XFooter />
    </Layouts>
  );
}
