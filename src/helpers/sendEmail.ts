// 'use server';

// import * as nodemailer from 'nodemailer';

// export const sendEmail = async (email: string): Promise<void> => {
//   try {
//     const transporter = nodemailer.createTransport({
//       auth: {
//         user: 'hello@balance.network',
//         pass: 'Bn.5130.mrt'
//       },
//       host: 'smtp.gmail.com',
//       secure: false,
//       port: 587
//     });

//     await transporter
//       .sendMail({
//         subject: `New message from ${email}`,
//         to: 'hello@balance.network',
//         text: 'deneme',
//         from: email
//       })
//       .then(() => {
//         return {
//           data: 'Email sent successfully!'
//         };
//       })
//       .catch(() => {
//         return {
//           error: 'Something went wrong!'
//         };
//       });
//   } catch (error) {
//     console.log(error);
//   }
// };
