'use server'

import { Resend } from 'resend';
import { ContactEmailTemplate } from '@/app/[locale]/contact/components/email-template';
import { render } from '@react-email/render';

{/* Trebuie modificate datele de contact */}
const resend = new Resend(process.env.RESEND_API_KEY);
const SEND_TO_EMAIL = 'gabi.ct2002@yahoo.com';

export type ContactFormState = {
  success: boolean;
  message: string;
};

export async function sendContactEmail(prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  // Get the form values
  const name = formData.get('name') as string; 
  const email = formData.get('email') as string;
  const subject = formData.get('subject') as string;
  const message = formData.get('message') as string;

  // Validation
  if (!name || !email || !subject || !message) {
    return { success: false, message: "All fields are required." };
  }

  try {
    const emailHtml = await render(
      <ContactEmailTemplate 
        name={name}
        email={email} 
        subject={subject} 
        message={message} 
      />
    );

    const {error} = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>',
      to: SEND_TO_EMAIL, 
      replyTo: email,
      subject: `[Contact] ${subject}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend API Error:", error);
      throw new Error(error?.message);
    }

    return { success: true, message: "Message sent successfully!" };

  } catch (error) {
    console.error("Server Action Error:", error);
    return { success: false, message: "Oops, looks like something went wrong. Call us via phone or send a message directly." };
  }
}