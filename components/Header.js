import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'

function Header({ showIcon=false }) {

    const router = useRouter()

  return (
    <div className={`w-full flex flex-row items-start justify-between py-6 ${!showIcon?'px-28':'px-14'}`}>
        {
            showIcon ? (
                <Link href='/'>
                    <Image
                        width='50'
                        height='50'
                        className='rounded-full'
                        alt='profile-photo'
                        src='/avatar.png'
                    />
                </Link>
            ) : null
        }
        <div className='w-full flex items-center gap-8 justify-end'>
            <Link href='/about'>
                <p className={`text-zinc-100 text-md text-center hover:text-blue-600 ${router.pathname==='/about'?'text-blue-600 font-bold':''}`}>About</p>
            </Link>
            <Link href='/projects'>
                <p className={`text-zinc-100 text-md text-center hover:text-blue-600 ${router.pathname==='/projects'?'text-blue-600 font-bold':''}`}>Projects</p>
            </Link>
            <Link href='/articles'>
                <p className={`text-zinc-100 text-md text-center hover:text-blue-600 ${router.pathname==='/articles'?'text-blue-600 font-bold':''}`}>Articles</p>
            </Link>
            <Link href='/experience'>
                <p className={`text-zinc-100 text-md text-center hover:text-blue-600 ${router.pathname==='/experience'?'text-blue-600 font-bold':''}`}>Experience</p>
            </Link>
        </div>
    </div>
  )
}

export default Header