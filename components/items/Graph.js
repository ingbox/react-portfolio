import styles from 'styles/Content.module.scss'

export default function Graph() {
    return (
    <div>
        <div className={styles.graph}>
            <span style={{width: '75%'}}className={styles.span1}>75%</span>
        </div>
        <div className={styles.graph}>
            <span style={{width: '50%'}}className={styles.span2}>50%</span>
        </div>
        <div className={styles.graph}>
            <span style={{width: '40%'}}className={styles.span3}>40%</span>
        </div>
        <div className={styles.graph}>
            <span style={{width: '30%'}}className={styles.span4}>30%</span>
        </div>
        <div className={styles.graph}>
            <span style={{width: '70%'}}className={styles.span5}>70%</span>
        </div>
    </div>
    )
}