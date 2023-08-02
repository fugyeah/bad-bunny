import React from 'react';
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components';

const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : 'http://localhost:3000';

  const EmailTemplate = (
    message, senderName, homeLink="https://www.hellofla.com",
  ) => (
    <Html>
    <Head />
    <Preview>Wishing you were here!</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={`/wishwide.png`}
          alt="Wish You Were Here Postcard"
        />
        <Heading style={heading}>Dear Governor DeSantis!</Heading>
        <Section style={body}>
          <Text style={paragraph}>
            {message}
          </Text>
        </Section>
        <Text style={paragraph}>
          /s
          <br />- HelloFLA! Team & {senderName}
        </Text>
        <Text style={paragraph}>
            <Link style={link} href={homeLink}>
             Pass it forward! Click here to share! 
            </Link>
          </Text>
        <Hr style={hr} />
        <Img
          src={`/Greetings.png`}
          alt="Postcard"
          width={1120}
          height={850}
          style={{
            WebkitFilter: 'grayscale(100%)',
            filter: 'grayscale(100%)',
            margin: '20px 0', 
          }}
        />
        <Text style={footer}>HelloFLA is owned and operated by Painted Dog Productions, LLC as a demonstration for our customizable webapp.</Text>
        <Text style={footer}>2023 Painted Dog Productions</Text>
        <Text style={footer}>
          This address will not receive email replies.
        </Text>
      </Container>
    </Body>
  </Html>
);

export default EmailTemplate;

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: '0 auto',
  padding: '20px 25px 48px',
  backgroundImage: 'url("/assets/raycast-bg.png")',
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat, no-repeat',
};

const heading = {
  fontSize: '20px',
  fontWeight: 'bold',
  marginTop: '48px',
};

const body = {
  margin: '24px 0',
};

const paragraph = {
  fontSize: '16px',
  lineHeight: '26px',
};

const link = {
  color: '#FF6363',
};

const hr = {
  borderColor: '#dddddd',
  marginTop: '48px',
};

const footer = {
  color: '#8898aa',
  fontSize: '12px',
  marginLeft: '4px',
};
