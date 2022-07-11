import { HeaderGoal } from 'components/items/HeaderLink';
import styles from 'styles/Goal.module.scss'

export default function Goal() {

    return (
     <div>
        <HeaderGoal/>
        <div className={styles.background}/>
      </div>
    )
  }