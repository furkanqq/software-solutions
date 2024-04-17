import styles from './index.module.scss';

import { IconPhone } from '@/src/assets/IconPhone';
import { IconMail } from '@/src/assets/IconMail';
import { IconMap } from '@/src/assets/IconMap';

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
      <XHeader color="light" />
      <main>
        <XPageTitle
          title="Talep ve İsteklerinizi Bize Yazabilirsiniz."
          bgImage={'/assets/bannerImage2.jpg'}
          marqueTitle="İletişim"
          bgColor="white"
        />
        <section className={styles.wrapper}>
          <Container className={styles.container}>
            <div className={styles.info}>
              <div className={styles.describe}>
                <p>
                  Yeni bir projeniz mi var? sizi dinlemek için
                  sabırsızlanıyoruz. Formu doldurarak veya direkt arayarak
                  bizimle iletişime geçebilirsiniz.
                </p>
                <XLink className={styles.address} href="/">
                  <IconPhone height={30} width={30} />
                  +90 534 545 8176
                </XLink>
                <XLink className={styles.address} href="/">
                  <IconMap height={30} width={30} /> 19 Mayıs, 19 Mayıs Cd.
                  No:37, 34360 Şişli/İstanbul
                </XLink>
                <XLink className={styles.address} href="/">
                  <IconMail height={30} width={30} /> info@balance.software
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
