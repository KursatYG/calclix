import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='border-b-2 border-white/20 text-white/80 mb-8'>
      <div className='py-10 flex flex-col sm:flex-row items-center justify-center sm:justify-between sm:items-center gap-4'>
        <Link href="/"><Image src="logo.svg" alt='Calclix Logo' width={200} height={0} priority/></Link>
        <p className='text-lg sm:text-xl font-bold text-center'>Tüm Hesaplamalar İçin Tek Merkeziniz</p>
      </div>
    </div>
  )
}

export default Navbar