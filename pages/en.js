import Head from 'next/head'
import Image from 'next/image'
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link'
import styles from '../styles/main.module.css'
import Commit from '../public/myCommit.png'
import samsung1 from '../public/samsung1.png'
import samsung2 from '../public/samsung2.png'
import wobble1 from '../public/wobble1.png'
import wobble2 from '../public/wobble2.png'
import thx1 from '../public/thx1.png'
import thx2 from '../public/thx2.png'
import Header from './header'
import AOS from "aos";
import "aos/dist/aos.css";

export default function En() {

  useEffect(() => {
    AOS.init();
  })

  const scrollTop = e => {
    if (!window.scrollY) return;

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  
  }

  const scrollDown = e => {
    if (!window.scrollY) return;

    window.scrollTo({
      bottom: 0,
      behavior: 'smooth'
    });
  
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


  const word = "'주린이'";
  const and = "&";

  return (
    <>
        <Header/>
    <main className={styles.main}>
        <div data-aos="fade-up" data-aos-duration="800" className={styles.intro}>
            <p>
                Hello. I'm Wonseok Choi, a front-end developer.
            </p>
            <div className={`${styles.linkCollect}`}>
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
            <div className={styles.codeTxt}>I'm a 2nd year <span className={styles.fe}>frontend developer</span>. I want to become a stronger developer with what I have learned through steady self-development. I think that the core competency of a front-end developer is not only to make API integration without problems, but also to improve it so that users want to stay on the page for a longer period of time. Although indiscriminate events that harm the user experience should be avoided, my goal is to provide a more convenient experience for users.</div>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" className={styles.company}>
          <ul>
            <li>
              <div>
                SUMMIT
                <span>Frontend developer</span> 
                <span className={styles.comPeriod}>21.04 ~ 22.08</span> 
              </div>
              <span className={styles.comCont}>I was in charge of front-end development at a fintech startup, mainly developing web applications.</span>
            </li>
          </ul>
        </div>

        <div className={styles.education}>
          <p data-aos="fade-left" data-aos-duration="600" className={styles.titles}>Educations<span>a</span></p>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.eduCont}>
            <span>Baekseok Univ, 16.03 ~ 22.02</span>
            <ul>
              <li>major: Information {and} Communication</li>
              <li>double majoring:&nbsp;
                <a target='_blank' href='https://www.bu.ac.kr/web/3812/subview.do' rel='noopener noreferrer'>
                    Intergrated Culture {and} Technology
                  <i className={`${styles.pageOut} bi bi-box-arrow-up-right`}></i>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.commitBox}>
          <p data-aos="fade-left" data-aos-duration="600" className={styles.titles}>Self Improvement<span>b</span></p>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.commitImg}>
            <span className={styles.commit}>
              <Image alt="Commit Graph" src={Commit} layout='responsive' objectFit='contain' priority />
            </span>
          </div>
          <span className={styles.commitDesc}>
            I have created a personal Github account and have been steadily developing myself with the goal of daily study and commit in my spare time after work and on weekends.
            <br/><br/>
            The image above is a graph of the commit history of <a target='_blank' href='https://github.com/tthugy' rel='noopener noreferrer'>my Github account<i className={`${styles.pageOut} bi bi-box-arrow-up-right`}></i></a>, showing it at a glance.
          </span>
        </div>

        <div className={styles.project}>
          <p data-aos="fade-left" data-aos-duration="600" className={`${styles.titles} ${styles.ctitles}`}>Commercial Projects<span>c</span></p>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.pList}>
            <div className={styles.pLeft}>
              <p>Wobble</p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;22.07 ~ current
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 업무 효율을 높여 주는 스케줄 관리 협업툴</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Next.js</li>
                  <li>CSS-module</li>
                  <li>Axios</li>
                  <li>zustand</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>초기 설계단계부터 참여하여 현재까지 진행 중인 프로젝트</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>프로젝트 초기 React Application Architecture 설계</li>
                  <li>팀 내 Next.js 도입</li>
                  <li>Axois를 통해 Node.js REST API 연동</li>
                  <li>github로 이슈 관리, jenkins 파이프라인을 통한 지속적 통합 및 배포</li>
                </ul>
              </ul>
            </div>
            <div className={styles.pRight}>
              <span className={`${styles.pImage} ${styles.wobble1}`}></span>
              <span className={`${styles.pImage} ${styles.wobble2}`}></span>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.pList}>
            <div className={styles.pLeft}>
              <p>땡스페이</p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;21.09 ~ 22.06
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 페이, 커머스, 거래소 등 다양한 서비스를 즐길 수 있는 App</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Vanilla Html + CSS + Javascript</li>
                  <li>Ajax</li>
                  <li>Socket.io</li>
                  <li>WebView</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>기존에 개발된 기능 유지보수 및 신규 거래소 개발</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>Socket.io, Chart.js를 통해 실시간 거래소 시세 및 차트 구현</li>
                </ul>
              </ul>
            </div>
            <div className={styles.pRight}>
              <span className={`${styles.pImage} ${styles.thx1}`}></span>
              <span className={`${styles.pImage} ${styles.thx2}`}></span>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.pList}>
            <div className={styles.pLeft}>
              <p>삼성증권 투자스쿨</p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;21.06 ~ 21.08
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 투자 초보자({word})들에게 투자에 필요한 지식을 동영상 강의로 제공하는 Web App</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Php</li>
                  <li>MySQL</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>PDO 기반 Back-end 기능 개선 및 Mysql database 설계</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>담당기능: 공지사항, 강의 페이지, 이벤트 페이지, 투자성향 캐릭터 설정 페이지</li>
                </ul>
              </ul>
            </div>
            <div className={styles.pRight}>
              <span className={`${styles.pImage} ${styles.samsung1}`}></span>
              <span className={`${styles.pImage} ${styles.samsung2}`}></span>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <p data-aos="fade-left" data-aos-duration="600" className={`${styles.titles} ${styles.ctitles}`}>Open Source Projects<span>d</span></p>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.pList}>
            <div className={styles.pLeft}>
              <p className="projectLink">
                <a target='_blank' href='https://github.com/tthugy/resume-template-nextJS' rel='noopener noreferrer'>resume-template-nextJS<i className={`${styles.pLink} bi bi-box-arrow-up-right`}></i></a>
              </p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;22.07 ~ current
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 Next.js를 사용하는 개발자를 위한 웹 이력서 프로젝트</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Next.js</li>
                  <li>CSS-module</li>
                  <li>Github actions</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                {/* <span></span> */}
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>프론트엔드 인터페이스 구현</li>
                  <li>GitHub Action을 기반으로 CI/CD 구성</li>
                </ul>
              </ul>
            </div>
            <div className={styles.pRight}>
              <span className={`${styles.pImage} ${styles.resume1}`}></span>
              <span className={`${styles.pImage} ${styles.resume2}`}></span>
            </div>
          </div>
        </div>

        <p onClick={scrollTop} className={styles.end}>
          감사합니다.
        </p>

    </main>
    </>
  )
}
