import { NextResponse } from 'next/server';
import nodemailer, { Transporter } from 'nodemailer';
import { createClient } from '@/prismicio';
import { ContactFormState } from '@/slices/HomepageContact';

export async function POST(req: Request) {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const contactEmail = 'noreply@sureclaims.com';
  const emailPassword = settings.data.contact_email_password;
  const emailSender = settings.data.email_sender || 'Sure Claims';
  const adminEmail = settings.data.admin_email?.toString() || 'joe@sureclaims.com';

  const { firstName, lastName, email, phone, comment, referrer }: ContactFormState = await req.json();

  const transporter: Transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: contactEmail,
      pass: emailPassword,
    },
  });

  try {
    await transporter.sendMail({
      from: `"${emailSender}" <${contactEmail}>`,
      to: email,
      subject: "Thanks for contacting us",
      text: 'Hello! Thank you for contacting Sure Claims! We have been notified and will respond within 1 business day.',
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sure Claims</title>
      </head>
      <body>
        <h1>Hello ${firstName}!!</h1>
        <p>Hello! Thank you for contacting Sure Claims! We have been notified and will respond within 1 business day.</p>
        <p>Click the button below to visit our website:</p>
        <a href="https://www.sureclaims.com/" style="display: inline-block; padding: 12px 24px; background-color: #007bff; color: #fff; text-decoration: none;">Visit Website</a>
      </body>
      </html>
      `,
    });

    await transporter.sendMail({
      from: `"${emailSender}" <${contactEmail}>`,
      to: adminEmail,
      replyTo: email,
      subject: `New contact request from ${firstName}`,
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sure Claims</title>
      </head>
      <body>
        <h1>New contact request from ${firstName}</h1>
        <p>Contact Name: ${firstName} ${lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone number: ${phone}</p>
        <p>Comment: ${comment}</p>
        ${referrer ? "<p>Referred by: " + referrer + "</p>" : ""}
      </body>
      </html>
      `,
    });

    return NextResponse.json({ comment: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
