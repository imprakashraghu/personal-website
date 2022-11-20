import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image'
import Footer from '../components/Footer'

function Projects() {
  return (
    <div>
        <Head>
            <meta charSet="UTF-8" />
            <title>Projects - Hemaprakash Raghu</title>
            <meta name="title" content="Projects - Hemaprakash Raghu" />
            <meta name="description" content="" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div className='w-full bg-black text-white px-10 lg:px-28'>
            <Header showIcon />
            <div className='sm:px-8 mt-12 sm:mt-20'>
                <div className='mx-auto max-w-7xl lg:px-8'>
                    <div className='relative px-4 sm:px-8 lg:px-12 justify-center'>
                        <div className='mx-auto max-w-2xl lg:max-w-5xl'>
                            <h1 className='text-4xl text-zinc-100 tracking-tight text-center font-bold sm:text-5xl' style={{ lineHeight: 1.1 }}>
                                I did make some of my visions come true.
                            </h1>
                            <p className='max-w-3xl mx-auto text-center text-gray-400 text-md mt-3'>
                                I create apps that I have seen in my vision, most of my applications are open-source and tools that helps students and people that I have came through in my life.
                            </p>
                        </div>
                        <div className='w-full mt-16 sm:mt-20'>
                            <ul role='list' className='mx-auto grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
                                <li className='group relative flex flex-col items-start'>
                                    <Image
                                        src='/default.svg'
                                        alt='project-image'
                                        width='80'
                                        height='80'
                                        className='aspect-square object-cover'
                                    />
                                    <h2 className='w-full mt-6 text-base font-semibold text-zinc-100'>
                                        Program Buddy Bot
                                    </h2>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-400'>
                                        AWS powered Tool to help programmers build projects and automate things that are tiring to work on.
                                    </p>
                                    <a 
                                        target='__blank'
                                        href='https://github.com/imprakashraghu/aws-programbuddy-bot'
                                        class="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-blue-600 text-zinc-200">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path></svg>
                                        <span class="ml-2">github.com</span>
                                    </a>
                                </li>
                                <li className='group relative flex flex-col items-start'>
                                    <Image
                                        src='/default.svg'
                                        alt='project-image'
                                        width='80'
                                        height='80'
                                        className='aspect-square object-cover'
                                    />
                                    <h2 className='w-full mt-6 text-base font-semibold text-zinc-100'>
                                        Gradcub
                                    </h2>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-400'>
                                        The open source awareness tool for universities - helping them to get what students really wants 🤯.
                                    </p>
                                    <a 
                                        target='__blank'
                                        href='https://github.com/imprakashraghu/gradcub'
                                        class="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-blue-600 text-zinc-200">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path></svg>
                                        <span class="ml-2">github.com</span>
                                    </a>
                                </li>
                                <li className='group relative flex flex-col items-start'>
                                    <Image
                                        src='https://raw.githubusercontent.com/imprakashraghu/hyderjs/master/lib/logo-sm.png'
                                        alt='project-image'
                                        width='80'
                                        height='80'
                                        className='rounded-full aspect-square object-cover bg-zinc-100'
                                    />
                                    <h2 className='w-full mt-6 text-base font-semibold text-zinc-100'>
                                        HyderJS
                                    </h2>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-400'>
                                        Simple and easy way to create one-page websites using JSON. Bootstrap and Tailwindcss supported
                                    </p>
                                    <a 
                                        target='__blank'
                                        href='https://hyder.js.org'
                                        class="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-blue-600 text-zinc-200">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path></svg>
                                        <span class="ml-2">hyder.js.org</span>
                                    </a>
                                </li>
                                <li className='group relative flex flex-col items-start'>
                                    <Image
                                        src='/rowdots.png'
                                        alt='project-image'
                                        width='80'
                                        height='80'
                                        className='rounded-full border-black aspect-square object-cover'
                                    />
                                    <h2 className='w-full mt-6 text-base font-semibold text-zinc-100'>
                                        Rowdots
                                    </h2>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-400'>
                                        Customizable profile and internet space to promote and publish micro blogs and manage micro orders for online stores.
                                    </p>
                                    <a 
                                        target='__blank'
                                        href='https://rowdots.com'
                                        class="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-blue-600 text-zinc-200">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path></svg>
                                        <span class="ml-2">rowdots.com</span>
                                    </a>
                                </li>
                                <li className='group relative flex flex-col items-start'>
                                    <Image
                                        src='/buglane.png'
                                        alt='project-image'
                                        width='80'
                                        height='80'
                                        className='rounded-full border-black aspect-square object-cover'
                                    />
                                    <h2 className='w-full mt-6 text-base font-semibold text-zinc-100'>
                                        Bug Lane
                                    </h2>
                                    <p className='relative z-10 mt-2 text-sm text-zinc-400'>
                                        The Open Source tool to manage Bugs anywhere you browse, ability to add notes, urls or a bug reference. Supports Dark UI
                                    </p>
                                    <a 
                                        target='__blank'
                                        href='https://github.com/imprakashraghu/bug-lane-extension'
                                        class="relative z-10 mt-6 flex text-sm font-medium transition group-hover:text-blue-600 text-zinc-200">
                                        <svg viewBox="0 0 24 24" aria-hidden="true" class="h-6 w-6 flex-none"><path d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z" fill="currentColor"></path></svg>
                                        <span class="ml-2">github.com</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Projects