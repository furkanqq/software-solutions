import * as nodemailer from 'nodemailer';
import * as handlebars from 'handlebars';
import * as fs from 'fs';
import path from 'path';

export type EmailDeliveryResponse = {
  accepted: string[];
  rejected: string[];
  envelopeTime: number;
  ehlo: string[];
  messageTime: number;
  messageSize: number;
  envelope: {
    from: string;
    to: string[];
  };
  response: string;
  messageId: string;
};

export type MailOptions = {
  from: string;
  to: string;
  subject: string;
  html: string;
};

export type UserMailConfigTypes = {
  username: string;
  password: string;
  host: string;
  port: number;
};

export interface MailConfigContentTypes {
  htmlName: string;
  title: string;
}

export interface MailConfigTypes {
  [key: string]: MailConfigContentTypes;
}

function readHTMLFileAsync(path: string): Promise<string> {
  return new Promise((resolve, reject) => {
    fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
      if (err) {
        reject(err);
      } else {
        resolve(html);
      }
    });
  });
}

export async function sendMail(
  to: string,
  htmlFile: MailConfigContentTypes,
  mailRequest: Record<string, string | null>,
  userMailConfig: UserMailConfigTypes
) {
  try {
    // e-mail information
    const username = userMailConfig.username;
    const password = userMailConfig.password;
    const port = userMailConfig.port;
    const host = userMailConfig.host;

    // Path of the email content to be sent

    const rootPath = fs.existsSync(path.resolve('src'))
      ? path.resolve('src')
      : path.resolve('.');

    const fullPath: string = rootPath.concat(htmlFile.htmlName + '.html');

    // Read HTML file asynchronously
    const html = await readHTMLFileAsync(fullPath);

    const template = handlebars.compile(html);

    // We replace the {{code or something}} in the html files with the filled one.
    const replacements: Record<string, string> = {};

    for (const key in mailRequest) {
      replacements[key] = mailRequest[key] as string;
    }

    const htmlToSend: string = template(replacements);

    // Transporter
    const transporter: nodemailer.Transporter = nodemailer.createTransport({
      host: host,
      port: port,
      secure: false, // false ise TLS kullanılacak
      auth: {
        user: username,
        pass: password
      }
    });

    const mailOptions: MailOptions = {
      from: username,
      to: to,
      subject: htmlFile.title,
      html: htmlToSend
    };
    // Email sending process
    const info: EmailDeliveryResponse = await transporter.sendMail(mailOptions);
    console.log('Mail sent:', info.messageId);
  } catch (error) {
    console.error('Send Mail Error:', error);
  }
}
