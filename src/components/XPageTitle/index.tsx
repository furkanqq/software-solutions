import styles from './index.module.scss';
import cn from 'classnames';

import { XTextarea } from '../XTextarea';
import Container from '../XContainer';
import { XButton } from '../XButton';
import { XInput } from '../XInput';

interface IProps {
  bgColor?: 'transparent' | 'white';
  marqueTitle?: string;
  offerForm?: boolean;
  bgImage?: string;
  title: string;
}

export const XPageTitle: React.FC<IProps> = ({
  marqueTitle,
  offerForm,
  bgColor,
  bgImage,
  title
}) => {
  return (
    <div
      style={{
        backgroundImage: bgImage
          ? `url(${process.env.NEXT_PUBLIC_API_URL + '/assets/' + bgImage})`
          : 'none',
        backgroundColor:
          bgColor === 'white' ? 'rgba(var(--colors-light))' : bgColor
      }}
      className={cn(bgImage ? styles.container_image : styles.container)}>
      <Container>
        <section className={styles.wrapper}>
          <div className={styles.info}>
            <div className={styles.title}>{title}</div>
          </div>
          {offerForm && (
            <div className={styles.form}>
              <h3>Projenize ve Şirketinize Özel Teklifler</h3>
              <span className={styles.desc}>
                Uzman ekibimiz daima yardıma hazır.
              </span>
              <form action="">
                <div className={styles.row}>
                  <XInput placeholder="Isim" type="text" />
                  <XInput placeholder="Soyisim" type="text" />
                </div>
                <div className={styles.row}>
                  <XInput placeholder="E-Posta" type="text" />
                  <XInput placeholder="Telefon" type="text" />
                </div>
                <XTextarea placeholder="Mesajınız" />
                <XButton className={styles.button} color="black">
                  Gönder
                </XButton>
              </form>
            </div>
          )}
        </section>
      </Container>
      {marqueTitle && (
        <div className={styles.main_marq}>
          <div className={styles.slide}>
            <div className={styles.box}>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
              <div className={styles.item}>
                <h2>{marqueTitle}</h2>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
