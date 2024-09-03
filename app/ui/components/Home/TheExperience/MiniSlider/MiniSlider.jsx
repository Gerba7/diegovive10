'use client'

import React, { useEffect, useState } from 'react';
import styles from './miniSlider.module.css';
import Image from 'next/image';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import MEMORABILIA from '../../../../../../public/images/tunel.jpg';
import TUNEL from '../../../../../../public/images/Tunel2.jpg';
import HOLOGRAMA from '../../../../../../public/images/holograma.jpg';



const items = [
    {
      id: 0,
      title: 'TÚNEL',
      img: TUNEL,
      title2: 'EL ENCUENTRO CON DIEGO.',
      text: 'Un túnel de imágenes te llevará a un recorrido por la vida de Maradona, marcado por una alfombra luminosa.'
    },
    {
      id: 1,
      title: 'INMERSIVA',
      img: HOLOGRAMA,
      title2: 'EXPERIENCIA INMERSIVA.',
      text: 'La sala principal del PARQUE ofrece un espectáculo inmersivo de 20 minutos, una obra de videoarte inédita que recorre la vida de Maradona.'
    },
    {
      id: 2,
      title: 'MEMORABILIA',
      img: MEMORABILIA,
      title2: 'LA VIDA DE DIEGO.',
      text: 'Una EXPOSICIÓN FOTOGRÁFICA de su vida personal y deportiva. Infografías con los eventos más destacados de su vida y carrera.'
    },
]



const MiniSlider = () => {

    

    const [slideIndex, setSlideIndex] = useState(0);
    
    const handleClick = (direction) => {

        if(direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : items?.length - 1)
        } else {
            setSlideIndex(slideIndex < items?.length - 1 ? slideIndex + 1 : 0)
        }

    }

    const carouselScroll = () => {

        if (slideIndex === items?.length - 1) {
            return setSlideIndex(0)
        }
        
        return setSlideIndex(slideIndex + 1)
    }


    useEffect(() => {
        
        const interval = setInterval(() => {carouselScroll()}, 5000)

        return () => clearInterval(interval)

    }, [slideIndex])




  return (
    <div className={styles.container}>
        <></>
        <div className={styles.topSelectors}>
            {items?.map((item, idx) => (
                <h3 key={idx} className={`${styles.titleSelector} ${slideIndex === idx && styles.titleActive}`} onClick={() => setSlideIndex(idx)}>{item.title}</h3>
            ))}
        </div>
        <div className={`${styles.arrow} ${styles.arrowLeft}`} onClick={() => handleClick("left")}>
            <KeyboardArrowLeftIcon style={{color: '#f5f5f5'}} fontSize='inherit' />
        </div>
        <div className={styles.wrapper}>
            {items?.map((item, idx) => (
                <div className={styles.slide} key={idx} style={{ transform: `translate(-${slideIndex * 100}%)`}}>
                    <div className={styles.background}>
                        <Image src={item.img} className={styles.backgroundImg} alt='Razones' />
                    </div>
                    <div className={styles.textContainer}>
                        <h3 className={`${styles.footerText}`}>{item.title2}</h3>
                        <p className={styles.text}>{item.text}</p>
                    </div>
                </div>
            ))}
        </div>
        <div className={`${styles.arrow} ${styles.arrowRight}`} onClick={() => handleClick("right")}>
            <KeyboardArrowRightIcon style={{color: '#f5f5f5'}} fontSize='inherit' />
        </div>
        {/* <div className={styles.dotsContainer}>
            {items?.map((_, idx) => (
                <div key={idx} className={`${styles.dot} ${slideIndex === idx && styles.dotActive}`} onClick={() => setSlideIndex(idx)} />
            ))}
        </div> */}
    </div>
  )
}

export default MiniSlider
