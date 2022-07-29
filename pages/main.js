import Head from 'next/head'
import Image from 'next/image'
import React, { useState } from 'react';
import Link from 'next/link'
import styles from '../styles/main.module.css'
import Commit from '../public/myCommit.png'
import CommitDk from '../public/myCommit_dark.png'
// import samsung from '../public/samsungPop.mov'
import ReactPlayer from 'react-player/lazy';

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
          <div className={styles.pList}>
            <p>워블</p>
            <span>워블 프로젝트</span>
          </div>
          <div className={styles.pList}>
            <p>땡스페이</p>
            <span>땡스페이 프로젝트</span>
          </div>
          <div className={styles.pList}>
            <p>삼성증권 투자스쿨</p>
            <span>투자스쿨 프로젝트</span>
          </div>
          {/* <ReactPlayer
              url={'../public/samsungPop.mp4'}    // 플레이어 url
              width='350px'         // 플레이어 크기 (가로)
              height='700px'        // 플레이어 크기 (세로)
              playing={true}        // 자동 재생 on
              muted={true}          // 자동 재생 on
              controls={true}       // 플레이어 컨트롤 노출 여부
              light={false}         // 플레이어 모드
              pip={true}            // pip 모드 설정 여부
              // poster={'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg'}   // 플레이어 초기 포스터 사진
              // onEnded={() => handleVideo()}  // 플레이어 끝났을 때 이벤트
          /> */}
        </div>
    </main>
  )
}
