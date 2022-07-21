import { HeaderProject } from 'components/items/HeaderLink';
import styles from 'styles/Project.module.scss';
import { AddOutline } from 'react-ionicons';
import Image from "next/image";
import { useState } from 'react';
import YouTube, { YouTubeProps } from 'react-youtube';
import ModalData from 'components/datas/ModData';

// error fixed
export default function Project() {
    
    const [modal, setModal] = useState(false);
    const [modex, setModex] = useState(0);
    
    const toggleModal = (num) => {
        setModex(num);
        console.log(ModalData);
        setModal(!modal);
    }
    
      const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
          controls: 0,
          rel: 0,
          showinfo: 0,
          mute: 0,
          loop: 1
        },
      };

    return (
        
    <div>
        <HeaderProject/>
        <div className={styles.background}/>
        <div className={styles.cheif_container}>

        <div className={styles.inline_container} onClick = { () => toggleModal(0) }>
            <div className={styles.project} style = {{background : "url('https://i.ibb.co/rxnRsbB/project-elmo.jpg') no-repeat center / cover"}}>

                <div className={`${styles.project_icon} ${styles.icon_1}`} style = {{bottom: "47%"}}>
                <div className={styles.icon_container}>
                        <AddOutline className={styles.icon} color={'#ffffff'}/>
                    </div>
                    <div className={styles.icon_image}>
                            <Image className= {styles.image} src='https://i.ibb.co/qnL1fGT/project-item1.jpg' layout='fill' objectFit='contain'/>
                    </div>
                </div>

                <div className={`${styles.project_icon} ${styles.icon_2}`}>
                    <div className={styles.icon_container}>
                        <AddOutline className={styles.icon} color={'#ffffff'}/>
                    </div>
                    <div className={styles.icon_image}>
                            <Image className= {styles.image} src='https://i.ibb.co/dtXfZbj/project-item2.jpg' layout='fill' objectFit='contain'/>
                    </div>
                </div>

            </div>
            <div className={styles.desc}>
                [파이썬 프로젝트] Librosa를 이용한 동물의 숲 음성 만들기
            </div>
        </div>

 

        <div className={styles.inline_container} onClick = { () => toggleModal(1) }>
            <div className={styles.project} style = {{background : "url('https://i.ibb.co/276WCsK/project2.jpg') no-repeat center / cover"}}>
            <div className={`${styles.project_icon} ${styles.icon_1}`}>
                <div className={styles.icon_container}>
                        <AddOutline className={styles.icon} color={'#ffffff'}/>
                    </div>
                    <div className={styles.icon_image}>
                            <Image className= {styles.image} src='https://i.ibb.co/qnL1fGT/project-item1.jpg' layout='fill' objectFit='contain'/>
                    </div>
                </div>

                <div className={`${styles.project_icon} ${styles.icon_2_1}`}>
                    <div className={styles.icon_container}>
                        <AddOutline className={styles.icon} color={'#ffffff'}/>
                    </div>
                    <div className={styles.icon_image}>
                            <Image className= {styles.image} src='https://i.ibb.co/G9hFRyJ/project-item2-2.jpg' layout='fill' objectFit='contain'/>
                    </div>
                </div>
                <div className={`${styles.project_icon} ${styles.icon_3}`}>
                    <div className={styles.icon_container}>
                        <AddOutline className={styles.icon} color={'#ffffff'}/>
                    </div>
                    <div className={styles.icon_image}>
                            <Image className= {styles.image} src='https://i.ibb.co/nPS4mj3/project-item2-3.jpg' layout='fill' objectFit='contain'/>
                    </div>
                </div>
            </div>
            <div className={styles.desc}>
                [졸업 작품] 언어장애인을 위한 스마트스피커 &nbsp; 연동 앱
            </div>
            </div>

            <div className={styles.inline_container}>

            <div className={styles.project} style = {{background : "url('https://i.ibb.co/25H7kK1/project3.jpg') no-repeat center / contain"}}>
                
            </div>
            <div className={styles.desc}>
                [리엑트 프로젝트] 나무읽기: 나무위키 읽어주는 사이트
            </div>
            </div>


            <div className={styles.inline_container}>
            <div className={styles.project} style = {{background : "url('https://i.ibb.co/25H7kK1/project3.jpg') no-repeat center / contain"}}>
                
            </div>
            <div className={styles.desc}>
                [블로그] Minimal Mistake를 이용하여 블로그 만들기
            </div>
            </div>


            <div className={styles.inline_container}>
            <div className={styles.project} style = {{background : "url('https://i.ibb.co/25H7kK1/project3.jpg') no-repeat center / contain"}}>
                
                </div>
                <div className={styles.desc}>
                [디자인] 내가 만든 디자인 온라인 전시
            </div>
                </div>


                <div className={styles.inline_container}>
                <div className={styles.project} style = {{background : "url('https://i.ibb.co/25H7kK1/project3.jpg') no-repeat center / contain"}}>
    
                </div>
                <div className={styles.desc}>
                [리엑트 프로젝트] 포트폴리오 사이트 제작
                </div>
                
                </div>

        {modal && <div className={styles.modal_container}>
                <div className = {styles.overlay} onClick = { toggleModal }/>

                <div className={styles.modal}>
                <div className = {styles.modal_image} style = {{background: ModalData[modex].image}}>
                 <YouTube className = {styles.youtube} videoId = { ModalData[modex].youtube } opts={opts} />
                </div>
                <div className = {styles.modal_title}>
                       {ModalData[modex].title}
                </div>

                <div className = {styles.modal_text}>
                       {ModalData[modex].text}
                </div>
                <button className = {styles.modal_button} onClick = { toggleModal }>Close</button>
                </div>
        </div>
        }
        </div>
    </div>
    )
  }
  