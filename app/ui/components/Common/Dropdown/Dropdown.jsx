import Link from 'next/link';
import styles from './dropdown.module.css';



const Dropdown = ({title}) => {
    

  return (
    <div className={`${styles.dropdown}`}>
        {title}
        <span className={styles.dropdownContent}>
            <div className={styles.transparent}></div>
            <a href='https://tickets.oneboxtds.com/diegovive10/events' rel="noopener noreferrer" target="_blank" className={styles.dropdownLink}>BARCELONA</a>
        </span>
    </div>
  )
}

export default Dropdown
