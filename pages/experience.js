import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

function Experience() {
  return (
    <div>
        <Head>
            <meta charSet="UTF-8" />
            <title>Experience - Hemaprakash Raghu</title>
            <meta name="title" content="Experience - Hemaprakash Raghu" />
            <meta name="description" content="" />
            <link rel="icon" type="image/x-icon" href="/avatar.ico"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div className='w-full bg-black text-white px-28'>
            <Header showIcon />
            <div className='sm:px-8 mt-14'>
                <div className='mx-auto max-w-7xl lg:px-8'>
                     <div className='relative px-4 sm:px-8 lg:px-12 justify-center max-w-3xl'>
                        <h1 className='text-zinc-100 text-5xl font-bold text-left py-3 w-full'>
                            I have worked with diverse technologies that helped me create solutions.
                        </h1>
                        <p className='w-full text-left text-gray-400 text-md mt-3'>
                            I am experienced with javascript and python frameworks concentrated on application development. Including major public cloud platform like Amazon Web Services and Google Cloud Platform. I too design resilent architectures for low cost business to enable high technology experience. 
                        </p>
                     </div>
                     <div className='max-w-2xl mt-12 px-8'>
                        <h2 className='px-4 pt-4 w-full text-md font-medium text-zinc-100 text-left'>
                            Certifications
                        </h2>
                        <div className='w-full p-2 grid grid-cols-2 gap-4'>
                            <a href='https://www.credly.com/badges/f299bb87-f171-4048-993d-cf7821a56a2d' target='__blank' className='w-full flex flex-col items-center rounded-2xl hover:bg-zinc-800 py-2 px-3'>
                                <h2 className='w-full text-left text-zinc-300 text-sm py-2'>
                                    AWS Certified Solutions Architect - Associate
                                </h2>
                                <p className='w-full flex items-center text-blue-600 cursor-pointer text-left py-2 text-sm'>
                                    View Certificate <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mx-2 w-4 h-4">
                                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                                    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                                    </svg>
                                </p>
                            </a>
                            <a href='https://www.credly.com/badges/5652fc27-bb72-4436-9f1d-cdf434ca89a4/public_url' target='__blank' className='w-full flex flex-col items-center rounded-2xl hover:bg-zinc-800 py-2 px-3'>
                                <h2 className='w-full text-left text-zinc-300 text-sm py-2'>
                                    AWS Certified Cloud Practitioner
                                </h2>
                                <p className='w-full flex items-center text-blue-600 cursor-pointer text-left py-2 text-sm'>
                                    View Certificate <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mx-2 w-4 h-4">
                                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                                    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                                    </svg>
                                </p>
                            </a>
                            <a href='https://www.cloudskillsboost.google/public_profiles/6624642f-7451-48c0-96bc-1a154ed3a3b7' target='__blank' className='w-full flex flex-col items-center rounded-2xl hover:bg-zinc-800 py-2 px-3'>
                                <h2 className='w-full text-left text-zinc-300 text-sm py-2'>
                                    Google Cloud Platform Foundational
                                </h2>
                                <p className='w-full flex items-center text-blue-600 cursor-pointer text-left py-2 text-sm'>
                                    View Certificate <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mx-2 w-4 h-4">
                                    <path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
                                    <path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
                                    </svg>
                                </p>
                            </a>
                        </div>
                        <div className='w-full p-4 flex flex-col items-center'>
                            <h2 className='w-full text-md text-zinc-100 text-left'>
                                Skills
                            </h2>
                            <div className='w-full grid grid-cols-2 gap-4 mt-4'>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    DataStructures and Algorithms
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Software Engineering
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Agile Methodologies
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Design Patterns
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Well Achitected Framework
                                </span>
                            </div>
                        </div>
                        <div className='w-full p-4 flex flex-col items-center'>
                            <h2 className='w-full text-md font-medium text-zinc-100 text-left'>
                                JavaScript
                            </h2>
                            <div className='w-full grid grid-cols-5 gap-4 mt-4'>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    React
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Angular
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    NextJS
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    React Native
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    NodeJS
                                </span>
                            </div>
                        </div>
                        <div className='w-full p-4 flex flex-col items-center'>
                            <h2 className='w-full text-md font-medium text-zinc-100 text-left'>
                                Python
                            </h2>
                            <div className='w-full grid grid-cols-5 gap-4 mt-4'>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Flask
                                </span>
                            </div>
                        </div>
                        <div className='w-full p-4 flex flex-col items-center'>
                            <h2 className='w-full text-md font-medium text-zinc-100 text-left'>
                                Database
                            </h2>
                            <div className='w-full grid grid-cols-5 gap-4 mt-4'>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    MYSQL
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    MongoDB
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    PostgreSQL
                                </span>
                            </div>
                        </div>
                        <div className='w-full p-4 flex flex-col items-center'>
                            <h2 className='w-full text-md font-medium text-zinc-100 text-left'>
                                Styles
                            </h2>
                            <div className='w-full grid grid-cols-5 gap-4 mt-4'>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    CSS
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Material
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Bootstrap
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Tailwindcss
                                </span>
                            </div>
                        </div>
                        <div className='w-full p-4 flex flex-col items-center'>
                            <h2 className='w-full text-md font-medium text-zinc-100 text-left'>
                                Cloud
                            </h2>
                            <div className='w-full grid grid-cols-3 gap-4 mt-4'>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Amazon Web Services
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Google Cloud Platform
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Google Firebase
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Supabase
                                </span>
                            </div>
                        </div>
                        <div className='w-full p-4 flex flex-col items-center'>
                            <h2 className='w-full text-md font-medium text-zinc-100 text-left'>
                                Tools
                            </h2>
                            <div className='w-full grid grid-cols-4 gap-4 mt-4'>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Git
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Docker
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Wordpress
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Figma
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    Android Studio
                                </span>
                                <span className='bg-zinc-700 w-full text-center text-white text-sm p-1 rounded'>
                                    SQL Workbench
                                </span>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Experience