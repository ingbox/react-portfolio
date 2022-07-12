import { HeaderContact } from 'components/items/HeaderLink';
import styles from 'styles/Contact.module.scss'
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser'
import { TiLocation } from 'react-icons/ti';
import { IoIosCall } from 'react-icons/io'
import { MdEmail } from 'react-icons/md'

export default function Contact() {

  const [isSelected, setSelected] = useState(0);
  
  const isClicked = () => {
    setSelected((prev) => !prev)
  }

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

    return (
      <div>
        <HeaderContact/>
        <div className={styles.background}/>
        <div className={styles.cheif_container}>
          <div className={isSelected ?  `${styles.box} ${styles.box_animation}` : `${styles.box} ${styles.box_origin}`} >
          <div className={styles.contact_container}>
          <p>Get In Touch</p>
          <p>Feel free to contact me for any request or collaboration.</p>
          <div className={styles.contact_item}>
            <div className={styles.item_container}><TiLocation className={styles.item}/><span>경기도 안성시 혜산로</span></div>
            <div className={styles.item_container}><IoIosCall className={styles.item}/><span>+82 xxx-xxxx-xxxx</span></div>
            <div className={styles.item_container}><MdEmail  className={styles.item}/><span>ingb_@naver.com</span></div>
          </div>
          <button className={styles.front_button}>Email Now</button>
          </div>
          <div className={styles.back_container}>
          <p>Get in touch</p>
            <div className = {styles.back_child_container}>
              <form ref = {form} className={styles.form} onSubmit={sendEmail}>
                  
                    <input className={styles.input} type="text" placeholder={"Name"} name= "user_name"/>
                    <input className={styles.input} type="text" placeholder={"Email"} name= "user_email"/>
                    <input className={styles.input} type="text" placeholder={"Subject"} name= "subject"/>
                    <textarea className={styles.textarea} type="text" placeholder={"Message"} name= "message"/>
                    <button type="submit" className={styles.button}>Send Email</button>
              </form>
              </div>
          </div>
          </div>
          <div className={styles.ingb_container} onClick={ isClicked }>
          <div className={styles.ingb}/>
          <div className={styles.ingb_body}/>
          <div className={styles.ingb_hand}/>
          </div>
        </div>
      </div>
    )
  }
