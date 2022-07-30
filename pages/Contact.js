import { HeaderContact } from 'components/items/HeaderLink';
import styles from 'styles/Contact.module.scss'
import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import moment from "moment";
import Image from "next/image";

import { BsPinAngleFill } from 'react-icons/bs';
import { FiPaperclip } from 'react-icons/fi';
import { VolumeLow } from 'react-ionicons';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s87rvzo', 'template_qt8v1vj', form.current, 'DAk-1FUYo1J43tMFW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert('성공적으로 전송되었습니다')
  };

  const [currentDate, setCurrentDate] = useState('');
  const [currentNow, setCurrentNow] = useState('');
 
  useEffect(() => {
    var date = moment().utcOffset('+09:00').format('MMM DD, YYYY hh:mm');
    setCurrentDate(
      date
    );
  }, []);

  const nowtime = (offset) => {
    var now = moment().utcOffset(offset).format('MMM DD, YYYY');
    return now;
    }

    return (
      <div>
        <HeaderContact/>
        <div className={styles.background}/>
        <div className={styles.cheif_container}>
          <div className={styles.main_container}>

            <div className={styles.message_container}>
              <div className={styles.message_list}>

              <div className={styles.profile_container}>
              <div className={styles.profile} style = {{background: "url('https://i.ibb.co/Y7KJHrv/image.jpg') no-repeat center / cover"}}/>
              </div>
                <div className={styles.title_container}>
                <div className={styles.name}>잉브</div>
                  <div className={styles.title}>가나다</div>
                  <div className={styles.message}>집안 인테리어로 바쁨😅😅</div>
                  <div className={styles.location}>경기도 안성시 숭인동</div>
                </div>

                <div className={styles.time_container}>
                <div className = {styles.time}>{ nowtime('-24:00') }</div>
                <BsPinAngleFill className = {styles.pin}/>
                <FiPaperclip className = {styles.clip}/>
              </div>
              </div>


              <div className={styles.message_list}>
              <div className={styles.profile_container}>
              <div className={styles.profile} style = {{background: "url('https://image.newdaily.co.kr/site/data/img/2010/08/17/2010081700051_0.jpg') no-repeat top / cover"}}/>
              </div>
              <div className={styles.title_container}>
                <div className={styles.name}>강동원빈</div>
                <div className={styles.title}>아직 한 발 남았다...</div>
                <div className={styles.message}>이력서...</div>
                <div className={styles.location}>이나영 마음 속</div>
              </div>
              <div className={styles.time_container}>
                <div className = {styles.time}>{ nowtime('-48:00') }</div>
                <BsPinAngleFill className = {styles.pin}/>
                <FiPaperclip className = {styles.clip}/>
              </div>
              </div>

              
              <div className={styles.message_list}>
              <div className={styles.profile_container}>
              <div className={styles.profile} style = {{background: "url('https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Elon_Musk_Royal_Society.jpg/225px-Elon_Musk_Royal_Society.jpg') no-repeat top / cover"}}>
                <div className={styles.notread}/>
              </div>
              </div>
              <div className={styles.title_container}>
                <div className={styles.name}>Elon Musk</div>
                <div className={styles.title}>Scout Offer</div>
                <div className={styles.message}>Would you like to work with me?</div>
                <div className={styles.location}>Space Exploration Technologies Corp.</div>
              </div>
              <div className={styles.time_container}>
              <div className = {styles.time}>{ nowtime('-48:00') }</div>
                <BsPinAngleFill className = {styles.pin}/>
                <FiPaperclip className = {styles.clip}/>
              </div>
              </div>


              <div className={styles.message_list}>
              <div className={styles.profile_container}>
              <div className={styles.profile} style = {{background: "url('https://i.ibb.co/MMSLnDZ/image.jpg') no-repeat center / cover"}}>
                <div className={styles.notread}/>
              </div>
              </div>
              <div className={styles.title_container}>
                <div className={styles.name}>희망의 시작 요그사론</div>
                <div className={styles.title}>삶의 신이여! 경배하노라!</div>
                <div className={styles.message}>구하라 그러면 얻을지어다</div>
                <div className={styles.location}>밝은지상의 낙원</div>
              </div>
              <div className={styles.time_container}>
              <div className = {styles.time}>{ nowtime('-72:00') }</div>
                <BsPinAngleFill className = {styles.pin}/>
                <FiPaperclip className = {styles.clip}/>
              </div>
              </div>


              <div className={styles.message_list}>
              <div className={styles.profile_container}>
              <div className={styles.profile} style = {{background: "url('https://i.ibb.co/yfFBvWM/image.jpg') no-repeat center / cover"}}>
                <div className={styles.notread}/>
              </div>
              </div>
              <div className={styles.title_container}>
                <div className={styles.name}>12시에 우는 망나뇽</div>
                <div className={styles.title}>망!망망!!망망</div>
                <div className={styles.message}>망!망망망!망망!!망망망!!망망</div>
                <div className={styles.location}>관동지방 금빛시티 용의 굴</div>
              </div>
              <div className={styles.time_container}>
              <div className = {styles.time}>{ nowtime('-72:00') }</div>
                <BsPinAngleFill className = {styles.pin}/>
                <FiPaperclip className = {styles.clip}/>
              </div>
              </div>

            </div>

            <form ref = { form } className={styles.contact_container} onSubmit={sendEmail}>
              <div className={styles.contact}><p>Contact</p></div>
              <div className={styles.contact_profile_container}>
          
              <div className={styles.contact_profile}></div>
              <div className={styles.contact_profile_name}>
                <input className={styles.input} type="text" placeholder={"Name"} name= "user_name"/>
                <input className={styles.input} type="text" placeholder={"Email"} name= "user_email"/>
              </div>
              </div>
              <div>
                <p className={styles.now}>Today, {currentDate}</p>
              </div>
              <div className={styles.contact_title_container}>
              <input className={styles.input_title} type="text" placeholder={"Subject"} name= "subject"/>
              </div>
              <div className={styles.textarea_container}>
                <textarea className={styles.textarea} type="text" placeholder={"Write A Message.."} name= "message"/>
              </div>
              <div><button type="submit" className={styles.button}>Send Email</button></div>
            </form>
          </div>
        </div>
      </div>
    )
  }
