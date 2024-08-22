import styles from './index.module.scss';

import { IconFooterArrow } from '@/src/assets/IconFooterArrow';

import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import { XLink } from '@/src/components/XLink';
import { nextFetcher } from '@/src/helpers/fetcherHelper';
import { useEffect, useState } from 'react';

type propsType = {
  bgColor: string;
};

interface IServices {
  short_description: string;
  category_id: number;
  spot_text: string;
  content: string;
  status: string;
  title: string;
  image: string;
  icon: string;
  slug: string;
}

export default function XFooter(props: propsType) {
  const [services, setServices] = useState<IServices[]>([]);

  useEffect(() => {
    async function fetchData() {
      const dataServices = await nextFetcher(
        `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_services'}`
      );
      setServices(dataServices?.data);
    }

    fetchData();
  }, []);

  return (
    <footer
      style={{
        backgroundColor:
          props?.bgColor === 'white'
            ? 'rgba(var(--colors-light))'
            : props?.bgColor
      }}
      className={styles.footer}>
      <Container>
        <XLink href="/iletisim">
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
              <div className={styles.title}>Hizmetler</div>
              <ul>
                {services.map(
                  (item: IServices, index: number) =>
                    index % 2 !== 0 && (
                      <li key={index}>
                        <XLink href={'/hizmetler/' + item?.slug} key={index}>
                          {item.title}
                        </XLink>
                      </li>
                    )
                )}
              </ul>
            </div>
            <div className={styles.widget}>
              <div className={styles.title}>Sosyal Medya</div>
              <ul>
                <li>
                  <XLink
                    href="https://www.facebook.com/BalanceNetworkOfficial"
                    target="_blank">
                    Facebook
                  </XLink>
                </li>
                <li>
                  <XLink
                    href="https://www.instagram.com/balancenetwork/"
                    target="_blank">
                    Instagram
                  </XLink>
                </li>
                <li>
                  <XLink href="https://x.com/balancenetwork_" target="_blank">
                    X
                  </XLink>
                </li>
                <li>
                  <XLink
                    href="https://www.linkedin.com/company/balancenetwork/mycompany/"
                    target="_blank">
                    Linkedin
                  </XLink>
                </li>
              </ul>
            </div>
            <div className={styles.widget}>
              <div className={styles.title}>İletişim</div>
              <ul>
                <li>
                  <XLink href="mailto:hello@balance.software" target="_blank">
                    hello@balance.software
                  </XLink>
                </li>
              </ul>
            </div>
            <div className={styles.widget}>
              <div className={styles.title}>Adres</div>
              <ul>
                <li>
                  <XLink
                    href="https://www.google.com/maps/place/UBM+Plaza/@41.0581472,28.9912873,17z/data=!3m2!4b1!5s0x14cab70422955527:0x6f26b7f8f460c7ac!4m6!3m5!1s0x14cab7069d1cbe57:0x95a1f32376644bed!8m2!3d41.0581472!4d28.9938622!16s%2Fg%2F1t_ryt1b?entry=ttu"
                    target="_blank">
                    19 Mayıs Mahallesi 19 Mayıs Caddesi UBM Plaza no:37/21 34360
                    Şişli/İstanbul
                  </XLink>
                </li>
              </ul>
            </div>
          </div>
        </Container>
        <div className={styles.sub_footer}>
          <Container>
            <div className={styles.sub_footer_container}>
              <div className={styles.footer_logo}>
                <XImage
                  src="/assets/balance_light.svg"
                  alt="balance-footer-logo"
                  fill
                />
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
