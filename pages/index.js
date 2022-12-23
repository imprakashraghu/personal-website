import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
          <meta charSet="UTF-8" />
          <title>Hemaprakash Raghu - Software engineer, technical architect and amateur gamer</title>
          <meta name="title" content="Hemaprakash Raghu - Software engineer, technical architect and amateur gamer" />
          <meta name="description" content="" />
          <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div className='w-full bg-black text-white'>
        <Header />
        <div className='w-full flex flex-col p-10 px-10 lg:px-28 pt-10 lg:pt-16'>
          <div class="max-w-2xl">
            <Image
              width='100'
              height='100'
              className='rounded-full'
              alt='profile-photo'
              src='/avatar.png'
            />
            <h1 className='w-full text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl py-4' style={{ lineHeight: 1.2 }}>
              Software engineer, technical architect and amateur gamer.
            </h1>
            <p className='w-full text-left text-gray-400 text-base py-2 leading-relaxed'>
              I&apos;m Hemaprakash, a software engineer and technical architect based in Puducherry, India. I am inclined to Artificial Intelligence and Quantum Computing which could be the game changer for the future world.
            </p>
            <div className='mt-6 flex gap-6'>
              <a target='__blank' href='https://twitter.com/imprakashraghu' className='group -m-1 p-1'>
                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M20.055 7.983c.011.174.011.347.011.523 0 5.338-3.92 11.494-11.09 11.494v-.003A10.755 10.755 0 0 1 3 18.186c.308.038.618.057.928.058a7.655 7.655 0 0 0 4.841-1.733c-1.668-.032-3.13-1.16-3.642-2.805a3.753 3.753 0 0 0 1.76-.07C5.07 13.256 3.76 11.6 3.76 9.676v-.05a3.77 3.77 0 0 0 1.77.505C3.816 8.945 3.288 6.583 4.322 4.737c1.98 2.524 4.9 4.058 8.034 4.22a4.137 4.137 0 0 1 1.128-3.86A3.807 3.807 0 0 1 19 5.274a7.657 7.657 0 0 0 2.475-.98c-.29.934-.9 1.729-1.713 2.233A7.54 7.54 0 0 0 22 5.89a8.084 8.084 0 0 1-1.945 2.093Z"></path></svg>
              </a>
              <a target='__blank' href='https://instagram.com/imprakashraghu' className='group -m-1 p-1'>
                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M12 3c-2.444 0-2.75.01-3.71.054-.959.044-1.613.196-2.185.418A4.412 4.412 0 0 0 4.51 4.511c-.5.5-.809 1.002-1.039 1.594-.222.572-.374 1.226-.418 2.184C3.01 9.25 3 9.556 3 12s.01 2.75.054 3.71c.044.959.196 1.613.418 2.185.23.592.538 1.094 1.039 1.595.5.5 1.002.808 1.594 1.038.572.222 1.226.374 2.184.418C9.25 20.99 9.556 21 12 21s2.75-.01 3.71-.054c.959-.044 1.613-.196 2.185-.419a4.412 4.412 0 0 0 1.595-1.038c.5-.5.808-1.002 1.038-1.594.222-.572.374-1.226.418-2.184.044-.96.054-1.267.054-3.711s-.01-2.75-.054-3.71c-.044-.959-.196-1.613-.419-2.185A4.412 4.412 0 0 0 19.49 4.51c-.5-.5-1.002-.809-1.594-1.039-.572-.222-1.226-.374-2.184-.418C14.75 3.01 14.444 3 12 3Zm0 1.622c2.403 0 2.688.009 3.637.052.877.04 1.354.187 1.67.31.421.163.72.358 1.036.673.315.315.51.615.673 1.035.123.317.27.794.31 1.671.043.95.052 1.234.052 3.637s-.009 2.688-.052 3.637c-.04.877-.187 1.354-.31 1.67-.163.421-.358.72-.673 1.036a2.79 2.79 0 0 1-1.035.673c-.317.123-.794.27-1.671.31-.95.043-1.234.052-3.637.052s-2.688-.009-3.637-.052c-.877-.04-1.354-.187-1.67-.31a2.789 2.789 0 0 1-1.036-.673 2.79 2.79 0 0 1-.673-1.035c-.123-.317-.27-.794-.31-1.671-.043-.95-.052-1.234-.052-3.637s.009-2.688.052-3.637c.04-.877.187-1.354.31-1.67.163-.421.358-.72.673-1.036.315-.315.615-.51 1.035-.673.317-.123.794-.27 1.671-.31.95-.043 1.234-.052 3.637-.052Z"></path><path d="M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm0-7.622a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244Zm5.884-.182a1.08 1.08 0 1 1-2.16 0 1.08 1.08 0 0 1 2.16 0Z"></path></svg>
              </a>
              <a target='__blank' href='https://github.com/imprakashraghu' className='group -m-1 p-1'>
                <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"></path></svg>
              </a>
              <a target='__blank' href='https://linkedin.com/in/imprakashraghu' className='group -m-1 p-1'>
                <svg viewBox="0 0 24 24" class="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"><path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path></svg>
              </a>
            </div>
          </div>
        </div>
        <div className='relative left-0 right-0 mt-10'>
          <div className='-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8'>
            <div className='relative aspect-[9/12] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2'>
              <Image
                alt='dark-me'
                src='/ride.jpeg'
                width='500'
                height='500'
                className='object-cover bg-black'
              />
            </div>
            <div className='relative aspect-[9/12] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2'>
              <Image
                alt='fit-me'
                src='/fitness.jpg'
                width='500'
                height='500'
                className='object-cover bg-black'
              />
            </div>
            <div className='relative aspect-[9/12] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl -rotate-2'>
              <Image
                alt='camping-me'
                src='/camping.png'
                width='500'
                height='500'
                className='object-cover bg-black'
              />
            </div>
            <div className='relative aspect-[9/12] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2'>
              <Image
                alt='ride-me'
                src='/dark.jpeg'
                width='500'
                height='500'
                className='object-cover bg-black'
              />
            </div>
            <div className='relative aspect-[9/12] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl rotate-2'>
              <Image
                alt='lap-me'
                src='/lap.png'
                width='500'
                height='500'
                className='object-cover bg-black'
              />
            </div>
          </div>
        </div>
        <div className='max-w-2xl p-8 lg:p-10 px-10 lg:px-28 pt-10 lg:pt-16 flex flex-col items-end'>
          <div className='w-full border border-zinc-700 rounded-2xl flex flex-col p-6'>
            <h2 class="flex text-md font-semibold text-zinc-900 dark:text-zinc-100">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 flex-none fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
              </svg>
              <span className="ml-3">Education</span>
            </h2>
            <ul role='list' className='py-6'>
              <li className='group flex flex-col items-start'>
                <h2 className='w-full text-sm text-zinc-100 font-semibold'>
                  SMVEC - (Pondicherry University)
                </h2>
                <p className='text-zinc-500 text-left text-sm mt-1'>
                  Bachelor&apos;s in Computer Science and Engineering
                </p>
                <p className='text-zinc-500 text-xs text-left mt-1'>
                  2017 - 2021
                </p>
              </li>
            </ul>
          </div>
          <div className='w-full mt-4 border border-zinc-700 rounded-2xl flex flex-col p-6'>
            <h2 class="flex text-md font-semibold text-zinc-900 dark:text-zinc-100">
              <svg viewBox="0 0 24 24" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" ariaHidden="true" className="h-6 w-6 flex-none"><path d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z" className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"></path><path d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5" className="stroke-zinc-400 dark:stroke-zinc-500"></path></svg>
              <span className="ml-3">Work</span>
            </h2>
            <ul role='list' className='py-6 mb-3'>
              <li className='w-full group'>
                <div className='w-full flex flex-col lg:flex-row items-start lg:justify-between'>
                  <Image
                    width='35'
                    height='35'
                    src='/tcs.png'
                    className='aspect-square object-contain lg:mb-0 mb-2'
                    alt='college-icon'
                  />
                  <div className='w-full flex-col items-start'>
                    <h2 className='w-full text-left text-sm text-zinc-100 font-semibold lg:pl-4'>
                      Tata Consultancy Services
                    </h2>
                    <p className='w-full text-sm text-zinc-500 text-left mt-1 lg:pl-4'>
                      System Engineer
                    </p>
                  </div>
                  <p className='whitespace-nowrap text-zinc-500  text-xs text-left mt-1 lg:pl-4'>
                    2021 - Present
                  </p>
                </div>
              </li>
              <li className='w-full group mt-6'>
                <div className='w-full flex flex-col lg:flex-row items-start lg:justify-between'>
                  <Image
                    width='35'
                    height='35'
                    src='/vscaleup.png'
                    className='aspect-square object-contain lg:mb-0 mb-2'
                    alt='college-icon'
                  />
                  <div className='w-full flex-col items-start'>
                    <h2 className='w-full text-left text-sm text-zinc-100 font-semibold lg:pl-4'>
                      Vscaleup
                    </h2>
                    <p className='w-full text-zinc-500 text-sm text-left mt-1 lg:pl-4'>
                      Software Developer Intern
                    </p>
                  </div>
                  <p className='whitespace-nowrap text-zinc-500 text-xs text-left mt-1 lg:pl-4'>
                    Jul 2020 - May 2021
                  </p>
                </div>
              </li>
              <li className='w-full group mt-6'>
                <div className='w-full flex flex-col lg:flex-row items-start lg:justify-between'>
                  <Image
                    width='35'
                    height='35'
                    src='/tcs.png'
                    className='aspect-square object-contain lg:mb-0 mb-2'
                    alt='college-icon'
                  />
                  <div className='w-full flex-col items-start'>
                    <h2 className='w-full text-left text-sm text-zinc-100 font-semibold lg:pl-4'>
                      Tata Consultancy Services
                    </h2>
                    <p className='w-full text-zinc-500 text-sm text-left mt-1 lg:pl-4'>
                      Software Developer Intern
                    </p>
                  </div>
                  <p className='whitespace-nowrap text-zinc-500 text-xs text-left mt-1 lg:pl-4'>
                    Feb 2020 - Jun 2020
                  </p>
                </div>
              </li>
            </ul>
            <a
              target='__blank' 
              href='https://drive.google.com/file/d/1GFBPfLhgsSf4A65o74QULD453za80rzj/view?usp=sharing'
              className='bg-blue-600 text-white px-4 w-full py-2 rounded-lg text-sm text-center flex items-center justify-center'>
              Download Resume
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-white mx-2">
                <path d="M13.75 7h-3v5.296l1.943-2.048a.75.75 0 011.114 1.004l-3.25 3.5a.75.75 0 01-1.114 0l-3.25-3.5a.75.75 0 111.114-1.004l1.943 2.048V7h1.5V1.75a.75.75 0 00-1.5 0V7h-3A2.25 2.25 0 004 9.25v7.5A2.25 2.25 0 006.25 19h7.5A2.25 2.25 0 0016 16.75v-7.5A2.25 2.25 0 0013.75 7z" />
              </svg>
            </a>
          </div>
        </div>
      </div> 
      <Footer /> 
    </div>
  )
}
