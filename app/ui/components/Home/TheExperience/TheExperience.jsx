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
import Dribbling from '../../../../../public/images/dribbling.png';
import Penalties from '../../../../../public/images/penales.png';
import VR from '../../../../../public/images/vr.jpg';
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
      <div className={`${styles.gridContainer} ${helveticaClassName}`}>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={Tunel2} alt='' />
          <h4 className={styles.text}><span className={`${styles.color} ${gabrielClassName}`}>El Gol del siglo.</span></h4>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={Casa} alt='' />
          <h4 className={styles.text}><span className={`${styles.color} ${gabrielClassName}`}>Descubre la historia de Diego.</span> La reconstrucción de la casa donde Diego pasó su infancia es muy emotiva. Al entrar, se siente el gran valor simbólico de este lugar.</h4>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={Mano} alt='' />
          <h4 className={styles.text}><span className={`${styles.color} ${gabrielClassName}`}>El gol con la mano.</span> La reconstrucción de la casa donde Diego pasó su infancia es muy emotiva. Al entrar, se siente el gran valor simbólico de este lugar.</h4>
        </div>
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={VR} alt='' />
          <h4 className={styles.text}><span className={`${styles.color} ${gabrielClassName}`}>El Gol del siglo.</span> Estaciones interactivas permiten a los visitantes vivir en primera persona uno de los momentos más icónicos de Maradona: el gol a Inglaterra.</h4>
        </div>
      </div>
      <div className={styles.rowContainer}>
        <div className={styles.top}>
          <h2 style={{textAlign: 'center'}} className={`${styles.titles}`}>DESAFIOS<br/>DEL 10</h2>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src={Dribbling} alt='' />
            <h4 className={styles.text}><span className={`${styles.color} ${gabrielClassName}`}>Vive la experiencia Maradona!</span> Juegos interactivos diseñados especialmente para DIEGO VIVE te permitirán entrenar y divertirte como un verdadero campeón.</h4>
          </div>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src={Penalties} alt='' />
            <h4 className={styles.text}><span className={`${styles.color} ${gabrielClassName}`}>El Gol del siglo.</span> Estaciones interactivas permiten a los visitantes vivir en primera persona uno de los momentos más icónicos de Maradona: el gol a Inglaterra.</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TheExperience
