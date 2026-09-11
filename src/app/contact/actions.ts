"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters.")
    .max(100, "Name is too long."),

  email: z
    .string()
    .trim()
    .email("Please enter a valid email address."),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be less than 2000 characters."),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: {
    name?: string[];
    email?: string[];
    message?: string[];
  };
};

export async function sendContactMessage(
  previousState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Please correct the errors below.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  try {
    const { error } = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL!],
      replyTo: email,
      subject: `Portfolio message from ${name.replace(/[\r\n]/g, " ")}`,
      text: `
Name: ${name}
Email: ${email}

Message:
${message}
      `,
    });

    if (error) {
      console.error(error);

      return {
        success: false,
        message: "Something went wrong. Please try again.",
      };
    }

    return {
      success: true,
      message: "Message sent successfully!",
    };
  } catch (error) {
    console.error(error);

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
}