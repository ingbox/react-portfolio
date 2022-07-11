import styles from 'styles/Home.module.scss'
import { HeaderHome } from 'components/items/HeaderLink'
import Content from 'components/Content'

export default function Home() {
  return (
    <div>
    <title>임지섭 프론트엔드 Portfolio</title>
    <meta name="description" content="BLTN" />
      <HeaderHome/>
      <Content/>
      <div className={styles.background}/>
    </div>
  )
}
