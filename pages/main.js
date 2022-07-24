import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/main.module.css'
import Commit from '../public/myCommit.png'
import CommitDk from '../public/myCommit_dark.png'

export default function Header() {

  const [link, setLink] = useState(false);

  const linkClicked = () => {
    setLink(true);
    navigator.clipboard.writeText('cwstwin1@gmail.com');
    setTimeout(()=>{
      setLink(false)
    }, 3000);
  }

  return (
    <main className={styles.main}>
        <div className={styles.intro}>
            <p>
              안녕하세요. 개발자 최원석입니다.
              <span className={styles.linkCollect}>
                <a target='_blank' href='https://github.com/tthugy' rel='noopener noreferrer'>
                  <i className="bi bi-github"></i>
                </a>
                <a target='_blank' href='https://www.linkedin.com/in/wonseok-choi-b6041922b/' rel='noopener noreferrer'>
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

        <div className={styles.company}>
          <ul>
            <li>
              <div>
                정상
                <span>프론트엔드 개발자</span> 
                <span className={styles.comPeriod}>21.04 ~ current</span> 
              </div>
              <span className={styles.comCont}>핀테크 서비스업에서 프론트엔드 개발을 담당하고 있습니다.</span>
            </li>
          </ul>
        </div>

        <div className={styles.education}>
          <p>Educations</p>
          <span>백석대학교, 16.03 ~ 22.02</span>
          <ul>
            <li>주전공: 정보통신학</li>
            <li>복수전공: 컬처테크융합</li>
          </ul>
        </div>

        <div className={styles.commitBox}>
          <p>Self Improvement</p>
          <div className={styles.commitImg}>
            <span className={styles.commit}>
              <Image src={Commit} layout='responsive' objectFit='contain' priority />
            </span>
          </div>
          <span className={styles.commitDesc}>
            저는 대학교를 졸업한 이래로, 퇴근 후와 주말 등의 여가시간에 daily study와 commit을 목표로 꾸준한 자기계발을 해 왔습니다.
            <br/><br/>
            이를 가장 확연하게 증명할 수 있는 것이 <a target='_blank' href='https://github.com/tthugy' rel='noopener noreferrer'>제 Github 계정</a>일 것 같습니다. 위 이미지는 저의 Github 커밋 내역을 그래프화한 것입니다.
          </span>
        </div>

        <div className={styles.project}>
          <p>My Projects</p>
        </div>
    </main>
  )
}
