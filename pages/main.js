import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/main.module.css'

export default function Header() {

  const [link, setLink] = useState(false);

  const linkClicked = () => {
    setLink(true);
    navigator.clipboard.writeText('cwstwin1@gmail.com');
    setTimeout(()=>{
      setLink(false)
    }, 2000);
  }

  return (
    <main className={styles.main}>
        <div className={styles.intro}>
            <p>
              안녕하세요. 개발자 최원석입니다.
              <span className={styles.linkCollect}>
                <a target='_blank' href='https://github.com/tthugy' rel='noreferrer'>
                  <i className="bi bi-github"></i>
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/wonseok-choi-b6041922b/' rel='noreferrer'>
                  <i className="bi bi-linkedin"></i>
                </a>
                <a onClick={linkClicked}>
                  <span className={`${link && styles.block} ${styles.support}`}>메일 주소가<br/>복사되었습니다.</span>
                  <i className={`${link && styles.lickClicked} bi bi-at`}></i>
                </a>
              </span>
            </p>
            <div>2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. 2년차 프론트엔드 개발자입니다. </div>
        </div>

        <div className={styles.links}>

        </div>
    </main>
  )
}
