import styles from './index.module.scss';

import { XPageTitle } from '@/src/components/XPageTitle';
import { XTextarea } from '@/src/components/XTextarea';
import Container from '@/src/components/XContainer';
import { XButton } from '@/src/components/XButton';
import { XInput } from '@/src/components/XInput';
import { XLink } from '@/src/components/XLink';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import Layouts from '@/src/layouts';

export default function ContactPage() {
  return (
    <Layouts>
      <XHeader />
      <main>
        <XPageTitle
          title="We combine our passion for design and code."
          subTitle="Buraya kısa bir bilgilendirme gelecek"
          marqueTitle="İletişim"
          bgColor="white"
        />
        <section className={styles.wrapper}>
          <Container className={styles.container}>
            <div className={styles.info}>
              <div className={styles.title}>
                <span>İletişim </span>
                <h1>Bizimle İletişime Geçebilirsiniz.</h1>
              </div>
              <div className={styles.describe}>
                <p>
                  Yeni bir projeniz mi var? sizi dinlemek için
                  sabırsızlanıyoruz. Formu doldurarak veya direkt arayarak
                  bizimle iletişime geçebilirsiniz.
                </p>
                <XLink className={styles.phone} href="/">
                  +90 534 545 8176
                </XLink>
                <XLink className={styles.address} href="/">
                  19 Mayıs, 19 Mayıs Cd. No:37, 34360 Şişli/İstanbul
                </XLink>
                <XLink className={styles.address} href="/">
                  info@balance.software
                </XLink>
              </div>
            </div>
            <div className={styles.form}>
              <form action="">
                <div className={styles.row}>
                  <XInput label="Ad Soyad" type="text" />
                  <XInput label="E-Posta" type="text" />
                </div>
                <div className={styles.row_one}>
                  <XInput label="Telefon" type="text" />
                </div>
                <div className={styles.row_one}>
                  <XInput label="Konu" type="text" />
                </div>
                <div className={styles.row_one}>
                  <XTextarea label="Mesajınız" />
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
