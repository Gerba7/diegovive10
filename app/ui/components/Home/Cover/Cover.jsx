import Image from 'next/image';
import styles from './cover.module.css';
import Logo_DiegoVive10 from '../../../../../public/images/Logo.png';
import { useMemo } from 'react';
import { gabriel } from '@/app/[locale]/layout';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import CityButton from './CityButton/CityButton';



const Cover = () => {

    const gabrielClassName = useMemo(() => gabriel.className, [gabriel]);

    const t = useTranslations("cover");
    const n = useTranslations("navbar");

  return (
    <div className={styles.container}>
        <div className={styles.scrollOffset} id={n("home")}></div>
        <h1 style={{display: 'none'}}>diegovive10</h1>
        <div className={styles.back}>
            <video preload="none" className={styles.video} autoPlay loop muted playsInline> 
                <source src={"/video/video2.mp4"} type="video/mp4" />
            </video>
        </div>
        <div className={styles.wrapper}>
            <Image className={styles.img} src={Logo_DiegoVive10} alt='Logo diegovive10' priority />
            <div className={styles.banner}>
                <div className={styles.titles}>
                    <h2 className={`${styles.bannerText}`}>{t("title")}</h2>
                    <h2 className={`${styles.bannerText}`}>{t("title2")}</h2>
                </div>
                <h3 className={`${gabrielClassName} ${styles.subtitle}`}>{t("subtitle")}</h3>
            </div>
            <div className={styles.countries}>
                <div className={styles.done}>
                    <CityButton city={'BARCELONA'} />
                    <h4 className={`${styles.country} ${styles.soon}`}>BUENOS AIRES</h4>
                    <h4 className={`${styles.country} ${styles.soon}`}>LIMA</h4>
                </div>
                <div className={styles.comingSoon}>
                    <h4 className={`${styles.country} ${styles.soon}`}>NAPOLI</h4>
                    <h4 className={`${styles.country} ${styles.soon}`}>TEL-AVIV</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cover
