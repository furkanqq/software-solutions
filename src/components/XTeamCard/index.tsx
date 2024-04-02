import styles from './index.module.scss';

import { XImage } from '../XImage';

interface IProps {
  fullName: string;
  position: string;
}

export const XTeamCard: React.FC<IProps> = ({ fullName, position }) => {
  return (
    <div className={styles.item}>
      <div className={styles.image}>
        <XImage src="/assets/team.jpeg" alt="user" fill />
      </div>
      <div className={styles.info}>
        <div className={styles.full_name}>{fullName}</div>
        <div className={styles.position}>{position}</div>
      </div>
    </div>
  );
};
