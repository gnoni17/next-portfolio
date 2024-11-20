"use server";

import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function sendEmail({ email, message, name }: { name: string; email: string; message: string }) {
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    text: message,
  };

  try {
    await transport.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
    throw new Error("Internal server error");
  }
}
