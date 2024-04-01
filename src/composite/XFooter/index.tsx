import styles from './index.module.scss';

import { IconFooterArrow } from '@/src/assets/IconFooterArrow';

import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import { XLink } from '@/src/components/XLink';

export default function XFooter() {
  return (
    <footer className={styles.footer}>
      <Container>
        <XLink href="/">
          <div className={styles.footer_offer}>
            Bizimle <span>Tanışın</span>
            <IconFooterArrow className={styles.icon} />
          </div>
        </XLink>
      </Container>
      <div className={styles.footer_container}>
        <Container>
          <div className={styles.top_footer}>
            <div className={styles.widget}>
              <div className={styles.title}>Adres</div>
              <ul>
                <li>
                  <XLink href="/">
                    19 Mayıs, 19 Mayıs Cd. No:37, 34360 Şişli/İstanbul
                  </XLink>
                </li>
              </ul>
            </div>
            <div className={styles.widget}>
              <div className={styles.title}>İletişim</div>
              <ul>
                <li>
                  <XLink href="/">info@balance.software</XLink>
                </li>
                <li>
                  <XLink href="/">0534 123 45 67</XLink>
                </li>
              </ul>
            </div>
            <div className={styles.widget}>
              <div className={styles.title}>Sosyal Medya</div>
              <ul>
                <li>
                  <XLink href="/">Facebook</XLink>
                </li>
                <li>
                  <XLink href="/">Instagram</XLink>
                </li>
                <li>
                  <XLink href="/">Twitter</XLink>
                </li>
                <li>
                  <XLink href="/">Linkedin</XLink>
                </li>
              </ul>
            </div>
            <div className={styles.widget}>
              <div className={styles.title}>Hizmetler</div>
              <ul>
                <li>
                  <XLink href="/">Web Tasarım</XLink>
                </li>
                <li>
                  <XLink href="/">Mobil Uygulama</XLink>
                </li>
                <li>
                  <XLink href="/">E-Ticaret</XLink>
                </li>
                <li>
                  <XLink href="/">Google Reklamları</XLink>
                </li>
                <li>
                  <XLink href="/">Grafik ve Logo Tasarımı</XLink>
                </li>
                <li>
                  <XLink href="/">Kurumsal Kimlik Çalışmaları</XLink>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className={styles.sub_footer}>
          <Container>
            <div className={styles.sub_footer_container}>
              <div className={styles.footer_logo}>
                <XImage alt="balance-footer-logo" src="/assets/logo.png" fill />
              </div>
              <div className={styles.copyright}>
                2024 © All rights reserved by Balance Software.
              </div>
            </div>
          </Container>
        </div>
      </div>
    </footer>
  );
}
