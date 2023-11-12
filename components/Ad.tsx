import Image from 'next/image'
import React from 'react'
import banner from '@/media/ad.jpg'

export default function Ad() {
    return (
        <div className='my-5 mx-auto max-w-[1440px] cursor-pointer px-[119px]'>
            <Image src={banner}
            className='w-full'
                width={0}
                height={0}
                alt='ad banner' />
        </div>
    )
}
