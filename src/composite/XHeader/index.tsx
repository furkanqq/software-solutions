import styles from './index.module.scss';

import Container from '@/src/components/XContainer';
import { XButton } from '@/src/components/XButton';
import { XImage } from '@/src/components/XImage';

import XNavbar from '../XNavbar';

export default function XHeader() {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.header_content}>
          <div className={styles.header_logo}>
            <XImage alt={'balance-software'} src="/assets/logo.png" fill />
          </div>
          <div className={styles.header_nav}>
            <XNavbar />
          </div>
          <div className={styles.header_button}>
            <XButton color={'outline'}>Teklif Al</XButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
