import Head from 'next/head'
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from '../styles/header.module.css'
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {

  useEffect(() => {
    AOS.init();
  })

  return (
    <header>
        <span data-aos="fade-up" className={styles.tIcon}>👨🏻‍💻</span>
        <div data-aos="fade-up" className={styles.title}>
          <p>Resume of <span>Wonseok Choi</span></p>
        </div>
        <div data-aos="fade-up" className={`${styles.linkCollect}`}>
            <a target='_blank' href='https://github.com/tthugy' rel='noopener noreferrer'>
              <i className="bi bi-github"></i>
            </a>
            <a target='_blank' href='https://www.linkedin.com/in/wonseok-choi-b6041922b/' rel='noopener noreferrer'>
              <i className="bi bi-linkedin"></i>
            </a>
            {/* <a className={styles.docs}>
              <i class="bi bi-filetype-pdf"></i>
            </a> */}
            <a href='mailto:cwstwin1@gmail.com'>
              <i className={`bi bi-at`}></i>
            </a>
        </div>
    </header>
  )
}
