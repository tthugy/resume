import '../styles/globals.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from "next/router"

function MyApp({ Component, pageProps }) {
  return (
    <div className="component">
      <Head>
        <title>Resume/Wonseok Choi</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"/>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico?" />
        <meta name="og:title" content="최원석 (Wonseok Choi)" />
        <meta name="og:description" content="🚀 Resume / Frontend Engineer" />
        <meta name="og:image" content="thumbnail.png?" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
