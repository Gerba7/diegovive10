import Image from 'next/image';
import styles from './cover.module.css';
import Logo_DiegoVive10 from '../../../../../public/images/Logo.png';
import { useMemo } from 'react';
import { gabriel } from '@/app/layout';



const Cover = () => {

    const gabrielClassName = useMemo(() => gabriel.className, [gabriel]);

  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id='quienes-somos'></div>
        <h1 style={{display: 'none'}}>diegovive10</h1>
        <div className={styles.back}>
            <video preload="none" className={styles.video} autoPlay loop muted playsInline> 
                <source src={"/video/video2.mp4"} type="video/mp4" />
            </video>
        </div>
        <div className={styles.wrapper}>
            <Image className={styles.img} src={Logo_DiegoVive10} alt='Logo diegovive10' priority />
            <div className={styles.banner}>
                <h2 className={`${gabrielClassName} ${styles.bannerText}`}>UNA EXPERIENCIA INMERSIVA</h2>
                <h3 className={`${gabrielClassName} ${styles.subtitle}`}>World Tour</h3>
            </div>
            <div className={styles.countries}>
                <div className={styles.done}>
                    <h4 className={styles.country}>NAPOLI</h4>
                    <h4 className={styles.country}>TEL-AVIV</h4>
                </div>
                <div className={styles.comingSoon}>
                    <h4 className={styles.country}>BARCELONA</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cover
