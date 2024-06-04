import styles from './index.module.scss';

import XSuccessMessage from '@/src/components/XSuccessMessage';
import XErrorMessage from '@/src/components/XErrorMessage';
import { XPageTitle } from '@/src/components/XPageTitle';
import { XTextarea } from '@/src/components/XTextarea';
import Container from '@/src/components/XContainer';
import { XButton } from '@/src/components/XButton';
import { XUpload } from '@/src/components/XUpload';
import { XInput } from '@/src/components/XInput';
import XHeader from '@/src/composite/XHeader';
import XFooter from '@/src/composite/XFooter';

import { nextFetcher } from '@/src/helpers/fetcherHelper';
import { useEffect, useState } from 'react';
import Layouts from '@/src/layouts';

type FormType = {
  detailed_message: string | null;
  CV: undefined | FileList | null;
  full_name: string | null;
  mail: string | null;
};

export default function CareerPage() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [form, setForm] = useState<FormType>({
    detailed_message: null,
    full_name: null,
    mail: null,
    CV: null
  });

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    setLoading(true);

    const url = `${process.env.NEXT_PUBLIC_API_URL}/items/bs_career`;

    if (!emailRegex.test(form.mail)) {
      setError('Please enter a valid email');
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
          full_name: null,
          mail: null,
          CV: null
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
          title="Bizimle Çalışmak İster Misiniz?"
          bgImage={'/assets/bannerImage2.jpg'}
          marqueTitle="KARİYER"
          bgColor="white"
        />
        <section className={styles.wrapper}>
          <Container className={styles.container}>
            <div className={styles.info}>
              <div className={styles.title}>
                <span>BİZE KATILIN </span>
                <h1>Başvuru</h1>
              </div>
              <div className={styles.describe}>
                <p>
                  İşimizi yaparken, her yeni projeye ilk günkü heyecanımızla
                  başlıyor, başarılı olmak için bu heyecanı canlı tutmamız
                  gerektiğine inanıyoruz.
                </p>
                <p>
                  Müşterilerimizin karşılaşabilecekleri risklere optimum
                  çözümlerle cevap verebilmeyi ilke edinip, bizi diğerlerinden
                  ayıracak bir hizmet sunmayı taahhüt ediyoruz. Bu ilkeler
                  doğrultusunda ekibimize katılmak isteyenleri bekliyoruz.
                </p>
              </div>
            </div>
            <div className={styles.form}>
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                  handleSubmit(e)
                }
                action="">
                {' '}
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
                  <XUpload
                    func={(data) => {
                      setForm((current) => ({
                        ...current,
                        CV: data
                      }));
                    }}
                    label="Bir dosyayı buraya sürükleyip bırakın veya bir dosya seçmek için tıklayın"
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
                    label="Kısa bilgilendirme"
                    placeholder="Merhaba ..."
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
