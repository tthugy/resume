import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from '../styles/header.module.css'
import AOS from "aos";
import "aos/dist/aos.css";
import memoticon from '../public/memoticon.png'

export default function Header() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <header>
        <span data-aos="fade-up" data-aos-duration="800" className={styles.tIcon}>
          <div className={styles.memo}>
            <Image alt="Wonseok" src={memoticon} layout='responsive' objectFit='contain' priority />
          </div>
        </span>
        <div data-aos="fade-up" data-aos-duration="800" className={styles.title}>
          <p>Resume of <span>Wonseok Choi</span></p>
        </div>
        <div data-aos="fade-up" data-aos-duration="800" className={`${styles.linkCollect}`}>
            <a title="Link to Github" target='_blank' href='https://github.com/tthugy' rel='noopener noreferrer'>
              <i className="bi bi-github"></i>
            </a>
            <a title="Link to Linkedin" target='_blank' href='https://www.linkedin.com/in/wonseok-choi-b6041922b/' rel='noopener noreferrer'>
              <i className="bi bi-linkedin"></i>
            </a>
            <a title="Send Email" href='mailto:cwstwin1@gmail.com'>
              <i className={`bi bi-at`}></i>
            </a>
        </div>
    </header>
  )
}
