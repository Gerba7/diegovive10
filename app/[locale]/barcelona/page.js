import NavbarBarcelona from '@/app/ui/components/Barcelona/NavbarBarcelona/NavbarBarcelona';
import CoverBarcelona from '@/app/ui/components/Barcelona/CoverBarcelona/CoverBarcelona';
import styles from '../../ui/components/Barcelona/barcelona.module.css';
import MapBarcelona from '@/app/ui/components/Barcelona/MapBarcelona/MapBarcelona';
import DataBarcelona from '@/app/ui/components/Barcelona/DataBarcelona/DataBarcelona';
import Contact from '@/app/ui/components/Home/Contact/Contact';
import Script from 'next/script';



const Barcelona = () => {

  return (
    <div className={styles.container}>
      <NavbarBarcelona />
      <CoverBarcelona />
      <DataBarcelona />
      <MapBarcelona />
      <Contact section={'barcelona'} />
      {/* <Script src={`https://maps.googleapis.com/maps/api/js?key=${process.env.GOOGLE_MAPS_API_KEY}&loading=async&libraries=map,marker,places`} strategy="beforeInteractive"></Script> */}
    </div>
  )
}

export default Barcelona