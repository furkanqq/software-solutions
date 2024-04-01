import styles from './index.module.scss';
import cn from 'classnames';

type ContainerProps = {
  className?: undefined | string;
  children: React.ReactNode;
};

export default function Container(props: ContainerProps) {
  return (
    <div className={cn(styles.container, props.className)}>
      {props.children}
    </div>
  );
}
