import { NextResponse } from 'next/server';
import EmailTemplate from "@/app/components/email-template";
import { Resend } from "resend";
import { query } from "@/app/components/senti-analysis";
import generateMessage from "@/app/components/generate-message"

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const body = await req.json();

    // Use hardcoded recipientName and email if they're not provided in the request body
    const recipientName = body.recipientName || "Governor Ron DeSantis";
    const email = body.email || "GovernorRon.DeSantis@eog.myflorida.com";
    const { senderName, extra } = body;

    console.log("generating message");
    const message = await generateMessage({
      recipientName,
      extra,
    });
    console.log("message generated");
    // Text sentiment analysis
    try {
      console.log("try sentiment analysis")
      const jsonResponse = await query(message);
      const label = jsonResponse[0][0].label;
      console.log("Sentiment... " + label);
      console.log("Message: " + message);
      if (label === "POSITIVE") {
        // Try to send email
        try {
          const data = await resend.emails.send({
            from: `${senderName} <hello@hellofla.com>`,
            to: email, 
            cc: senderEmail,
            subject: `${senderName} is wishing you were here!`,
            text: message,
            html: `<strong>${message}</strong>`,
            react: EmailTemplate(message, senderName, recipientName)
          });

          const responseData = {
            data: `${senderName} ${recipientName} ${email} ${extra}`,
            message: message,
            success: "Email sent success",
            //react: EmailTemplate(message)
          };
          // Create the response with JSON data and Content-Type header
          const response = new NextResponse(JSON.stringify({responseData}), {
            headers: {
              'Content-Type': 'application/json'
            }
          });

          // Return the response
          return response;
        } catch (err) {
          // Error with outbound mail
          console.error('An error occurred:', err);
          return new NextResponse('Error with sending email', { status: 400 });
        }
      } else {
        // If text failed sentiment analysis
        return new NextResponse(JSON.stringify({ error: "say meaner things~" }), {
          status: 400,
          headers: {
            'Content-Type': 'application/json'
          }
        });
      }
    } catch (error) {
      console.error('Request failed with error:', error);
      return new NextResponse(JSON.stringify({ error: "Error with sentiment analysis query" }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    // Log the error and return a 500 status code
    console.error('An error occurred:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
