import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/header.module.css'

export default function Header() {
  return (
    <header>
      <span className={styles.tIcon}>👨🏻‍💻</span>
      <p>기술이력서</p>
    </header>
  )
}
