import { NextResponse } from "next/server";
import { Resend } from "resend";

export const POST = async (request) => {
  const body = await request.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { name, lastName, email, subject, message } = body;

  if (!name || !email || !lastName || !subject || !message) {
    return new NextResponse("All fields are required!", {
      status: 400,
    });
  }

  console.log(email,message);

  try {
    const { data, error } = await resend.emails.send({
      to: 'andriamarqarovi33@gmail.com',
      from: { email },
      subject: { subject },
      html: `<strong>${message}</strong>`
    });
    return new NextResponse("Message has been sent successfully!", {
      status: 201,
    });
  } catch (err) {
    return new NextResponse("Error while sending", { status: 500 });
  }
};
