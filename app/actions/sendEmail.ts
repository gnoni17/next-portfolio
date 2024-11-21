"use server";

import { ContactSchema, ContactSchemaType } from "@/schemas/contactSchemas";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function sendEmail(data: ContactSchemaType) {
  // honeypoint
  if (data.surname) throw new Error("Ops qualcosa è andato storto, messaggio non inviato");

  const result = ContactSchema.safeParse(data);
  if (!result.success) throw new Error("Campi non validi, messaggio non inviato.");

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
    subject: `Message from ${data.name} (${data.email})`,
    text: data.message,
  };

  try {
    await transport.sendMail(mailOptions);
  } catch (err) {
    console.log(err);
    throw new Error("Ops qualcosa è andato storto, messaggio non inviato");
  }
}
