import styles from './index.module.scss';

import { XPageTitle } from '@/src/components/XPageTitle';
import { XTextarea } from '@/src/components/XTextarea';
import Container from '@/src/components/XContainer';
import { XButton } from '@/src/components/XButton';
import { XInput } from '@/src/components/XInput';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import Layouts from '@/src/layouts';

export default function CareerPage() {
  return (
    <Layouts>
      <XHeader />
      <main>
        <XPageTitle
          title="We combine our passion for design and code."
          multiTitle="Buraya kısa bir bilgilendirme gelecek"
          marqueTitle="Kariyer"
          bgColor="white"
        />
        <section className={styles.wrapper}>
          <Container className={styles.container}>
            <div className={styles.info}>
              <div className={styles.title}>
                <span>BİZE KATILIN </span>
                <h1>Başvuru</h1>
              </div>
              <div className={styles.describe}>
                <p>
                  İşimizi yaparken, her yeni projeye ilk günkü heyecanımızla
                  başlıyor, başarılı olmak için bu heyecanı canlı tutmamız
                  gerektiğine inanıyoruz.
                </p>
                <p>
                  Müşterilerimizin karşılaşabilecekleri risklere optimum
                  çözümlerle cevap verebilmeyi ilke edinip, bizi diğerlerinden
                  ayıracak bir hizmet sunmayı taahhüt ediyoruz. Bu ilkeler
                  doğrultusunda ekibimize katılmak isteyenleri bekliyoruz.
                </p>
              </div>
            </div>
            <div className={styles.form}>
              <form action="">
                <div className={styles.row}>
                  <XInput label="Ad Soyad" type="text" />
                  <XInput label="E-Posta" type="text" />
                </div>
                <div className={styles.row_one}>
                  <XInput placeholder="E-Posta" type="file" label="CV" />
                </div>
                <div className={styles.row_one}>
                  <XTextarea label="Kısa bilgilendirme" />
                </div>
                <XButton className={styles.send_button} color="outline">
                  Gönder
                </XButton>
              </form>
            </div>
          </Container>
        </section>
      </main>
      <XFooter bgColor="white" />
    </Layouts>
  );
}
