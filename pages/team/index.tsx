import styles from './index.module.scss';

import { XPageTitle } from '@/src/components/XPageTitle';
import { XTeamCard } from '@/src/components/XTeamCard';
import Container from '@/src/components/XContainer';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import { nextFetcher } from '@/src/helpers/fetcherHelper';
import Layouts from '@/src/layouts';

interface IProps {
  image: undefined | string;
  spot_text: string;
  title: string;
}

interface IPropsTeam {
  image: undefined | string;
  full_name: string;
  status: string;
  title: string;
}

TeamPage.getInitialProps = async () => {
  const data = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_team_area'}`
  );
  const teamAreaData = data.data[0];

  const dataTeamFetch = await nextFetcher(
    `${process.env.NEXT_PUBLIC_API_URL + '/items/bs_team'}`
  );
  const dataTeam = dataTeamFetch?.data;

  return { teamAreaData, dataTeam };
};

interface ITeamPageProps {
  dataTeam: IPropsTeam[];
  teamAreaData: IProps;
}

export default function TeamPage({ teamAreaData, dataTeam }: ITeamPageProps) {
  return (
    <Layouts>
      <XHeader color="light" />
      <main>
        <XPageTitle
          bgImage={
            process.env.NEXT_PUBLIC_API_URL + '/assets/' + teamAreaData?.image
          }
          marqueTitle={teamAreaData?.title}
          title={teamAreaData?.spot_text}
          bgColor="white"
        />
        <section className={styles.wrapper}>
          <Container>
            <div className={styles.title}>
              Yeni nesil yazılım çözümleriyle işinizi bir üst seviyeye taşıyın.
              Yenilikçi ve etkili çözümler sunan ekibimize katılın ve büyüyen
              ailemizin bir parçası olun.
            </div>
            <div className={styles.items}>
              {dataTeam &&
                dataTeam?.map((item: IPropsTeam, index: number) => (
                  <XTeamCard
                    image={
                      process.env.NEXT_PUBLIC_API_URL + '/assets/' + item?.image
                    }
                    fullName={item?.full_name}
                    position={item.title}
                    key={index}
                  />
                ))}
            </div>
          </Container>
        </section>
      </main>
      <XFooter bgColor="white" />
    </Layouts>
  );
}
