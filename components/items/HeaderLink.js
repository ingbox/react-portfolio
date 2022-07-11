import Link from 'next/link';
import styles from 'styles/Header.module.scss';
import { AiOutlineHome, AiOutlineProject, AiOutlineTrophy, AiOutlineContacts } from 'react-icons/ai';

function HeaderHome() {
    return (
    <div>
        <div className={styles.header_layout}/>
            <div className = {styles.header_style}>
            <Link href="/">
                <a className = {styles.container}><AiOutlineHome className={ styles.link }/><span>Home</span></a>
            </Link>
            <Link href="/Project">
                <a className = {styles.container}><AiOutlineProject className={ styles.link }/><span>Project</span></a> 
            </Link>
            <Link href="/Goal">
                <a className = {styles.container}><AiOutlineTrophy className={ styles.link }/><span>Goal</span></a>
            </Link>
            <Link href="/Contact">
                <a className = {styles.container}><AiOutlineContacts className={ styles.link }/><span>Contact</span></a>
            </Link>
            <div className={styles.indicator}/>
        </div>
    </div>

    )
  }
  export {HeaderHome};

function HeaderProject() {
    return (
    <div>
        <div className={styles.header_layout}/>
            <div className = {styles.header_style}>
            <Link href="/">
                <a className = {styles.container}><AiOutlineHome className={ styles.link }/><span>Home</span></a>
            </Link>
            <Link href="/Project">
                <a className = {styles.container}><AiOutlineProject className={ styles.link }/><span>Project</span></a> 
            </Link>
            <Link href="/Goal">
                <a className = {styles.container}><AiOutlineTrophy className={ styles.link }/><span>Goal</span></a>
            </Link>
            <Link href="/Contact">
                <a className = {styles.container}><AiOutlineContacts className={ styles.link }/><span>Contact</span></a>
            </Link>
            <div className={styles.indicator_Project}/>
        </div>
    </div>
    )
  }
  export {HeaderProject};

function HeaderGoal() {
    return (
    <div>
        <div className={styles.header_layout}/>
            <div className = {styles.header_style}>
            <Link href="/">
                <a className = {styles.container}><AiOutlineHome className={ styles.link }/><span>Home</span></a>
            </Link>
            <Link href="/Project">
                <a className = {styles.container}><AiOutlineProject className={ styles.link }/><span>Project</span></a> 
            </Link>
            <Link href="/Goal">
                <a className = {styles.container}><AiOutlineTrophy className={ styles.link }/><span>Goal</span></a>
            </Link>
            <Link href="/Contact">
                <a className = {styles.container}><AiOutlineContacts className={ styles.link }/><span>Contact</span></a>
            </Link>
            <div className={styles.indicator_Goal}/>
        </div>
    </div>
    )
  }
  export {HeaderGoal};

function HeaderContact() {
    return (
    <div>
        <div className={styles.header_layout}/>
            <div className = {styles.header_style}>
            <Link href="/">
                <a className = {styles.container}><AiOutlineHome className={ styles.link }/><span>Home</span></a>
            </Link>
            <Link href="/Project">
                <a className = {styles.container}><AiOutlineProject className={ styles.link }/><span>Project</span></a> 
            </Link>
            <Link href="/Goal">
                <a className = {styles.container}><AiOutlineTrophy className={ styles.link }/><span>Goal</span></a>
            </Link>
            <Link href="/Contact">
                <a className = {styles.container}><AiOutlineContacts className={ styles.link }/><span>Contact</span></a>
            </Link>
            <div className={styles.indicator_Contact}/>
        </div>
    </div>
    )
  }
  export {HeaderContact};