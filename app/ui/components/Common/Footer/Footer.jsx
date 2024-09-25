import CookiePolicyModal from '../CookiePolicyModal/CookiePolicyModal';
import styles from './footer.module.css';



const Footer = () => {
  return (
    <div className={styles.container}>
      <CookiePolicyModal content={'Política de cookies'} />
      <div className={styles.text}>© Copyright 2024</div>
    </div>
  )
}

export default Footer
