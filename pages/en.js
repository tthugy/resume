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

  const and = "&";
  const am = "'m";

  return (
    <>
        <Header/>
    <main className={styles.main}>
        <div data-aos="fade-up" data-aos-duration="800" className={styles.intro}>
            <p>
                Hello. I{am} Wonseok Choi, a Front-end developer.
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
            <div className={styles.codeTxt}>I{am} a 2nd year <span className={styles.fe}>frontend developer</span>. I want to become a stronger developer with what I have learned through steady self-development. I think that the core competency of a front-end developer is not only to make API integration without problems, but also to improve it so that users want to stay on the page for a longer period of time. Although indiscriminate events that harm the user experience should be avoided, my goal is to provide a more convenient experience for users.</div>
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
                <li>📍 Schedule management collaboration tool that improves work efficiency</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Next.js</li>
                  <li>CSS-module</li>
                  <li>Axios</li>
                  <li>zustand</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>Projects in progress from the initial design stage to the present</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>Design of React Application Architecture at the beginning of the project</li>
                  <li>Adoption of Next.js within the team</li>
                  <li>Node.js API integration through Axois</li>
                  <li>Issue management with github, continuous integration and deployment through jenkins pipeline</li>
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
              <p>THXPAY</p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;21.09 ~ 22.06
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 App that allows you to enjoy various services such as pay, commerce, and exchanges</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Vanilla Html + CSS + Javascript</li>
                  <li>Ajax</li>
                  <li>Socket.io</li>
                  <li>WebView</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>Maintenance of previously developed functions and development of new exchanges</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>Real-time exchange price and chart implementation through Socket.io and Chart.js</li>
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
              <p>Samsung Financial Networks Investment School</p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;21.06 ~ 21.08
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 Web App that provides investment beginners with the knowledge necessary for investment through video lectures</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Php</li>
                  <li>MySQL</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>PDO-based back-end function improvement and Mysql database design</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>Responsible functions: Notice, lecture page, event page, investment tendency character setting page</li>
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
                <li>📍 Web resume project for developers using Next.js</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Next.js</li>
                  <li>CSS-module</li>
                  <li>Github actions</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                {/* <span></span> */}
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>Implementing the front-end interface</li>
                  <li>CI/CD configuration based on GitHub Action</li>
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
          Thanks for reading my portfolio.
        </p>

    </main>
    </>
  )
}
