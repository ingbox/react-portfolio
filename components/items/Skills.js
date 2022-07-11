import styles from 'styles/Skills.module.scss'
import SkillData from 'components/datas/SkillData';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useRef } from 'react';


export default function Skills() {

    const customSlider = useRef();

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

      const gotoNext = () => {

        customSlider.current.slickNext()

      }
    
      const gotoPrev = () => {
        customSlider.current.slickPrev()
      }
    

    return (
        <div>
                <a href = "#" className={styles.prevButton} onClick={()=> gotoPrev()}>&#8249;</a>
                <Slider {...settings}  ref={customSlider}>
                        { SkillData.map((object, index) =>(
                            <div>
                                <div className={styles.parts_container}>
                                        { SkillData[index].map((data) => (
                                            <div className={styles.skill_parts} style = {{background: data.url}}>
                                                <svg className={styles.circle_container} viewBox="2 -2 28 36" xmlns="http://www.w3.org/2000/svg">
                                                <defs>
                                                    <linearGradient id='gradient'>
                                                        <stop offset='0%' stop-color='#f03234' />
                                                        <stop offset='100%' stop-color='#1b58f2' />
                                                    </linearGradient>
                                                </defs>
                                                    <circle className={styles.circle_container__background} r={16} cx={16} cy={16}></circle>
                                                    <circle className={styles.circle_container__progress} stroke="url(#gradient)" r={16} cx={16} cy={16}></circle>
                                                </svg>
                                            </div>
                                        ))}
                                </div>
                            </div>
                        ))}
                </Slider>
                <a href = "#" className={styles.nextButton} onClick={()=> gotoNext()}>&#8250;</a>
            </div>
    )
}

