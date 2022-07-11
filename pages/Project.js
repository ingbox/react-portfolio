import { HeaderProject } from 'components/items/HeaderLink'
import styles from 'styles/Project.module.scss'

export default function Project() {
    return (
    <div>
        <HeaderProject/>
        <div className={styles.background}/>
    </div>
    )
  }
  