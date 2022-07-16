import styles from 'styles/Skills.module.scss'

export default function SkillsItem({data}) {
    return (
    <div className={styles.skill_parts} style = {{background: data.url}}>
        <svg className={styles.circle_container} viewBox="2 -2 28 36" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <linearGradient id='gradient'>
                <stop offset='0%' stopColor='#f03234'/>
                <stop offset='100%' stopColor='#1b58f2'/>
            </linearGradient>
        </defs>
            <circle className={styles.circle_container__background} r={16} cx={16} cy={16}></circle>
            <circle className={styles.circle_container__progress} stroke="url(#gradient)" r={16} cx={16} cy={16} strokeDashoffset= {data.per}></circle>
        </svg>
    </div>
    )
}