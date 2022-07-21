import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/main.module.css'

export default function Header() {
  return (
    <main className={styles.main}>
        <div className={styles.intro}>
            <p>안녕하세요. 개발자 최원석입니다.</p>
            <div>2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. </div>
        </div>
    </main>
  )
}
