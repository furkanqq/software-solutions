import styles from './index.module.scss';

import { XPageTitle } from '@/src/components/XPageTitle';
import { XTeamCard } from '@/src/components/XTeamCard';
import Container from '@/src/components/XContainer';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import { nextFetcher } from '@/src/helpers/fetcherHelper';
import Layouts from '@/src/layouts';

interface IProps {
  data: {
    image: undefined | string;
    spot_text: string;
    title: string;
  };
}

TeamPage.getInitialProps = async () => {
  const data = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_team_area'}`
  );
  return { data: data.data[0] };
};

export default function TeamPage({ data }: IProps) {
  return (
    <Layouts>
      <XHeader color="light" />
      <main>
        <XPageTitle
          marqueTitle={data?.title}
          title={data?.spot_text}
          bgImage={data?.image}
          bgColor="white"
        />
        <section className={styles.wrapper}>
          <Container>
            <div className={styles.items}>
              <XTeamCard
                position="Web / Mobile Developer"
                fullName="Ümit Ünver"
              />
              <XTeamCard
                position="Web / Mobile Developer"
                fullName="Furkan Ilhan"
              />
              <XTeamCard
                position="Web / Mobile Developer"
                fullName="John Doe"
              />
            </div>
          </Container>
        </section>
      </main>
      <XFooter bgColor="white" />
    </Layouts>
  );
}
