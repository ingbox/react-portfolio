import styles from 'styles/Content.module.scss'

export default function MytagItem({data}) {
    return (
    <div>
        <span className={styles.mytag_container} style= {{background: data.color}}>
                {data.text}
        </span>
    </div> 
    )
}