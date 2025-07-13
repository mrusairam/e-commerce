"use client"

import Header from '@/Components/main/Header'
import React from 'react'
import '@/app/globals.css'
import { CartProvider } from '@/Components/main/CartContext'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from '@/Components/main/Foooter'

export default function layout({children}) {
  return (
    <html>
     <body>
      <CartProvider>
       <Header/>
       {children}
       </CartProvider>
       <ToastContainer position="bottom-right" autoClose={2000} />
       <Footer/>
      </body>
   </html>
  )
}
