import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import styles from '../styles/main.module.css'
import Commit from '../public/myCommit.png'
import CommitDk from '../public/myCommit_dark.png'
import samsung1 from '../public/samsung1.png'
import samsung2 from '../public/samsung2.png'
import wobble1 from '../public/wobble1.png'
import wobble2 from '../public/wobble2.png'
import thx1 from '../public/thx1.png'
import thx2 from '../public/thx2.png'

export default function Header() {

  const [link, setLink] = useState(false);
  const [pageStatus, setPageStatus] = useState("");

  const linkClicked = () => {
    setLink(true);
    navigator.clipboard.writeText('cwstwin1@gmail.com');
    setTimeout(()=>{
      setLink(false)
    }, 3000);
  }

// let prevScrollTop = 0;
// if (typeof window !== "undefined"){
//   setInterval(()=>{
//     document.addEventListener("scroll", function(){ 
//       let nextScrollTop = window.pageYOffset || 0; 
//         if (nextScrollTop > prevScrollTop){
//             setPageStatus("down");
//         } else if (nextScrollTop < prevScrollTop){
//             setPageStatus("up");
//         }
//         prevScrollTop = nextScrollTop;
//     })
//   })
// }

console.log(pageStatus);

  return (
    <main className={styles.main}>
        <div className={styles.intro}>
            <p>
              안녕하세요. 개발자 최원석입니다.
              <span className={`${styles.linkCollect}`}>
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
            <div>2년차 프론트엔드 개발자입니다. 저는 잘 하는 프론트엔드 개발자가 API 연동을 문제없이 하는 것뿐 아니라 사용자가 더욱 페이지에 머무르고 싶도록 만드는 것이 역량이라고 생각합니다. 사용자 경험에 해가 되는 무분별한 이벤트는 지양해야겠지만, 사용할 맛이 나도록 만드는 것이 제가 바라는 목표입니다.</div>
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
          <p className={styles.titles}>Educations<span>■</span></p>
          <div className={styles.eduCont}>
            <span>백석대학교, 16.03 ~ 22.02</span>
            <ul>
              <li>주전공: 정보통신학</li>
              <li>복수전공: 컬처테크융합</li>
            </ul>
          </div>
        </div>

        <div className={styles.commitBox}>
          <p className={styles.titles}>Self Improvement<span>■</span></p>
          <div className={styles.commitImg}>
            <span className={styles.commit}>
              <Image src={Commit} layout='responsive' objectFit='contain' priority />
            </span>
          </div>
          <span className={styles.commitDesc}>
            저는 대학교를 졸업한 이래로, 퇴근 후와 주말 등의 여가시간에 daily study와 commit을 목표로 꾸준한 자기계발을 해 왔습니다.
            <br/><br/>
            위 이미지는 <a target='_blank' href='https://github.com/tthugy' rel='noopener noreferrer'>제 Github 계정</a> 커밋 내역을 그래프화한 것으로써, 이를 가장 확연하게 증명할 수 있을 것 같습니다.
          </span>
        </div>

        <div className={styles.project}>
          <p className={`${styles.titles} ${styles.ctitles}`}>Commercial Projects<span>■</span></p>
          <div className={styles.pList}>
            <div className={styles.pLeft}>
              <p>워블</p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;22.07 ~ current
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 업무 효율을 높여주는 스케줄 관리 협업툴</li>
                <li className={styles.bold}>기술 스택</li>
                <ul className={styles.pDetailDesc}>
                  <li>Next.js</li>
                  <li>CSS-module</li>
                  <li>Axios</li>
                  <li>zustand</li>
                </ul>
                <li className={styles.bold}>Description</li>
                <span>초기 설계단계부터 참여하여 현재까지 진행중인 프로젝트</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>모바일 전용 웹페이지로 Next.js로 개발</li>
                  <li>회사 내부 디자인시스템을 바탕으로 컴포넌트 개발 구축</li>
                  <li>github로 이슈관리, jenkins 파이프라인을 통한 지속적 통합 및 배포</li>
                </ul>
              </ul>
            </div>
            <div className={styles.pRight}>
              <span className={styles.pImage}>
                <Image src={wobble1} layout='responsive' objectFit='contain' priority />
              </span>
              <span className={styles.pImage}>
                <Image src={wobble2} layout='responsive' objectFit='contain' priority />
              </span>
            </div>
          </div>
          <div className={styles.pList}>
            <div className={styles.pLeft}>
              <p>땡스페이</p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;21.09 ~ 22.06
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 페이, 커머스, 거래소 등 다양한 서비스를 즐길 수 있는 App</li>
                <li className={styles.bold}>기술 스택</li>
                <ul className={styles.pDetailDesc}>
                  <li>Vanilla Html + CSS + Javascript</li>
                  <li>WebSocket</li>
                </ul>
                <li className={styles.bold}>Description</li>
                <span>기존에 개발된 기능 유지보수 및 신규 거래소 개발</span>
              </ul>
            </div>
            <div className={styles.pRight}>
              <span className={styles.pImage}>
                <Image src={thx1} layout='responsive' objectFit='contain' priority />
              </span>
              <span className={styles.pImage}>
                <Image src={thx2} layout='responsive' objectFit='contain' priority />
              </span>
            </div>
          </div>
          <div className={styles.pList}>
            <div className={styles.pLeft}>
              <p>삼성증권 투자스쿨</p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;21.06 ~ 21.08
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 투자 초보자(주린이)들에게 투자에 필요한 지식을 동영상 강의로 제공하는 Web App</li>
                <li className={styles.bold}>기술 스택</li>
                <ul className={styles.pDetailDesc}>
                  <li>Php</li>
                  <li>MySQL</li>
                </ul>
                <li className={styles.bold}>Description</li>
                <span>PDO 기반 Back-end 기능 개선 및 Mysql database 설계</span>
              </ul>
            </div>
            <div className={styles.pRight}>
              <span className={styles.pImage}>
                <Image src={samsung1} layout='responsive' objectFit='contain' priority />
              </span>
              <span className={styles.pImage}>
                <Image src={samsung2} layout='responsive' objectFit='contain' priority />
              </span>
            </div>
          </div>
        </div>
        <p className={styles.end}>
          감사합니다.
        </p>
    </main>
  )
}
