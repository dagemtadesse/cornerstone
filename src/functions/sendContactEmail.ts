import nodemailer from "nodemailer";
import { createServerFn } from "@tanstack/react-start";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  note: string;
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((data: ContactFormData) => {
    // Validate the data
    const { firstName, lastName, email, company, note } = data;
    if (!firstName || !lastName || !email || !company || !note) {
      throw new Error("All fields are required");
    }
    return data;
  })
  .handler(async ({ data }) => {
    try {
      const { firstName, lastName, email, company, note } = data;

      console.log(process.env.EMAIL_USER, process.env.EMAIL_PASS);

      // Validate environment variables
      if (
        !process.env.EMAIL_USER ||
        !process.env.EMAIL_PASS ||
        !process.env.CONTACT_EMAIL
      ) {
        throw new Error(
          "Email configuration is incomplete. Please check your environment variables.",
        );
      }

      // Create email transporter
      // For Gmail, you need to:
      // 1. Enable 2-factor authentication on your Google account
      // 2. Generate an App Password: https://support.google.com/accounts/answer/185833
      // 3. Use the App Password as EMAIL_PASS (not your regular password)
      const transporter = nodemailer.createTransport({
        service: "gmail", // Use service instead of host/port for Gmail
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS, // This should be an App Password
        },
      });

      // Email content
      const mailOptions = {
        from: `"${firstName} ${lastName}" <${process.env.EMAIL_USER}>`,
        to: process.env.CONTACT_EMAIL,
        subject: `New Contact Form Submission from ${firstName} ${lastName}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${firstName} ${lastName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company}</p>
          <p><strong>Message:</strong></p>
          <p>${note.replace(/\n/g, "<br>")}</p>
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      return { success: true, message: "Email sent successfully" };
    } catch (error: any) {
      console.error("Error sending email:", error);

      // Provide more specific error messages
      if (error.code === "EAUTH") {
        throw new Error(
          "Email authentication failed. Please check your Gmail credentials and ensure you're using an App Password.",
        );
      } else if (error.code === "ECONNREFUSED") {
        throw new Error(
          "Unable to connect to email server. Please check your internet connection.",
        );
      } else if (error.responseCode === 535) {
        throw new Error(
          "Email authentication failed. For Gmail, make sure to use an App Password instead of your regular password.",
        );
      } else {
        throw new Error(
          `Failed to send email: ${error.message || "Unknown error"}`,
        );
      }
    }
  });
