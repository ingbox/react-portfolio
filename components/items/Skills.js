import styles from 'styles/Skills.module.scss'
import SkillData from 'components/datas/SkillData';
import SkillsItem from 'components/items/Skillsitem';
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
                            <div key = {index}>
                                <div className={styles.parts_container}>
                                        { SkillData[index].map((data) => (
                                          <SkillsItem data={data} key = {index}/>
                                        ))}
                                </div>
                            </div>
                        ))}
                </Slider>
                <a href = "#" className={styles.nextButton} onClick={()=> gotoNext()}>&#8250;</a>
            </div>
    )
}

