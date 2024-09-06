import { useMemo } from 'react';
import MiniSlider from './MiniSlider/MiniSlider';
import styles from './theExperience.module.css';
import { gabriel, helvetica } from '@/app/[locale]/layout';
import INMERSIVA from '../../../../../public/images/inmersiva.png';
import ENTRETENIMIENTO from '../../../../../public/images/entretenimiento.png';
import ENVOLVENTE from '../../../../../public/images/envolvente.png';
import FAMILIA from '../../../../../public/images/familia.png';
import Tunel2 from '../../../../../public/images/Tunel2.jpg';
import Diegos from '../../../../../public/images/DIEGOS.png';
import Casa from '../../../../../public/images/casa.jpg';
import Mano from '../../../../../public/images/mano.jpg';
import Dribbling from '../../../../../public/images/dribbling.png';
import Penalties from '../../../../../public/images/penales.png';
import VR from '../../../../../public/images/vr.jpg';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Dropdown from '../../Common/Dropdown/Dropdown';



const TheExperience = () => {

    const gabrielClassName = useMemo(() => gabriel.className, [gabriel]);
    const helveticaClassName = useMemo(() => helvetica.className, [helvetica]);

    const t = useTranslations("experience");
    const n = useTranslations("navbar")

  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id={n("experience")}></div>
      <div className={styles.top}>
        <h2 className={`${styles.titles}`}>{t("title1top")}<br/>{t("title1bottom")}</h2>
        <p className={`${helveticaClassName} ${styles.paragraph}`}>
          {t("description")}
        </p>
      </div>
      <div className={styles.icons}>
        <div className={styles.iconContainer}>
            <Image className={styles.icon} src={INMERSIVA} />
            <h3 className={`${helveticaClassName} ${styles.iconTitle}`}>{t("icon1")}<br/>{t("icon1B")}</h3>
        </div>
        <div className={styles.iconContainer}>
            <Image className={styles.icon} src={ENTRETENIMIENTO} />
            <h3 className={`${helveticaClassName} ${styles.iconTitle}`}>{t("icon2")}<br/>{t("icon2B")}</h3>
        </div>
        <div className={styles.iconContainer}>
            <Image className={styles.icon} src={ENVOLVENTE} />
            <h3 className={`${helveticaClassName} ${styles.iconTitle}`}>{t("icon3")}<br/>{t("icon3B")}</h3>
        </div>
        <div className={styles.iconContainer}>
            <Image className={styles.icon} src={FAMILIA} />
            <h3 className={`${helveticaClassName} ${styles.iconTitle}`}>{t("icon4")}<br/>{t("icon4B")}</h3>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <MiniSlider />
      </div>
      <div className={styles.top}>
        <h2 style={{textAlign: 'center'}} className={`${styles.titles}`}>{t("title2top")}<br/>{t("title2bottom")}</h2>
      </div>
      <div className={`${styles.gridContainer} ${helveticaClassName}`}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={Tunel2} alt='' />
          <h4 className={styles.text}><span className={`${styles.color} ${gabrielClassName}`}>{t("img1Title")}</span> {t("img1Description")}</h4>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={Casa} alt='' />
          <h4 className={styles.text}><span className={`${styles.color} ${gabrielClassName}`}>{t("img2Title")}</span> {t("img2Description")}</h4>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={Mano} alt='' />
          <h4 className={styles.text}><span className={`${styles.color} ${gabrielClassName}`}>{t("img3Title")}</span> {t("img3Description")}</h4>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={VR} alt='' />
          <h4 className={styles.text}><span className={`${styles.color} ${gabrielClassName}`}>{t("img4Title")}</span> {t("img4Description")}</h4>
        </div>
      </div>
      <div className={styles.rowContainer}>
        <div className={styles.top2}>
          <h2 style={{textAlign: 'center'}} className={`${styles.titles2}`}>{t("title3top")}<br/>{t("title3bottom")}</h2>
          <div className={`${styles.imgContainer} ${helveticaClassName}`}>
            <Image className={styles.img} src={Dribbling} alt='' />
            <h4 className={styles.text}><span className={`${styles.color} ${gabrielClassName}`}>{t("img5Title")}</span> {t("img5Description")}</h4>
          </div>
          <div className={`${styles.imgContainer} ${helveticaClassName}`}>
            <Image className={styles.img} src={Penalties} alt='' />
            <h4 className={styles.text}><span className={`${styles.color} ${gabrielClassName}`}>{t("img6Title")}</span> {t("img6Description")}</h4>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <Dropdown title={t("buy")} />
        <Image src={Diegos} className={styles.bottomImg} alt='Diego' />
      </div>
    </div>
  )
}

export default TheExperience
