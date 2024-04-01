import styles from './index.module.scss';

import { IconFooterArrow } from '@/src/assets/IconFooterArrow';

import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import XFooter from '@/src/composite/XFooter';
import Layouts from '@/src/layouts';
import XHeader from '@/src/composite/XHeader';

export default function HomePage() {
  return (
    <Layouts>
      <main>
        <XHeader />
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
