import styles from './index.module.scss';
import cn from 'classnames';

import { nextFetcher } from '@/src/helpers/fetcherHelper';
import { FormEvent, useEffect, useState } from 'react';
import XSuccessMessage from '../XSuccessMessage';
import XErrorMessage from '../XErrorMessage';
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

type FormType = {
  detailed_message: string | null;
  phone_number: string | null;
  surname: string | null;
  name: string | null;
  mail: string | null;
};

export const XPageTitle: React.FC<IProps> = ({
  marqueTitle,
  offerForm,
  bgColor,
  bgImage,
  title
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [form, setForm] = useState<FormType>({
    detailed_message: null,
    phone_number: null,
    surname: null,
    name: null,
    mail: null
  });

  const configForm = {
    full_name: form.name + ' ' + form.surname,
    detailed_message: form.detailed_message,
    phone_number: form.phone_number,
    subject: 'Offer Form',
    mail: form.mail
  };

  const config = {
    htmlFile: {
      title: 'Balance Software Contact',
      htmlName: '/template/feedback'
    },
    mailRequest: configForm,
    to: form.mail
  };

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^[\d\s]+$/;

    setLoading(true);

    const url = `${process.env.NEXT_PUBLIC_API_URL}/items/bs_service_form`;

    if (
      !emailRegex.test(form.mail as string) ||
      !phoneNumberRegex.test(form.phone_number as string)
    ) {
      setError('Please enter a valid email or phone number');
      setLoading(false);
      return;
    }

    await fetch('/api/contact', {
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(config),
      method: 'POST'
    });

    await nextFetcher(url, {
      method: 'POST',
      body: form
    })
      .then((response) => {
        if (!response.ok) {
          if (response?.errors?.length) {
            throw new Error('Eksik veya Yanlış Parametre');
          }
        }
        setLoading(false);
        setForm({
          detailed_message: null,
          phone_number: null,
          surname: null,
          name: null,
          mail: null
        });
        setSuccess('Başarıyla Gönderildi.');
      })
      .catch((err: Error) => {
        setLoading(false);
        setError(err.message);
      });
  }

  useEffect(() => {
    if (error !== '') {
      const timer = setTimeout(() => {
        setError('');
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [error]);

  return (
    <div
      style={{
        backgroundColor:
          bgColor === 'white' ? 'rgba(var(--colors-light))' : bgColor,
        backgroundImage: bgImage && `url(${bgImage})`
      }}
      className={cn(bgImage ? styles.container_image : styles.container)}>
      <Container>
        <XSuccessMessage text={success} />
        <XErrorMessage text={error} />
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
              <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
                action="">
                <div className={styles.row}>
                  <XInput
                    onChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        name: value
                      }))
                    }
                    placeholder="İsim"
                    value={form.name}
                    type="text"
                  />
                  <XInput
                    onChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        surname: value
                      }))
                    }
                    placeholder="Soyisim"
                    value={form.surname}
                    type="text"
                  />
                </div>
                <div className={styles.row}>
                  <XInput
                    onChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        mail: value
                      }))
                    }
                    placeholder="E-posta"
                    value={form.mail}
                    type="text"
                  />
                  <XInput
                    onChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        phone_number: value
                      }))
                    }
                    value={form.phone_number}
                    placeholder="Telefon"
                    type="text"
                  />
                </div>
                <XTextarea
                  onChange={(value) =>
                    setForm((current) => ({
                      ...current,
                      detailed_message: value
                    }))
                  }
                  value={form.detailed_message}
                  placeholder="Mesajınız"
                />
                <XButton
                  className={styles.button}
                  loader={loading}
                  color="black">
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
