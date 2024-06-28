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
        username: 'furkanilhanresmi@gmail.com',
        password: 'lojlpkfdnuoadnsn',
        host: 'smtp.gmail.com',
        port: 587
      };

      const request = {
        detailed_message:
          'Bizimle iletişime geçtiğiniz için teşekkür ederiz. İletişim talebinizi aldık ve en kısa sürede size dönüş yapacağız. Herhangi bir ek bilgiye ihtiyaç duyarsanız, lütfen bu e-postaya yanıt vererek bizimle iletişime geçmekten çekinmeyin. İlginiz için tekrar teşekkür eder, iyi çalışmalar dileriz.',
        phone_number: null,
        subject: 'Feedback',
        full_name: null,
        mail: null
      };

      await sendMail(
        'furkanilhanresmi@gmail.com',
        data?.htmlFile,
        data?.mailRequest,
        userMailConfig
      );
      console.log(data.to, 'data.to');
      await sendMail(data?.to, data?.htmlFile, request, userMailConfig);

      return res.status(200).json({ message: 'Success' });
    } catch (error) {
      console.error('API Error:', error);
      return res.status(500).json({ error: 'Internal Server Error' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
