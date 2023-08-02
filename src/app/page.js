import Image from 'next/image';
import Form from './components/main-form';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:p-8 md:p-12 lg:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 text-2xl text-center">
  Send a e-postcard to the Governor telling him how much we miss him in Florida!</p>

        <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        </div>

      </div>         
       
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        <a
          href=""
          className="group rounded-lg border border-transparent p-2 sm:p-3 md:p-4 lg:p-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Step 1{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Put in your name.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent p-2 sm:p-3 md:p-4 lg:p-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Step 2{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Put in your email.
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent p-2 sm:p-3 md:p-4 lg:p-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Optional{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            Put in additional information for why you miss him.  Remember to stay positive!
          </p>
        </a>

        <a
          href=""
          className="group rounded-lg border border-transparent p-2 sm:p-3 md:p-4 lg:p-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={`mb-3 text-2xl font-semibold`}>
            Send Postcard{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
            The Governor will receive an email generated postcard from chatGPT
          </p>
        </a>
      </div>
      <div className="w-full sm:w-10/12 md:w-10/12 lg:w-10/12">
        <Form />
      </div>
     <div className="w-full sm:w-10/12 md:w-10/12 lg:w-10/12">
        A service of HelloFLA as a demonstration of web app that automatically customizes each constituent letter on your issue advocacy campaigns using GPT! Copyright 2023 Painted Dog Productions, LLC
      </div>
      <div className="w-full flex items-center justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
        <a
          className="flex place-items-center gap-2 p-8"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="p-8 bg-transparent w-full sm:w-3/4 md:w-1/2 lg:w-1/3 object-contain">
            <Image
              src="/WishYouWereHere.png"
              alt="Wish you were Here"
              width={897}
              height={119}
              priority
            />
          </div>
        </a>
      </div>
    </main>
  )
}
