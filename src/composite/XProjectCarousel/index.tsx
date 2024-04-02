import styles from './index.module.scss';

export default function XProjectCarousel() {
  return (
    <section className={styles.projects}>
      <div className={styles.items}>
        <div className={styles.item}>
          <div className={styles.thumbnail}></div>
          <div className={styles.information}>
            <div className={styles.left}>
              <div className={styles.category}>Web Tasarım</div>
              <div className={styles.title}>Balance Network | NFT Project</div>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.thumbnail}></div>
          <div className={styles.information}>
            <div className={styles.left}>
              <div className={styles.category}>Web Tasarım</div>
              <div className={styles.title}>Balance Network | NFT Project</div>
            </div>
          </div>
        </div>

        <div className={styles.item}>
          <div className={styles.thumbnail}></div>
          <div className={styles.information}>
            <div className={styles.left}>
              <div className={styles.category}>Web Tasarım</div>
              <div className={styles.title}>Balance Network | NFT Project</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
