import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import Mail from 'nodemailer/lib/mailer';
import { z } from 'zod';

const emailSchema = z
  .object({
    email: z.string().min(1, 'Email is required').email('Email is invalid'),
    name: z.string().min(1, 'Name is required'),
    message: z.string().min(1, 'Message is required'),
  });

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, name, message } = emailSchema.parse(body);

    console.log(`SENDING FROM ${email} ${name} WITH MESSAGE: ${message}`);

    const transport = nodemailer.createTransport({
      service: 'gmail',
      /* 
        setting service as 'gmail' is same as providing these setings:
        host: "smtp.gmail.com",
        port: 465,
        secure: true
        If you want to use a different email provider other than gmail, you need to provide these manually.
        Or you can go use these well known services and their settings at
        https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
      */
      auth: {
        user: process.env.MY_EMAIL,
        pass: process.env.MY_PASSWORD,
      },
    });

    const mailOptions: Mail.Options = {
      from: email,
      to: process.env.MY_EMAIL,
      // cc: email, //(uncomment this line if you want to send a copy to the sender)
      subject: `Message from ${name} (${email})`,
      text: message,
    };

    const sendMailPromise = () =>
      new Promise<string>((resolve, reject) => {
        transport.sendMail(mailOptions, function (err) {
          if (!err) {
            resolve('Email sent');
          } else {
            reject(err.message);
          }
        });
      });

    await sendMailPromise();
    return NextResponse.json({ message: 'Email sent' }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: err }, { status: 500 });
  }
}
