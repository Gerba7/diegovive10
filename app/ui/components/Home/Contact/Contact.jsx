import styles from './contact.module.css';
import Form from './Form/Form';
import AirEuraopa from '../../../../../public/images/aireuropa.png';
import BsAs from '../../../../../public/images/logo-bs.png';
import AFA from '../../../../../public/images/logo-afa.png';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';
import { useTranslations } from 'next-intl';



const Contact = () => {

  const t = useTranslations("contact");
  const n = useTranslations("navbar")

  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id={n("contact")}></div>
      <div className={styles.back} />
      <div className={styles.left}>
        <h2 className={styles.title}>{t("contactTitle")}</h2>
        <Form />
      </div>
      <div className={styles.right}>
        <div className={styles.socialContainer}>
            <h3 className={styles.subtitle}>{t("follow")}</h3>
            <div className={styles.icons}> 
                <a href='https://www.facebook.com/diegovive10' className={`${styles.socialIcon} ${styles.facebook}`} aria-label="Facebook Link">
                    <FacebookIcon fontSize='inherit' />
                </a>
                <a href='https://www.instagram.com/diego_vive10' rel="noopener noreferrer" className={`${styles.socialIcon} ${styles.instagram}`} aria-label="Instagram Link">
                    <InstagramIcon fontSize='inherit' />
                </a>
            </div>
        </div>
        <div className={styles.sponsorsContainer}>
            <h3 className={styles.subtitle}>{t("sponsors")}</h3>
            <div className={styles.sponsors}>
                <Image className={styles.sponsor} src={AirEuraopa} alt='aireuopa' /> 
                <Image className={styles.sponsor} src={BsAs} alt='buenos aires' /> 
                <Image className={styles.sponsor} src={AFA} alt='afa' /> 
            </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
