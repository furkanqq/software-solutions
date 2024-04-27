import styles from './slug.module.scss';

import { IconExploreArrow } from '@/src/assets/IconExploreArrow';

import { XPageTitle } from '@/src/components/XPageTitle';
import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import { XLink } from '@/src/components/XLink';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import { nextFetcher } from '@/src/helpers/fetcherHelper';
import parse from 'html-react-parser';
import Layouts from '@/src/layouts';

interface IProps {
  data: {
    image: undefined | string;
    date_created: string;
    content: string;
    status: string;
    title: string;
    tags: string;
    slug: string;
  };
}

DetailPage.getInitialProps = async (context: any) => {
  const { slug } = context.query;

  const data = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + `/items/bs_blog?filter[slug][_eq]=${encodeURIComponent(slug)}`}`
  );

  return { data: data.data[0] };
};

export default function DetailPage({ data }: IProps) {
  if (data === undefined) {
    if (typeof window !== 'undefined') {
      window.location.href = '/';
    }
  }

  return (
    <Layouts>
      <XHeader />
      <main>
        <XPageTitle bgColor={'transparent'} title={data?.title} />
        {data && (
          <section className={styles.wrapper}>
            <Container>
              <div className={styles.thumbnail}>
                <XImage
                  src={
                    process.env.NEXT_PUBLIC_API_URL + '/assets/' + data?.image
                  }
                  alt=""
                  fill
                />
              </div>
              <div className={styles.content}>
                {parse(data?.content)}
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
        )}

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
