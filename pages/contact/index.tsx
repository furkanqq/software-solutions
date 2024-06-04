import styles from './index.module.scss';

import { IconPhone } from '@/src/assets/IconPhone';
import { IconMail } from '@/src/assets/IconMail';
import { IconMap } from '@/src/assets/IconMap';

import XSuccessMessage from '@/src/components/XSuccessMessage';
import XErrorMessage from '@/src/components/XErrorMessage';
import { XPageTitle } from '@/src/components/XPageTitle';
import { XTextarea } from '@/src/components/XTextarea';
import Container from '@/src/components/XContainer';
import { XButton } from '@/src/components/XButton';
import { XInput } from '@/src/components/XInput';
import { XLink } from '@/src/components/XLink';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import { nextFetcher } from '@/src/helpers/fetcherHelper';
import { FormEvent, useEffect, useState } from 'react';
import Layouts from '@/src/layouts';

type FormType = {
  detailed_message: string | null;
  phone_number: string | null;
  full_name: string | null;
  subject: string | null;
  mail: string | null;
};

export default function ContactPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [form, setForm] = useState<FormType>({
    detailed_message: null,
    phone_number: null,
    full_name: null,
    subject: null,
    mail: null
  });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneNumberRegex = /^[\d\s]+$/;

    setLoading(true);

    const url = `${process.env.NEXT_PUBLIC_API_URL}/items/bs_contact`;

    if (
      !emailRegex.test(form.mail) ||
      !phoneNumberRegex.test(form.phone_number)
    ) {
      setError('Please enter a valid email or phone number');
      setLoading(false);
      return;
    }

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
          full_name: null,
          subject: null,
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
    <Layouts>
      <XHeader color="light" />
      <main>
        <XSuccessMessage text={success} />
        <XErrorMessage text={error} />
        <XPageTitle
          title="Talep ve İsteklerinizi Bize Yazabilirsiniz."
          bgImage={'/assets/contact-us.jpg'}
          marqueTitle="İLETİŞİM"
          bgColor="white"
        />
        <section className={styles.wrapper}>
          <Container className={styles.container}>
            <div className={styles.info}>
              <div className={styles.describe}>
                <p>
                  Yeni bir projeniz mi var? sizi dinlemek için
                  sabırsızlanıyoruz. Formu doldurarak veya direkt arayarak
                  bizimle iletişime geçebilirsiniz.
                </p>
                <XLink
                  href="https://wa.me/+905456631949?text=Merhaba bir konu danışabilir miyim?"
                  className={styles.address}>
                  <IconPhone height={30} width={30} />
                  +90 545 663 19 49
                </XLink>
                <XLink
                  href="https://www.google.com/maps/place/UBM+Plaza/@41.0581472,28.9912873,17z/data=!3m2!4b1!5s0x14cab70422955527:0x6f26b7f8f460c7ac!4m6!3m5!1s0x14cab7069d1cbe57:0x95a1f32376644bed!8m2!3d41.0581472!4d28.9938622!16s%2Fg%2F1t_ryt1b?entry=ttu"
                  className={styles.address}>
                  <IconMap height={36} width={36} /> 19 Mayıs Mahallesi 19 Mayıs
                  Caddesi UBM Plaza no:37/21 34360 Şişli/İstanbul
                </XLink>
                <XLink
                  href="mailto:info@balance.software"
                  className={styles.address}>
                  <IconMail height={30} width={30} /> info@balance.software
                </XLink>
              </div>
            </div>
            <div className={styles.form}>
              <form
                onSubmit={(e: FormEvent<HTMLFormElement>) => handleSubmit(e)}
                action="">
                <div className={styles.row}>
                  <XInput
                    onChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        full_name: value
                      }))
                    }
                    value={form.full_name}
                    placeholder="Ali Veli"
                    label="Ad Soyad"
                    type="text"
                  />
                  <XInput
                    onChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        mail: value
                      }))
                    }
                    placeholder="ornek@gmail.com"
                    value={form.mail}
                    label="E-Posta"
                    type="text"
                  />
                </div>
                <div className={styles.row_one}>
                  <XInput
                    onChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        phone_number: value
                      }))
                    }
                    placeholder="+90 (XXX) XXX XX XX"
                    value={form.phone_number}
                    label="Telefon"
                    type="text"
                  />
                </div>
                <div className={styles.row_one}>
                  <XInput
                    onChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        subject: value
                      }))
                    }
                    placeholder="Konu Başlığı"
                    value={form.subject}
                    label="Konu"
                    type="text"
                  />
                </div>
                <div className={styles.row_one}>
                  <XTextarea
                    onChange={(value) =>
                      setForm((current) => ({
                        ...current,
                        detailed_message: value
                      }))
                    }
                    value={form.detailed_message}
                    placeholder="Merhaba ..."
                    label="Mesajınız"
                  />
                </div>
                <XButton
                  className={styles.send_button}
                  loader={loading}
                  color="outline">
                  Gönder
                </XButton>
              </form>
            </div>
          </Container>
        </section>
      </main>
      <XFooter bgColor="white" />
    </Layouts>
  );
}
