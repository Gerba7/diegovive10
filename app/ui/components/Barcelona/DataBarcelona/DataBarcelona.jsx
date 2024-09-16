import styles from './dataBarcelona.module.css';
import Diego from '../../../../../public/images/data.jpg';
import Image from 'next/image';
import { useMemo } from 'react';
import { helvetica } from '@/app/[locale]/layout';
import { useTranslations } from 'next-intl';
import Diego2 from '../../../../../public/images/diegopngBarce2.png';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckIcon from '@mui/icons-material/Check';
import InfoIcon from '@mui/icons-material/Info';


const DataBarcelona = () => {

  
  const helveticaClassName = useMemo(() => helvetica.className, [helvetica]);

  const t = useTranslations("barcelona");

  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id={t("information")}></div>
      <div className={styles.wrapperLeft}>
        <Image src={Diego2} className={styles.img} width={500} height={300} alt='Diego' />
      </div>
      <div className={styles.left}>
        <div className={styles.subtitle}>{t("infoSub")}</div>
        <div className={styles.title}>{t("info")}</div>
        <div className={styles.questions}>
          <div className={styles.question}>
            <div className={styles.iconContainer}>
              <LocationOnIcon color='inherit' fontSize='inherit' />
            </div>
            {/* <div className={styles.top}>
              <div className={styles.questionTitle}>{t("infoBarcelona1")}</div>
            </div> */}
            <div className={`${styles.answer} ${styles.visible} ${helveticaClassName}`}>
              {t("infoBarcelona1")}
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles.iconContainer}>
              <CalendarTodayIcon color='inherit' fontSize='inherit' />
            </div>
            {/* <div className={styles.top}>
              <div className={styles.questionTitle}>{t("infoBarcelona2")}</div>
            </div> */}
            <div className={`${styles.answer} ${styles.visible} ${helveticaClassName}`}>
              {t("infoBarcelona2")}
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles.iconContainer}>
              <CheckIcon color='inherit' fontSize='inherit' />
            </div>
            {/* <div className={styles.top}>
              <div className={styles.questionTitle}>{t("infoBarcelona3")}</div>
            </div> */}
            <div className={`${styles.answer} ${styles.visible} ${helveticaClassName}`}>
              {t("infoBarcelona3")}
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles.iconContainer}>
              <InfoIcon color='inherit' fontSize='inherit' />
            </div>
            {/* <div className={styles.top}>
              <div className={styles.questionTitle}>{t("infoBarcelona4")}</div>
            </div> */}
            <div className={`${styles.answer} ${styles.visible} ${helveticaClassName}`}>
              {t("infoBarcelona4")}
            </div>
          </div>
        </div>
        <a className={styles.button} href='https://tickets.oneboxtds.com/diegovive10/events' rel="noopener noreferrer" target="_blank">{t("buy")}</a>
      </div>
      <div className={styles.right}>
        
      </div>
    </div>
  )
}

export default DataBarcelona
