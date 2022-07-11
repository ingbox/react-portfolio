import styles from 'styles/Content.module.scss'
import Hand from "components/items/Hand"
// import Graph from "components/items/Graph"
import Skills from 'components/items/Skills'
import Profile from "components/items/Profile"
import Article from "components/items/Article"
import TimelineItem from 'components/items/TimelineItem'
import TimelineData from 'components/datas/TImelineData'
import { useState, useEffect } from 'react'


export default function Content({ data }) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
      }, [])
      if (!mounted) {
        return null
      }

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
                <p>TIMELINE</p>
                <div className={styles.timeline_container}>
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
