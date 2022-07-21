import Head from 'next/head'
import Link from 'next/link'
import React, { useState } from 'react';
import Image from 'next/image'
import { useRouter } from "next/router";
import styles from '../styles/header.module.css'

export default function Header() {
  return (
    <header>
      <span className={styles.tIcon}>👨🏻‍💻</span>
      <div className={styles.title}>
        <span/>
        <p>기술이력서</p>
      </div>
    </header>
  )
}
