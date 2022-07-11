import styles from 'styles/Content.module.scss';
import Mytag from 'components/datas/MytagData';
import MytagItem from 'components/items/MytagItem';

export default function Article() {
    return (
        <div className={styles.article}>
            {Mytag.length > 0 && 
                Mytag.map((data, idx) => (
                    <MytagItem data = {data} key = {idx}></MytagItem>   
                    ))}
        </div>


    )
}


// <div className={styles.stagger_item}>
//<p style = {{marginTop: "3vh", color: "#000"}}>Brief & Me</p>