import styles from './index.module.scss';

interface IProps {
  fullName: string;
  title: string;
}

export const XTeamCard: React.FC<IProps> = ({ fullName, title }) => {
  return (
    <div
      style={{ backgroundImage: `url(${'/assets/team.jpeg'})` }}
      className={styles.item}></div>
  );
};
