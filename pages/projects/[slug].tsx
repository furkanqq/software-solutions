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
    section_one_description: string;
    section_one_description_textarea: string;
    section_two_description: string;
    section_two_description_textarea: string;
    section_one_title: string;
    section_two_title: string;
    meta_description: string;
    highlight_image: string;
    spot_text_two: string;
    parallax_text: string;
    key_words_two: string;
    features_two: string;
    little_three: string;
    parallax_img: string;
    sort: number | null;
    public_date: string;
    content_two: string;
    little_one: string;
    little_two: string;
    spot_text: string;
    filter_id: number;
    key_words: string;
    category: string;
    customer: string;
    features: string;
    location: string;
    content: string;
    title: string;
    slug: string;
    id: number;
  }[];
}

DetailPage.getInitialProps = async (context: any) => {
  const { slug } = context.query;

  const data = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + `/items/bs_projects?filter[slug][_eq]=${slug}`}`
  );

  return { data: data.data };
};

export default function DetailPage({ data }: IProps) {
  const project = data[0];

  const keyWords = project?.key_words
    .split(',')
    .map((feature) => feature.trim());

  const keyWordsTwo = project?.key_words_two
    .split(',')
    .map((feature) => feature.trim());

  console.log('first');

  return (
    <Layouts>
      <XHeader />
      <main>
        <section className={styles.banner}>
          <Container className={styles.content}>
            <div className={styles.title}>{project?.title}</div>
            {/* <div className={styles.detail}>
              <div className={styles.peace}>
                <span>Kategori</span>
                <span>{project?.category}</span>
              </div>
              <div className={styles.peace}>
                <span>Müşteri</span>
                <span>{project?.customer}</span>
              </div>
              <div className={styles.peace}>
                <span>Tarih</span>
                <span>{project?.public_date}</span>
              </div>
              <div className={styles.peace}>
                <span>Lokasyon</span>
                <span>{project?.location}</span>
              </div>
            </div> */}
            <div className={styles.line}>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </Container>
        </section>
        <section className={styles.image_part}>
          <XImage
            src={`${process.env.NEXT_PUBLIC_API_URL + '/assets/' + project.highlight_image}`}
            alt={'detail'}
            fill
          />
        </section>
        <section className={styles.detail_part}>
          <Container className={styles.content}>
            <div className={styles.text_part}>
              <div className={styles.title}>{project.section_one_title}</div>
              <div className={styles.description}>
                <p>{project.section_one_description}</p>
                <div className={styles.list}>
                  <ul>
                    {keyWords &&
                      keyWords
                        .slice(0, 4)
                        .map((key, index) => <li key={index}>{key}</li>)}
                  </ul>
                  <ul>
                    {keyWords &&
                      keyWords
                        .slice(4)
                        .map((key, index) => <li key={index}>{key}</li>)}
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.image_cards}>
              <div className={styles.card}>
                <XImage
                  src={`${process.env.NEXT_PUBLIC_API_URL + '/assets/' + project?.little_one}`}
                  alt={'first'}
                  fill
                />
              </div>
              <div className={styles.card}>
                <XImage
                  src={`${process.env.NEXT_PUBLIC_API_URL + '/assets/' + project?.little_two}`}
                  alt={'second'}
                  fill
                />
              </div>
              <div className={styles.card}>
                <XImage
                  src={`${process.env.NEXT_PUBLIC_API_URL + '/assets/' + project?.little_three}`}
                  alt={'third'}
                  fill
                />
              </div>
            </div>
            <div className={styles.just_textarea}>
              {project?.section_one_description_textarea}
            </div>

            <div
              style={
                {
                  '--parallax-img': `url(${process.env.NEXT_PUBLIC_API_URL + '/assets/' + project?.parallax_img})`
                } as React.CSSProperties
              }
              className={styles.attachment}></div>
            <div className={styles.just_text}>{project?.parallax_text}</div>
          </Container>
        </section>
        <section className={styles.info}>
          <Container>
            <div className={styles.text_part}>
              <div className={styles.title}>{project?.section_two_title}</div>
              <div className={styles.description}>
                <p>{project?.section_two_description}</p>
                <div className={styles.list}>
                  {keyWordsTwo.map((key, index) => (
                    <div key={index}>
                      <IconAngledArrow />
                      <span>{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.just_textarea}>
              {project?.section_two_description_textarea}
            </div>
          </Container>
        </section>

        <section className={styles.parallax_part}>
          <div className={styles.parallax_holder}>
            <div></div>
          </div>
          <div className={styles.text_part}>
            <div className={styles.text}>
              <h1>Aklınızda bir proje var mı? Hadi çalışalım.</h1>
              <XLink className={styles.circle_color} href={'/'}>
                <IconExploreArrow />
                <span>İletişime Geç</span>
              </XLink>
            </div>
          </div>
        </section>
      </main>
      <XFooter bgColor={'transparent'} />
    </Layouts>
  );
}
