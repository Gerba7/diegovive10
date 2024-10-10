import Image from 'next/image';
import styles from './coverBarcelona.module.css';
import Logo_DiegoVive10 from '../../../../../public/images/Logo.png';
import { useMemo } from 'react';
import { gabriel } from '@/app/[locale]/layout';
import { useTranslations } from 'next-intl';
import Dropdown from '../../Common/Dropdown/Dropdown';



const CoverBarcelona = () => {

    const gabrielClassName = useMemo(() => gabriel.className, [gabriel]);

    const t = useTranslations("cover");
    const n = useTranslations("navbar");
    const b = useTranslations("barcelona");

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
                <h3 className={`${gabrielClassName} ${styles.subtitle}`}>{b("barcelona")}</h3>
            </div>
            <div className={styles.countries}>
                <div className={styles.done}>
                    {/* <h4 className={styles.country}>BARCELONA</h4> */}
                    <a className={styles.button} href='https://tickets.oneboxtds.com/diegovive10/events' target="_blank">{b("buy")}</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CoverBarcelona
