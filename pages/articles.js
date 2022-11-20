import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'
import axios from 'axios'

function Articles({ data=null }) {

  return (
    <div>
        <Head>
            <meta charSet="UTF-8" />
            <title>Articles - Hemaprakash Raghu</title>
            <meta name="title" content="Articles - Hemaprakash Raghu" />
            <meta name="description" content="" />
            <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        </Head>
        <div className='w-full bg-black text-white px-8 lg:px-28'>
            <Header showIcon />
            <div className='mt-14'>
                <div className='mx-auto max-w-7xl lg:px-8'>
                    <div className='relative px-4 lg:px-12 justify-center max-w-3xl mb-4'>
                        <h1 className='text-zinc-100 text-4xl lg:text-5xl font-bold text-left py-3 w-full'>
                            Writing on software world, technology advancements.
                        </h1>
                        <p className='w-full text-left text-gray-400 text-md mt-3'>
                            I am not a professional blogger, I just write when I feel confident about the topic that I publish. I usually use Medium as my main blog posting site and also use Dev Community too sometimes.
                        </p>
                    </div>
                    <div className='px-4 lg:px-8 max-w-xl flex flex-col gap-4 mt-6 border-l border-zinc-900 pl-4 lg:pl-10'>
                        {
                            data?.map(item => (
                                <a
                                    href={item?.link}
                                    target='__blank'
                                    key={item?.guid} 
                                    className='w-full rounded-2xl hover:bg-zinc-900 p-4 flex flex-col items-center'>
                                        <h2 className='w-full font-medium text-zinc-100 text-md text-left py-2'>
                                            {item?.title}
                                        </h2>   
                                        <p 
                                            dangerouslySetInnerHTML={{ __html: item?.description?.slice(0, 200)?.replace(/<img[^>]*>/g,"...")}}
                                            className='w-full text-zinc-500 ellipsis text-left text-sm'></p>
                                        <p 
                                            className='w-full mt-3 text-zinc-400 ellipsis text-left text-sm'>
                                            {new Date(item?.pubDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric', day: '2-digit' })}
                                        </p>
                                        <p className='w-full flex items-center text-blue-600 cursor-pointer text-left py-3 text-sm'>
                                            Read Blog <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="mx-2 w-4 h-4">
                                            <path fillRule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clipRule="evenodd" />
                                            <path fillRule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clipRule="evenodd" />
                                            </svg>
                                        </p>
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export async function getServerSideProps(ctx) {
    try {
        const result = await axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@imprakashraghu')
        return {
            props: {
                data: result.data.items
            }
        }
    } catch(error) {
        console.log(error);
        return {
            props: {
                data: null
            }
        }
    }
}

export default Articles