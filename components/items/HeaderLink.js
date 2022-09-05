import Link from 'next/link';
import styles from 'styles/Header.module.scss';
import { AiFillProject, AiFillContacts } from 'react-icons/ai';
import { MdHome } from 'react-icons/md';
import {useState} from 'react';

function HeaderHome() {
    return (
    <div>
        <div className={styles.header_layout}/>
            <div className = {styles.header_style}>
            <Link href="/">
                <a className = {styles.container_home}><MdHome className={ styles.link }/><span>Home</span></a>
            </Link>
            <Link href="/Project">
                <a className = {styles.container_home}><AiFillProject className={ styles.link }/><span>Project</span></a> 
            </Link>
            <Link href="/Contact">
                <a className = {styles.container_home}><AiFillContacts className={ styles.link }/><span>Contact</span></a>
            </Link>
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
                <a className = {styles.container_project}><MdHome className={ styles.link } /><span>Home</span></a>
            </Link>
            <Link href="/Project">
                <a className = {styles.container_project}><AiFillProject className={ styles.link }/><span>Project</span></a> 
            </Link>
            <Link href="/Contact">
                <a className = {styles.container_project}><AiFillContacts className={ styles.link }/><span>Contact</span></a>
            </Link>
        </div>
    </div>
    )
  }
  export {HeaderProject};


function HeaderContact() {
    return (
    <div>
        <div className={styles.header_layout}/>
            <div className = {styles.header_style}>
            <Link href="/">
                <a className = {styles.container_contact}><MdHome className={ styles.link }/><span>Home</span></a>
            </Link>
            <Link href="/Project">
                <a className = {styles.container_contact}><AiFillProject className={ styles.link }/><span>Project</span></a> 
            </Link>
            <Link href="/Contact">
                <a className = {styles.container_contact}><AiFillContacts className={ styles.link }/><span>Contact</span></a>
            </Link>
        </div>
    </div>
    )
  }
  export {HeaderContact};