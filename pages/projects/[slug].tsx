import styles from './slug.module.scss';

import { IconExploreArrow } from '@/src/assets/IconExploreArrow';
import { IconAngledArrow } from '@/src/assets/IconAngledArrow';

import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import { XLink } from '@/src/components/XLink';
import XFooter from '@/src/composite/XFooter';
import XHeader from '@/src/composite/XHeader';

import Layouts from '@/src/layouts';

export default function DetailPage() {
  return (
    <Layouts>
      <XHeader />
      <main>
        <section className={styles.banner}>
          <Container className={styles.content}>
            <div className={styles.title}>Luxury Glassware.</div>
            <div className={styles.detail}>
              <div className={styles.peace}>
                <span>Category</span>
                <span>DIGITAL DESIGN</span>
              </div>
              <div className={styles.peace}>
                <span>Customer</span>
                <span>UI-THEMEZ</span>
              </div>
              <div className={styles.peace}>
                <span>Date</span>
                <span>AUGUST 6, 2020</span>
              </div>
              <div className={styles.peace}>
                <span>Location</span>
                <span>MELBOURNE, AUSTRALIA</span>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.image_part}>
          <XImage src={'/assets/project-detail.png'} alt={'detail'} fill />
        </section>
        <section className={styles.detail_part}>
          <Container className={styles.content}>
            <div className={styles.text_part}>
              <div className={styles.title}>
                We create everything digital, printable and analytical.
              </div>
              <div className={styles.description}>
                <p>
                  Won’t seasons, appear days them stars replenish divided. All
                  second forth. Him place was seas man and gathering creepeth
                  called fly. Them sea place lights, midst bearing fourth above.
                </p>
                <div className={styles.list}>
                  <ul>
                    <li>Brand Development</li>
                    <li>Art Direction</li>
                    <li>Marketing Strategy</li>
                    <li>Mobile App Design</li>
                  </ul>
                  <ul>
                    <li>Brand Development</li>
                    <li>Art Direction</li>
                    <li>Marketing Strategy</li>
                    <li>Mobile App Design</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.image_cards}>
              <div className={styles.card}>
                <XImage src={'/assets/1.png'} alt={'first'} fill />
              </div>
              <div className={styles.card}>
                <XImage src={'/assets/2.png'} alt={'second'} fill />
              </div>
              <div className={styles.card}>
                <XImage src={'/assets/3.png'} alt={'third'} fill />
              </div>
            </div>
            <div className={styles.attachment}></div>
            <div className={styles.just_text}>
              Working collaboratively with brands and agencies worldwide.
              Designing and developing websites and applications with a focus on
              interaction, motion and visual experience.
            </div>
          </Container>
        </section>
        <section className={styles.info}>
          <Container>
            <div className={styles.text_part}>
              <div className={styles.title}>
                We create everything digital, printable and analytical.
              </div>
              <div className={styles.description}>
                <p>
                  Won’t seasons, appear days them stars replenish divided. All
                  second forth. Him place was seas man and gathering creepeth
                  called fly. Them sea place lights, midst bearing fourth above.
                </p>
                <div className={styles.list}>
                  <div>
                    <IconAngledArrow />
                    <span>Brand Development</span>
                  </div>
                  <div>
                    <IconAngledArrow />
                    <span>Art Direction</span>
                  </div>
                  <div>
                    <IconAngledArrow />
                    <span>Marketing Strategy</span>
                  </div>
                  <div>
                    <IconAngledArrow />
                    <span>Mobile App Design</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>
        <section className={styles.parallax_part}>
          <div className={styles.parallax_holder}>
            <div></div>
          </div>
          <div className={styles.text_part}>
            <div className={styles.text}>
              <h1>Have a project in mind? Let’s get to work.</h1>
              <XLink className={styles.circle_color} href={'/'}>
                <IconExploreArrow />
                <span>GET IN TOUCH</span>
              </XLink>
            </div>
          </div>
        </section>
      </main>
      <XFooter bgColor={'transparent'} />
    </Layouts>
  );
}
