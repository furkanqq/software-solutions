import styles from './index.module.scss';
import cn from 'classnames';

import { IconFooterArrow } from '@/src/assets/IconFooterArrow';
import { IconExplore } from '@/src/assets/IconExplore';
import { IconPlay } from '@/src/assets/IconPlay';
import { IconChevronDown } from '@/src/assets/IconChevronDown';

import XProjectCarousel from '@/src/composite/XProjectCarousel';
import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import XFooter from '@/src/composite/XFooter';
import XHeader from '@/src/composite/XHeader';

import Layouts from '@/src/layouts';
import { useState } from 'react';
import { IconExploreArrow } from '@/src/assets/IconExploreArrow';
import { XLink } from '@/src/components/XLink';


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
                Through our years of experience, we've also learned that while
                each channel has its own set of advantages.
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
              <XLink href={'furkanilhan.com'}>View All</XLink>``
            </div>
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
