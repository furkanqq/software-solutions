import styles from './index.module.scss';

import { XPageTitle } from '@/src/components/XPageTitle';
import Container from '@/src/components/XContainer';
import { XImage } from '@/src/components/XImage';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import Layouts from '@/src/layouts';
import { XTeamCard } from '@/src/components/XTeamCard';

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
              <XTeamCard />
              <XTeamCard />
              <XTeamCard />
              <XTeamCard />
              <XTeamCard />
              <XTeamCard />
            </div>
          </Container>
        </section>
      </main>
      <XFooter />
    </Layouts>
  );
}
