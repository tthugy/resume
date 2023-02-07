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
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header() {

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

  const word = "'주린이'";

  return (
    <main className={styles.main}>
        <div data-aos="fade-up" data-aos-duration="800" className={styles.intro}>
            <p>
              안녕하세요. 프론트엔드 개발자 최원석입니다.
            </p>
            <div className={`${styles.linkCollect} ${styles.flex}`}>
                <a title="Link to Github" target='_blank' href='https://github.com/tthugy' rel='noopener noreferrer'>
                  <i className="bi bi-github"></i>
                </a>
                <a title="Link to Linkedin" target='_blank' href='https://www.linkedin.com/in/wonseok-choi-b6041922b/' rel='noopener noreferrer'>
                  <i className="bi bi-linkedin"></i>
                </a>
                {/* <a className={styles.docs}>
                  <i class="bi bi-filetype-pdf"></i>
                </a> */}
                <a title="Send Email" href='mailto:cwstwin1@gmail.com'>
                  <i className={`bi bi-at`}></i>
                </a>
            </div>
            <div className={styles.codeTxt}>안녕하세요. 유저 친화적인 서비스를 개발하고자 하는 2년차 프론트엔드 개발자 최원석입니다. 저는 꾸준한 자기 계발을 통해 학습한 것들로 더욱 견고한 개발자가 되고자 합니다. 저는 프론트엔드 개발자의 핵심 역량은 사용자가 더욱 오랫동안 페이지에 머무르고 싶도록 개선해 나가는 것이 핵심 역량이라고 생각합니다. 그동안 많은 이슈 처리를 하며 어떻게 하면 프로그램이 다양한 사람들에게 좋은 가치를 전달할까라는 생각을 하게 되었습니다. 사용자 경험에 해가 되는 무분별한 이벤트는 지양하고, 사용자에게 더 나은 가치와 경험을 제공하는 것이 저의 목표입니다.</div>
        </div>

        <div data-aos="fade-up" data-aos-duration="800" className={styles.company}>
          <ul>
            <li>
              <div>
                (주)정상
                <span>프론트엔드 개발자</span> 
                <span className={styles.comPeriod}>21.04 ~ 22.08</span> 
              </div>
              <span className={styles.comCont}>핀테크 스타트업에서 프론트엔드 개발을 담당했으며 주로 웹 어플리케이션을 개발하였습니다.</span>
            </li>
          </ul>
        </div>

        <div className={styles.education}>
          <p data-aos="fade-left" data-aos-duration="600" className={styles.titles}>Educations<span>a</span></p>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.eduCont}>
            <span>백석대학교, 16.03 ~ 22.02</span>
            <ul>
              <li>주전공: 정보통신학</li>
              <li>복수전공:&nbsp;
                <a title="Link to Culture & Technology major" target='_blank' href='https://www.bu.ac.kr/web/3812/subview.do' rel='noopener noreferrer'>
                  컬처테크융합
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
            저는 개인 Github 계정을 만들어 퇴근 후와 주말 등의 여가시간에 daily study와 commit을 목표로 꾸준한 자기 계발을 해 왔습니다.
            <br/><br/>
            위 이미지는 <a target='_blank' title="Link to github account" href='https://github.com/tthugy' rel='noopener noreferrer'>제 Github 계정<i className={`${styles.pageOut} bi bi-box-arrow-up-right`}></i></a> 커밋 내역을 그래프화한 것으로써, 이를 한눈에 보여줍니다.
          </span>
        </div>

        <div className={styles.project}>
          <p data-aos="fade-left" data-aos-duration="600" className={`${styles.titles} ${styles.ctitles}`}>Open Source Projects<span>c</span></p>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.pList}>
            <div className={styles.pLeft}>
              <p className="projectLink">
                <a target='_blank' title="Link to github repository" href='https://github.com/tthugy/resume-template-nextJS' rel='noopener noreferrer'>resume-template-nextJS<i className={`${styles.pLink} bi bi-box-arrow-up-right`}></i></a>
              </p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;22.07 ~ current
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 Next.js를 사용하는 개발자를 위한 웹 이력서 프로젝트</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Next.js</li>
                  <li>CSS Module</li>
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

        <div className={styles.project}>
          <p data-aos="fade-left" data-aos-duration="600" className={`${styles.titles} ${styles.ctitles}`}>Personal Projects<span>d</span></p>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.pList}>
            <div className={styles.pLeft}>
              <p className="projectLink">
                <a>피아노 레슨 플랫폼 - Jinclass</a>
              </p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;22.09 ~ current
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 전남 완도군 소안도 아이들을 위한 피아노 레슨 교육 봉사 프로젝트</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Vanilla Html + CSS + JQeury</li>
                  <li>Lottie.js</li>
                  <li>PHP</li>
                  <li>MySQL</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>기존 동영상 강의와 화상으로 진행되던 수업을 편리하게 관리하기 위한 프로젝트</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>프로젝트 전체 기획·디자인·개발 구현</li>
                  <li>벡터 기반의 애니메이션 라이브러리 Lottie 적용</li>
                </ul>
              </ul>
            </div>
            <div className={styles.pRight}>
              <span className={`${styles.pImage} ${styles.jinclass1}`}></span>
              <span className={`${styles.pImage} ${styles.jinclass2}`}></span>
            </div>
          </div>
        </div>

        <div className={styles.project}>
          <p data-aos="fade-left" data-aos-duration="600" className={`${styles.titles} ${styles.ctitles}`}>Commercial Projects<span>d</span></p>
          <div data-aos="fade-up" data-aos-duration="800" className={styles.pList}>
            <div className={styles.pLeft}>
              <p>워블</p>
              <span className={styles.pTimeLine}>
                <i className="bi bi-calendar-event"></i> &nbsp;22.07 ~ 22.08
              </span>
              <ul className={styles.projectDesc}>
                <li>📍 업무 효율을 높여 주는 스케줄 관리 협업툴</li>
                <li className={styles.bold}>💡 Tech Stacks</li>
                <ul className={styles.pDetailDesc}>
                  <li>Next.js</li>
                  <li>CSS Module</li>
                  <li>Axios</li>
                  <li>zustand</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>초기 설계 단계부터 참여해서 진행했던 프로젝트</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>프로젝트 초기 React Application Architecture 설계</li>
                  <li>팀 내 Next.js 도입</li>
                  <li>Axios를 통해 Node.js API 연동</li>
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
                  <li>Vanilla Html + CSS + JQeury</li>
                  <li>Ajax</li>
                  <li>Socket.io</li>
                  <li>WebView</li>
                </ul>
                <li className={styles.bold}>💬 Description</li>
                <span>기존에 개발된 기능 유지보수 및 신규 거래소 기능 개발</span>
                <ul className={`${styles.descUl} ${styles.pDetailDesc}`}>
                  <li>담당기능: Socket.io, Chart.js를 통해 실시간 거래소 시세 및 차트 구현</li>
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
                  <li>PHP</li>
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

        <p title="Click to go up" onClick={scrollTop} className={styles.end}>
          감사합니다.
        </p>

    </main>
  )
}
