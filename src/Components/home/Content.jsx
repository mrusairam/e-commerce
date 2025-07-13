import React from 'react'
import Link from 'next/link'

export default function Content() {
  return (
    <div className='pl-7 mb-20'>
        <h1 className='text-5xl my-3 text-black font-bold font-serif'>One Stop Solution <span className='text-[#EE4899]'>Pasha Store</span></h1>
        <p className='text-xl my-3 font-serif'>Dicover the latest headphones, earphones, mobiles, tablets etc.<br/> 
            Exclusive Deal just for you!</p>
            <Link href={`/product/1`}>
            <button className='bg-[#EE4899] hover:bg-[#e82282] cursor-pointer text-white rounded-2xl my-3 px-5 py-3'>Shop Now</button>
            </Link>
            </div>
  )
}
