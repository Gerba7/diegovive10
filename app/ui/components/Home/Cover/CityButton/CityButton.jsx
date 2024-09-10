'use client'

import { usePathname } from 'next/navigation';
import styles from './cityButton.module.css';
import Link from 'next/link';



const CityButton = ({city}) => {

    const pathname = usePathname();

  return (
    <Link href={`${pathname}/barcelona`} className={styles.country}>{city}</Link>
  )
}

export default CityButton
