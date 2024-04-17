import styles from './index.module.scss';

import { XPageTitle } from '@/src/components/XPageTitle';
import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import Layouts from '@/src/layouts';

export default function BlogPage() {
  return (
    <Layouts>
      <XHeader />
      <main>
        <XPageTitle
          title="We combine our passion for design and code."
          bgColor={'transparent'}
          marqueTitle="Blog"
        />

        <section className={styles.blog}>
          <Container>
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
      <XFooter bgColor="white" />
    </Layouts>
  );
}
