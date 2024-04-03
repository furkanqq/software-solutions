import styles from './slug.module.scss';

import { IconExploreArrow } from '@/src/assets/IconExploreArrow';

import { XPageTitle } from '@/src/components/XPageTitle';
import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import { XLink } from '@/src/components/XLink';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import Layouts from '@/src/layouts';

export default function DetailPage() {
  return (
    <Layouts>
      <XHeader />
      <main>
        <XPageTitle
          title="Google Play Store'da uygulama nasıl yayınlanır?"
          multiTitle="Buraya kısa bir bilgilendirme gelecek"
          bgColor={'transparent'}
        />
        <section className={styles.wrapper}>
          <Container>
            <div className={styles.thumbnail}>
              <XImage src="/assets/blog-thumbnail.jpeg" alt="" fill />
            </div>
            <div className={styles.content}>
              <p>
                {`  Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin
                edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
                Virginia'daki Hampden-Sydney College'dan Latince profesörü
                Richard McClintock, bir Lorem Ipsum pasajında geçen ve
                anlaşılması en güç sözcüklerden biri olan 'consectetur'
                sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin
                bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45
                tarihinde kaleme alınan "de Finibus Bonorum et Malorum" (İyi ve
                Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı
                bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir
                tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum
                pasajının ilk satırı olan "Lorem ipsum dolor sit amet" 1.10.32
                sayılı bölümdeki bir satırdan gelmektedir.`}
              </p>

              <p>
                {`Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden
                oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin
                edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır.
                Virginia'daki Hampden-Sydney College'dan Latince profesörü
                Richard McClintock, bir Lorem Ipsum pasajında geçen ve
                anlaşılması en güç sözcüklerden biri olan 'consectetur'
                sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin
                bir kaynağa ulaşmıştır.`}
              </p>
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
      </main>
      <XFooter bgColor="white" />
    </Layouts>
  );
}
