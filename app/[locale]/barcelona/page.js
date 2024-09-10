import NavbarBarcelona from '@/app/ui/components/Barcelona/NavbarBarcelona/NavbarBarcelona';
import CoverBarcelona from '@/app/ui/components/Barcelona/CoverBarcelona/CoverBarcelona';
import styles from '../../ui/components/Barcelona/barcelona.module.css';
import MapBarcelona from '@/app/ui/components/Barcelona/MapBarcelona/MapBarcelona';



const Barcelona = () => {

  return (
    <div className={styles.container}>
      <NavbarBarcelona />
      <CoverBarcelona />
      <MapBarcelona />
    </div>
  )
}

export default Barcelona