import Image from 'next/image';
import Form from './components/main-form';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#00FF00', textAlign: 'center' }}>
        <pre>
        {`  _    _ ______ _      _      ____  ______ _               _ 
  | |  | |  ____| |    | |    / __ \\|  ____| |        /\\   | |
  | |__| | |__  | |    | |   | |  | | |__  | |       /  \\  | |
  |  __  |  __| | |    | |   | |  | |  __| | |      / /\\ \\ | |
  | |  | | |____| |____| |___| |__| | |    | |____ / ____ \\|_|
  |_|  |_|______|______|______\\____/|_|    |______/_/    \\_(_)`}
        </pre>
      </h1>
      <h1 style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#00FF00', textAlign: 'center' }}>
         Send a e-postcard to the Governor telling him how much we miss him in Florida!
      </h1>
<div className="flex-container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
  <Image
    src="/WishYouWereHere.png"
    alt="Wish you were Here"
    width={300}
    height={40}
    priority
  />  
  <div style={{ width: '400px', margin: '100px auto', backgroundColor: '#000000', padding: '10px', borderRadius: '10px', boxShadow: '0px 0px 20px rgba(0,0,0,0.5)', textAlign: 'left', borderBottom: '2px solid #00FF00' }}>
    <h1 style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#00FF00', textAlign: 'Center' }}>E-Postcard Instructions!</h1>
    <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#00FF00', textAlign: 'left' }}><b>Step 1:</b> Submit your name.</p>
    <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#00FF00', textAlign: 'left' }}><b>Step 2:</b> Enter your e-mail.</p>
    <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#00FF00', textAlign: 'left' }}><b>Optional:</b> Put in additional information for why you miss him.  Remember to stay positive!</p>
    <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#00FF00', textAlign: 'left' }}><b>Send Postcard:</b> The Governor will receive an email postcard message generated from AI.</p>
  </div>
</div>
       
        <Form />


      <div style={{ textAlign: 'center' }}>
       
              <p style={{ textAlign: 'center', fontSize:'18px' }}> </p>
       
        <a href="https://twitter.com/helloflanews" style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#00FF00', textAlign: 'left' }}>Follow me on Twitter!</a>
      </div>
      <br />
      <p style={{ fontFamily: 'Arial, Helvetica, sans-serif', color: '#00FF00', textAlign: 'left' }}>A service of HelloFLA as a demonstration of web app that automatically customizes each constituent letter on your issue advocacy campaigns using GPT! Copyright 2023 Painted Dog Productions, LLC</p>
    </div>
  );
}
