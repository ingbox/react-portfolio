import styles from 'styles/Content.module.scss'

export default function TimelineItem({data}) {
    return (
    <div className={styles.timeline_item}>
        <div className={styles.timeline_item_content}>
            <span className={styles.tag} style= {{background: data.category.color}}>
                {data.category.tag}
            </span>
            <time>{data.date}</time>
            <p>{data.text}</p>
            {data.link && <a href={data.link.url} target="_blank" rel="noopener norefferer">
                {data.link.text}
            </a>}
            <span className={styles.circle}></span>
        </div>
    </div> 
    )
}