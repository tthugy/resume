import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from '../styles/header.module.css'
import Fade from 'react-reveal/Fade';

export default function Header() {
  return (
    <header>
      {/* <Fade bottom> */}
        <span className={styles.tIcon}>👨🏻‍💻</span>
        <div className={styles.title}>
          <p>Resume of <span>Wonseok Choi</span></p>
        </div>
      {/* </Fade> */}
    </header>
  )
}
