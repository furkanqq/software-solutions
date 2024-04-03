import styles from './index.module.scss';

import { XPageTitle } from '@/src/components/XPageTitle';
import { XTeamCard } from '@/src/components/XTeamCard';
import Container from '@/src/components/XContainer';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import Layouts from '@/src/layouts';

export default function TeamPage() {
  return (
    <Layouts>
      <XHeader />
      <main>
        <XPageTitle
          title="We combine our passion for design and code."
          multiTitle="Buraya kısa bir bilgilendirme gelecek"
          marqueTitle="Ekibimiz"
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
