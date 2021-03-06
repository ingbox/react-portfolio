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
                [????????? ????????????] Librosa??? ????????? ????????? ??? ?????? ?????????
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
                [?????? ??????] ?????????????????? ?????? ?????????????????? &nbsp; ?????? ???
            </div>
            </div>

            <div className={styles.inline_container}  onClick = { () => toggleModal(2)}>

            <div className={styles.project} style = {{background : "url('https://i.ibb.co/25H7kK1/project3.jpg') no-repeat center / contain"}}>
                
            </div>
            <div className={styles.desc}>
                [????????? ????????????] ????????????: ???????????? ???????????? ?????????
            </div>
            </div>


            <div className={styles.inline_container} onClick = { () => toggleModal(3)}>
            <div className={styles.project} style = {{background : "url('https://i.ibb.co/cNPxPKM/picture5.jpg') no-repeat center / cover"}}>
                
            </div>
            <div className={styles.desc}>
                [?????????] Minimal Mistake??? ???????????? ????????? ?????????
            </div>
            </div>


            <div className={styles.inline_container} onClick = { () => toggleModal(4)}>
            <div className={styles.project} style = {{background : "url('https://i.ibb.co/cNPxPKM/picture5.jpg') no-repeat center / cover"}}>
                
                </div>
                <div className={styles.desc}>
                [?????????] ?????? ?????? ????????? ????????? ??????
            </div>
                </div>


                <div className={styles.inline_container} onClick = { () => toggleModal(5)}>
                <div className={styles.project} style = {{background : "url('https://i.ibb.co/bgXVnLW/picture6.jpg') no-repeat center / cover"}}>
    
                </div>
                <div className={styles.desc}>
                [????????? ????????????] ??????????????? ????????? ??????
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
  