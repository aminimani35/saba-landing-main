import Image from 'next/image'
import React from 'react'
import { IArtItemList } from './@types'

export default function ArtItem({id , name , img}:IArtItemList) {
  return (
    <section key={id} className='w-full max-w-[392px] mx-auto flex gap-4 flex-col justify-between items-center'>
        <Image alt={`IArtItemList-${name}`} src={img}/>
        <p className='text-2xl text-center md:whitespace-nowrap whitespace-pre-line font-bold ' >{name}</p>
    </section>
  )
}
