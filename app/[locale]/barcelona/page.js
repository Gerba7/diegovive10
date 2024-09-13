import NavbarBarcelona from '@/app/ui/components/Barcelona/NavbarBarcelona/NavbarBarcelona';
import CoverBarcelona from '@/app/ui/components/Barcelona/CoverBarcelona/CoverBarcelona';
import styles from '../../ui/components/Barcelona/barcelona.module.css';
import MapBarcelona from '@/app/ui/components/Barcelona/MapBarcelona/MapBarcelona';
import DataBarcelona from '@/app/ui/components/Barcelona/DataBarcelona/DataBarcelona';
import Contact from '@/app/ui/components/Home/Contact/Contact';



const Barcelona = () => {

  return (
    <div className={styles.container}>
      <NavbarBarcelona />
      <CoverBarcelona />
      <DataBarcelona />
      <MapBarcelona />
      <Contact section={'barcelona'} />
    </div>
  )
}

export default Barcelona