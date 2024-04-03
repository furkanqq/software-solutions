import styles from './index.module.scss';

import { XPageTitle } from '@/src/components/XPageTitle';
import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import Layouts from '@/src/layouts';

export default function AboutPage() {
  return (
    <Layouts>
      <XHeader />
      <main>
        <XPageTitle
          title="We combine our passion for design and code."
          multiTitle="Buraya kısa bir bilgilendirme gelecek"
          marqueTitle="Hakkımızda"
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
      </main>
      <XFooter color="white" />
    </Layouts>
  );
}
