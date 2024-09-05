import styles from './data.module.css';
import Diego from '../../../../../public/images/data.jpg';
import Image from 'next/image';
import { useMemo } from 'react';
import { helvetica } from '@/app/[locale]/layout';
import { useTranslations } from 'next-intl';


const Data = () => {

  
  const helveticaClassName = useMemo(() => helvetica.className, [helvetica]);

  const t = useTranslations("information");
  const n = useTranslations("navbar")

  return (
    <div className={styles.container}>
      <div className={styles.scrollOffset} id={n("information")}></div>
      <div className={styles.wrapperLeft}>
        <Image src={Diego} className={styles.img} width={500} height={300} alt='Diego' />
      </div>
      <div className={styles.left}>

      </div>
      <div className={styles.right}>
        <div className={styles.title}>{t("infoTitle")}</div>
        <div className={styles.questions}>
          <div className={styles.question}>
            <div className={styles.top}>
              <div className={styles.questionTitle}>{t("infoSubtitle1")}</div>
              {/* <div className={`${styles.iconContainer} ${activeQuestion === 'question1' && styles.rotate}`} onClick={() => handleToggleAnswer('question1')}>
                <KeyboardArrowDownIcon color='inherit' fontSize='inherit' />
              </div> */}
            </div>
            <div className={`${styles.answer} ${styles.visible} ${helveticaClassName}`}>
              {t("infoDescription1")}
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles.top}>
              <div className={styles.questionTitle}>{t("infoSubtitle2")}</div>
              {/* <div className={`${styles.iconContainer} ${activeQuestion === 'question2' && styles.rotate}`} onClick={() => handleToggleAnswer('question2')}>
                <KeyboardArrowDownIcon color='inherit' fontSize='inherit' />
              </div> */}
            </div>
            <div className={`${styles.answer} ${styles.visible} ${helveticaClassName}`}>
              {t("infoDescription2")}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data
