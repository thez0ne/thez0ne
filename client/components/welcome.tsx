'use client'

import '@/styles/glitch.css'
import '@/styles/scanlines.css'

import Link from 'next/link'
import Image from 'next/image'
import smoothScrollToSection from '@/utils/smoothscroll'

export default function Welcome() {
  return (
    <div className='flex flex-col w-auto h-screen' id='top'>

      <div className='flex flex-col items-center justify-center p-0 m-0 mt-auto'>
        <div className='text-8xl md:text-9xl glitch select-none' data-text='Anik'>Anik</div>
        <div className='text-xs md:text-sm sub select-none'>Software Developer</div>
        {/* <div className='scanlines'></div> */}
        <div className='flex justify-center space-x-7 min-w-full mt-3 select-none'>
          <a href='https://github.com/neoJINXD' target='_blank' rel='noopener noreferrer'>
            <Image
              src="/github.svg"
              width={45}
              height={45}
              alt="GitHub"
            />
          </a>
          <a href='https://the-z0ne.itch.io/' target='_blank' rel='noopener noreferrer'>
            <Image
              src="/itchio.svg"
              width={45}
              height={45}
              alt="Itch.io"
            />
          </a>
          <a href='https://www.linkedin.com/in/anikpatel/' target='_blank' rel='noopener noreferrer'>
            <Image
              src="/linkedin.svg"
              width={45}
              height={45}
              alt="LinkedIn"
            />
          </a>
        </div>
      </div>
      <div className='flex justify-center mt-auto mb-3 select-none'>
        <Link href='#' scroll={false} onClick={() => smoothScrollToSection('about')}>
          <Image
            src="/arrow-down.svg"
            width={45}
            height={45}
            alt="ArrowDown"
          />
        </Link>
      </div>
    </div>
  )
}
