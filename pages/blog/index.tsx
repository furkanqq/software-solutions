import styles from './index.module.scss';

import { XPageTitle } from '@/src/components/XPageTitle';
import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import { nextFetcher } from '@/src/helpers/fetcherHelper';
import Layouts from '@/src/layouts';

interface IProps {
  image: undefined | string;
  spot_text: string;
  title: string;
}

interface IPropsBlog {
  image: undefined | string;
  content: string;
  status: string;
  title: string;
  tags: string;
}

BlogPage.getInitialProps = async () => {
  const data = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_blog_area'}`
  );

  const blogAreaData = data.data[0];

  const dataBlogFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_blog'}`
  );
  const dataBlog = dataBlogFetch?.data;
  return { blogAreaData, dataBlog };
};

interface IBlogPageProps {
  dataBlog: IPropsBlog[];
  blogAreaData: IProps;
}

export default function BlogPage({ blogAreaData, dataBlog }: IBlogPageProps) {
  return (
    <Layouts>
      <XHeader color="light" />
      <main>
        <XPageTitle
          marqueTitle={blogAreaData?.title}
          title={blogAreaData?.spot_text}
          bgImage={blogAreaData?.image}
          bgColor="white"
        />

        <section className={styles.blog}>
          <Container>
            <div className={styles.items}>
              {dataBlog &&
                dataBlog?.map((item, index: number) => (
                  <div className={styles.item} key={index}>
                    <div className={styles.thumbnail}>
                      <XImage
                        src={
                          process.env.NEXT_PUBLIC_API_URL +
                          '/assets/' +
                          item?.image
                        }
                        alt="blog"
                        fill
                      />
                    </div>
                    <div className={styles.content}>
                      <div className={styles.date}>24 Mart 2024</div>
                      <div className={styles.title}>{item?.title}</div>
                      <div className={styles.tags}>
                        <span>React</span>
                        <span>Mobil Uygulama</span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </Container>
        </section>
      </main>
      <XFooter bgColor="white" />
    </Layouts>
  );
}
