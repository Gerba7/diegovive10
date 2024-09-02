import { useMemo } from 'react';
import MiniSlider from './MiniSlider/MiniSlider';
import styles from './theExperience.module.css';
import { gabriel, helvetica } from '@/app/layout';
import INMERSIVA from '../../../../../public/images/inmersiva.png';
import ENTRETENIMIENTO from '../../../../../public/images/entretenimiento.png';
import ENVOLVENTE from '../../../../../public/images/envolvente.png';
import FAMILIA from '../../../../../public/images/familia.png';
import Tunel2 from '../../../../../public/images/Tunel2.jpg';
import Casa from '../../../../../public/images/casa.jpg';
import Mano from '../../../../../public/images/mano.jpg';
import Image from 'next/image';



const TheExperience = () => {

    const gabrielClassName = useMemo(() => gabriel.className, [gabriel]);
    const helveticaClassName = useMemo(() => helvetica.className, [helvetica]);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <h2 className={`${styles.titles}`}>VENÍ A ENCONTRARTE <br/>CON DIEGO</h2>
        <p className={`${helveticaClassName} ${styles.paragraph}`}>
          Viví una experiencia única en homenaje a Diego Armando Maradona, el 
          mejor jugador de todos los tiempos. En evento para toda la familia. 
          La historia de un niño que se convirtió en mito
        </p>
      </div>
      <div className={styles.icons}>
        <div className={styles.iconContainer}>
            <Image className={styles.icon} src={INMERSIVA} />
            <h3 className={`${helveticaClassName} ${styles.iconTitle}`}>Tecnología<br/>Inmersiva</h3>
        </div>
        <div className={styles.iconContainer}>
            <Image className={styles.icon} src={ENTRETENIMIENTO} />
            <h3 className={`${helveticaClassName} ${styles.iconTitle}`}>2000 m2 de<br/>entretenimiento</h3>
        </div>
        <div className={styles.iconContainer}>
            <Image className={styles.icon} src={ENVOLVENTE} />
            <h3 className={`${helveticaClassName} ${styles.iconTitle}`}>Experiencia<br/>envolvente</h3>
        </div>
        <div className={styles.iconContainer}>
            <Image className={styles.icon} src={FAMILIA} />
            <h3 className={`${helveticaClassName} ${styles.iconTitle}`}>Para toda<br/>la família</h3>
        </div>
      </div>
      <div className={styles.carouselContainer}>
        <MiniSlider />
      </div>
      <div className={styles.top}>
        <h2 style={{textAlign: 'center'}} className={`${styles.titles}`}>CONVERTITE EN MARADONA<br/>POR UN DIA</h2>
      </div>
      <div className={styles.gridContainer}>
        <Image className={styles.img} src={Tunel2} alt='' />
        <Image className={styles.img} src={Casa} alt='' />
        <Image className={styles.img} src={Mano} alt='' />
        <Image className={styles.img} src={Tunel2} alt='' />
      </div>
    </div>
  )
}

export default TheExperience
