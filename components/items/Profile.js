import styles from 'styles/Content.module.scss'
import Image from "next/image";
import { useEffect, useState, useRef } from 'react';

export default function Profile() {

    const array = ["REACT","NEXTJS", "TS", "SASS", "ADOBE"];
    const [index, setIndex] = useState(0);
    const [item, setItem] = useState("REACT");

    const useInterval = (callback, delay) => {
        const savedCallback = useRef(null);
        useEffect(() => {
          savedCallback.current = callback;
        }, [callback]);

        useEffect(() => {
          const executeCallback = () => {
            savedCallback.current();
          };
          const timerId = setInterval(executeCallback, delay);
          return () => clearInterval(timerId);
        }, []);
      }

    useInterval(() => {
        setIndex(index + 1);
        if(index == array.length - 1){
            setIndex(0);
        }
    },7000)

    useEffect(() => {
        setItem(array[index]);
    },[index])


    return (
            <div className={styles.profile_container}>
              <Image src='/../public/src/images/Profile.png' width="180px" height="237px"/>
              <p>임지섭</p>
              <p>@ingb</p>
              <div className={styles.effect_container}>
                  <p data-text={item}>{item}</p>
              </div>
            </div>
    )
}

