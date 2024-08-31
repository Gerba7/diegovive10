import { useMemo } from 'react';
import MiniSlider from './MiniSlider/MiniSlider';
import styles from './theExperience.module.css';
import { gabriel } from '@/app/layout';
import INMERSIVA from '../../../../../public/images/inmersiva.png';
import ENTRETENIMIENTO from '../../../../../public/images/entretenimiento.png';
import ENVOLVENTE from '../../../../../public/images/envolvente.png';
import FAMILIA from '../../../../../public/images/familia.png';
import Image from 'next/image';



const TheExperience = () => {

    const gabrielClassName = useMemo(() => gabriel.className, [gabriel]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2 className={`${gabrielClassName} ${styles.titles}`}>EXPERIENCIA<br/>INMERSIVA</h2>
        <></>
      </div>
      <div className={styles.icons}>
        <div className={styles.iconContainer}>
            <Image className={styles.icon} src={INMERSIVA} />
            <h3 className={styles.iconTitle}>Tecnología<br/>Inmersiva</h3>
        </div>
        <div className={styles.iconContainer}>
            <Image className={styles.icon} src={ENTRETENIMIENTO} />
            <h3 className={styles.iconTitle}>2000 m2 de<br/>entretenimiento</h3>
        </div>
        <div className={styles.iconContainer}>
            <Image className={styles.icon} src={ENVOLVENTE} />
            <h3 className={styles.iconTitle}>Experiencia<br/>envolvente</h3>
        </div>
        <div className={styles.iconContainer}>
            <Image className={styles.icon} src={FAMILIA} />
            <h3 className={styles.iconTitle}>Para toda<br/>la família</h3>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <MiniSlider />
      </div>
    </div>
  )
}

export default TheExperience
