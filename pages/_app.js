import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from "next/router"
import { favicon } from '../public/favicon.ico'

function MyApp({ Component, pageProps }) {
  return (
    <div className="component">
      <Head>
        <title>Resume/Wonseok Choi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <link rel="shortcut" href={favicon} sizes="72x72" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
