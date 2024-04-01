import styles from './../styles/pages/error.module.scss';

import Layouts from '@/src/layouts';

export default function ErrorNotFound() {
  return (
    <Layouts>
      <main>
        <section className={styles.pageSection}>
          <h1>404 not found</h1>
        </section>
      </main>
    </Layouts>
  );
}
