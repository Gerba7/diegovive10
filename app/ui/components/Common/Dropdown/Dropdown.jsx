import Link from 'next/link';
import styles from './dropdown.module.css';



const Dropdown = ({title}) => {
    

  return (
    <div className={`${styles.dropdown}`}>
        {title}
        <span className={styles.dropdownContent}>
            <div className={styles.transparent}></div>
            <Link className={styles.dropdownLink} href='/'>BARCELONA</Link>
        </span>
    </div>
  )
}

export default Dropdown
