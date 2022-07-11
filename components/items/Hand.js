import styles from 'styles/Content.module.scss'
import Image from "next/image";

export default function Hand() {
    return (
    <div className={styles.Hi}>
        <div className={styles.Hand}>
            <Image src='/../public/src/images/Hand.png'  width='100vw' height='100vh'></Image>
        </div>
        <div className={styles.Shake}>
            <Image src='/../public/src/images/Shake.png'  width='100vw' height='100vh'></Image>
        </div>
    </div>
    )
}