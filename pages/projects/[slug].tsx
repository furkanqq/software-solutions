import styles from './slug.module.scss';

import { IconExploreArrow } from '@/src/assets/IconExploreArrow';
import { IconAngledArrow } from '@/src/assets/IconAngledArrow';

import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import { XLink } from '@/src/components/XLink';
import XFooter from '@/src/composite/XFooter';
import XHeader from '@/src/composite/XHeader';

import { nextFetcher } from '@/src/helpers/fetcherHelper';
import Layouts from '@/src/layouts';

interface IProps {
  data: {
    status: 'published' | 'archived' | 'draft';
    meta_description: string;
    spot_text_two: string;
    features_two: string;
    sort: number | null;
    public_date: string;
    content_two: string;
    spot_text: string;
    filter_id: number;
    category: string;
    customer: string;
    features: string;
    location: string;
    content: string;
    title: string;
    slug: string;
    id: number;
  };
}

DetailPage.getInitialProps = async (context: any) => {
  const { slug } = context.query;

  const data = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + `/items/bs_projects?filter[slug][_eq]=${slug}`}`
  );

  return { data: data };
};

export default function DetailPage({ data }: IProps) {
  return (
    <Layouts>
      <XHeader />
      <main>
        <section className={styles.banner}>
          <Container className={styles.content}>
            <div className={styles.title}>{data?.title}.</div>
            <div className={styles.detail}>
              <div className={styles.peace}>
                <span>Kategori</span>
                <span>{data?.category}</span>
              </div>
              <div className={styles.peace}>
                <span>Müşteri</span>
                <span>{data?.customer}</span>
              </div>
              <div className={styles.peace}>
                <span>Tarih</span>
                <span>{data?.public_date}</span>
              </div>
              <div className={styles.peace}>
                <span>Lokasyon</span>
                <span>{data?.location}</span>
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
