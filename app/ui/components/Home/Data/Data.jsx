import styles from './data.module.css';
import Diego from '../../../../../public/images/data.jpg';
import Image from 'next/image';
import { useMemo } from 'react';
import { helvetica } from '@/app/layout';


const Data = () => {

  
  const helveticaClassName = useMemo(() => helvetica.className, [helvetica]);

  return (
    <div className={styles.container}>
      <div className={styles.wrapperLeft}>
        <Image src={Diego} className={styles.img} width={500} height={300} alt='Diego' />
      </div>
      <div className={styles.left}>

      </div>
      <div className={styles.right}>
        <div className={styles.title}>INFORMACIÓN PRÁCTICA</div>
        <div className={styles.questions}>
          <div className={styles.question}>
            <div className={styles.top}>
              <div className={styles.questionTitle}>Qué es DIEGO VIVE?</div>
              {/* <div className={`${styles.iconContainer} ${activeQuestion === 'question1' && styles.rotate}`} onClick={() => handleToggleAnswer('question1')}>
                <KeyboardArrowDownIcon color='inherit' fontSize='inherit' />
              </div> */}
            </div>
            <div className={`${styles.answer} ${styles.visible} ${helveticaClassName}`}>
              DIEGO VIVE es el primer PARQUE TEMÁTICO del mundo concebido y creado como homenaje a DIEGO ARMANDO MARADONA, 
              figura deportiva tan grande en fama y carisma, ídolo inmortal 
              para millones de aficionados. Un gran espacop de entretenimiento para toda la faimilia, donde padres y abuelos 
              podrán compartir con hijos y nietos la emoción de un viaje en el tiempo junto al mejor jugador de fútbol de todos 
              los tiempos. Un evento imperdible para todos aquellos que amaron, y aún aman, al campeón eterno, en el imaginario 
              colectivo mucho más que un futbolista. Una aventura 3D que te permite sentirte Maradona por un día, suspendido entre sueño y realidad.
            </div>
          </div>
          <div className={styles.question}>
            <div className={styles.top}>
              <div className={styles.questionTitle}>Cuánto dura la visita?</div>
              {/* <div className={`${styles.iconContainer} ${activeQuestion === 'question2' && styles.rotate}`} onClick={() => handleToggleAnswer('question2')}>
                <KeyboardArrowDownIcon color='inherit' fontSize='inherit' />
              </div> */}
            </div>
            <div className={`${styles.answer} ${styles.visible} ${helveticaClassName}`}>
              La visita al parque tiene una duración de aproximadamente 50 minutos.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Data
