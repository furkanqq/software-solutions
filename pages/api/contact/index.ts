import { NextApiResponse, NextApiRequest } from 'next';
import { sendMail } from '../utils/sendMail';

export type UserMailConfigTypes = {
  username: string;
  password: string;
  host: string;
  port: number;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    try {
      const data = req.body;

      const userMailConfig: UserMailConfigTypes = {
        username: 'hello@balance.software',
        password: 'Bn.5130.mrt',
        host: 'smtp.zoho.com',
        port: 587
      };

      const request = {
        detailed_message:
          'Bizimle iletişime geçtiğiniz için teşekkür ederiz. İletişim talebinizi aldık ve en kısa sürede size dönüş yapacağız. Herhangi bir ek bilgiye ihtiyaç duyarsanız, lütfen bu e-postaya yanıt vererek bizimle iletişime geçmekten çekinmeyin. İlginiz için tekrar teşekkür eder, iyi çalışmalar dileriz.',
        detailed_message_en:
          'Thank you for contacting us. We have received your inquiry and will get back to you as soon as possible. If you need any additional information, please feel free to reply to this email. Thank you again for your interest, and we wish you all the best.',
        subject: 'Geri Bildirim',
        subject_en: 'Feedback',
        phone_number: null,
        full_name: null,
        mail: null
      };

      await sendMail(
        'hello@balance.software',
        data?.htmlFile,
        data?.mailRequest,
        userMailConfig
      );
      await sendMail(data?.to, data?.htmlFile, request, userMailConfig);

      return res.status(200).json({ message: 'Success' });
    } catch (error) {
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
