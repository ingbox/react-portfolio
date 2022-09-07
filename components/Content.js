import styles from 'styles/Content.module.scss'
import Hand from "components/items/Hand"
import Skills from 'components/items/Skills'
import Profile from "components/items/Profile"
import Article from "components/items/Article"
import TimelineItem from 'components/items/TimelineItem'
import TimelineData from 'components/datas/TImelineData'
import { useState, useEffect, useRef } from 'react'


export default function Content() {

    const [height, setHeight] = useState("1270px");
    const ref = useRef();

    useEffect(() => {
        function handleResize() {
        //   console.log('resized to: ', window.innerWidth, 'x', window.innerHeight);
          setHeight(ref.current.scrollHeight + "px");
        //   console.log(height);
    }
        window.addEventListener('resize', handleResize)
      })

    return (
        <div className={styles.cheif_container}>
            <div className = {styles.container}>
                {/* 1열 첫번째 박스 */}
                <p>HELLO</p>
                <div className={styles.hello_container}>
                    {/* <Hand/> */}
                    <Profile/>
                    <Article/>
                </div>

                {/* 1열 두번째 박스 */}
                <p>SKILLS</p>
                <div className={styles.skill_container}>
                    <Skills/>

                    {/* <Graph/>  */}
                </div>
            </div>
                    {/* 2열 박스 */}
            <div className = {styles.container}>
                <p className={styles.timeline_p}>TIMELINE</p>
                <div ref = {ref} className={styles.timeline_container}>
                    <div className={styles.midline} style = {{height: height}}/>
                    {TimelineData.length > 0 &&
                        <div className={styles.inline_container}>
                            {TimelineData.map((data, idx) => (
                                <TimelineItem data = {data} key = {idx}></TimelineItem>
                            ))}
                    </div>}
                </div>
            </div>

        </div>
    )}
