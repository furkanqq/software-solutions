import styles from './index.module.scss';
import cn from 'classnames';

import Container from '@/src/components/XContainer';
import { XButton } from '@/src/components/XButton';
import { XImage } from '@/src/components/XImage';

import XNavbar from '../XNavbar';

interface IProps {
  color?: 'light' | 'dark';
}

export default function XHeader(props: IProps) {
  return (
    <header
      className={cn(
        styles.header,
        props.color === 'light' && styles.header_light
      )}>
      <Container>
        <div className={styles.header_content}>
          <div className={styles.header_logo}>
            <XImage alt={'balance-software'} src="/assets/logo.png" fill />
          </div>
          <div className={styles.header_nav}>
            <XNavbar color={props.color} />
          </div>
          <div className={styles.header_button}>
            <XButton
              color={props.color === 'light' ? 'outline-white' : 'black'}>
              Teklif Al
            </XButton>
          </div>
        </div>
      </Container>
    </header>
  );
}
