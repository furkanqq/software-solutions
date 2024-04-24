import styles from './index.module.scss';

import { XPageTitle } from '@/src/components/XPageTitle';
import Container from '@/src/components/XContainer';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import { nextFetcher } from '@/src/helpers/fetcherHelper';
import parse from 'html-react-parser';
import Layouts from '@/src/layouts';

interface IProps {
  data: {
    image: undefined | string;
    head_text: string;
    content: string;
    title: string;
  };
}

AboutPage.getInitialProps = async () => {
  const repoInfo = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_about'}`
  );
  return { data: repoInfo.data[0] };
};

export default function AboutPage({ data }: IProps) {
  return (
    <Layouts>
      <XHeader color="light" />
      <main>
        <XPageTitle
          marqueTitle={data?.title}
          title={data?.head_text}
          bgImage={data?.image}
          bgColor="white"
        />
        <section className={styles.wrapper}>
          <Container>
            <div className={styles.content}>{parse(data?.content)}</div>
          </Container>
        </section>
      </main>
      <XFooter bgColor="white" />
    </Layouts>
  );
}
