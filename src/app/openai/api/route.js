import { NextResponse } from 'next/server';
import EmailTemplate from "@/app/components/email-template";
import { Resend } from "resend";
import { query } from "@/app/components/senti-analysis";
import generateMessage from "@/app/components/generate-message"
import formData from "@/app/components/main-form"
import schedule from 'node-schedule';

const resend = new Resend(process.env.RESEND_API_KEY);
const pool = require('../../../../db');

export async function POST(req) {
  try {
    const body = await req.json();
    const { senderName, senderEmail, recipientName, email, extra } = body;

    if (!body.recipientName) {
      return new NextResponse('Recipient\'s name not found', { status: 400 });
    }

    const message = await generateMessage({
      recipientName,
      extra,
    });

    try {
      const jsonResponse = await query(message);
      const label = jsonResponse[0][0].label;

      if (label === "POSITIVE") {
        try {
          const data = await resend.emails.send({
            from: `${senderName} <hello@hellofla.com>`,
            to: email, 
            cc: senderEmail,
            subject: `${senderName} is sending you a message of positivity!`,
            text: message,
            html: `<strong>${message}</strong>`,
            react: EmailTemplate(message, senderName, recipientName)
          });

          // Create a letter object
    const letter = {
      message: message,
      email: email,
      recipientName: recipientName
    };

 // Schedule the letter to be sent
    await scheduleLetter(letter);

          const responseData = {
            data: `${senderName} ${recipientName} ${email} ${extra}`,
            message: message,
            success: "Email sent success",
          };

          const response = new NextResponse(JSON.stringify({responseData}), {
            headers: {
              'Content-Type': 'application/json'
            }
          });

          return response;
        } catch (err) {
          console.error('An error occurred:', err);
          return new NextResponse('Error with sending email', { status: 400 });
        }
      } else {
        return new NextResponse(JSON.stringify({ error: "say nicer things~" }), {
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
    console.error('An error occurred:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}

function getRandomDate() {
  const now = new Date();
  const nextMonth = new Date();
  nextMonth.setMonth(now.getMonth() + 1);

  return new Date(now.getTime() + Math.random() * (nextMonth.getTime() - now.getTime()));
}

const scheduleLetter = async (letter) => {
  // Generate a random date and time within the next month
  const sendDate = getRandomDate();

  // Schedule the letter to be sent at the generated date and time
  schedule.scheduleJob(sendDate, async () => {
    try {
      await resend.emails.send({
        from: "hello@goodrabb.it",
        to: letter.email,
        subject: "Random act of positivity!",
        text: letter.message,
        html: `<strong>${letter.message}</strong>`,
        react: EmailTemplate(letter.message, letter.recipientName)
      });
    } catch (err) {
      console.error('An error occurred:', err);
    }
  });
}