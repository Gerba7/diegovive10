'use client'

import { useEffect, useState } from 'react';
import styles from './navbar.module.css';
import Link from "next/link";
import Image from 'next/image';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { usePathname } from 'next/navigation';
import Logo_DiegoVive10 from '../../../../../public/images/Logo.png';






const Navbar = () => {

    const [navHeight, setNavHeight] = useState(false);
    const [displayMenu, setDisplayMenu] = useState(true);

    const pathname = usePathname();
    
    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setNavHeight(true);
        } else {
            setNavHeight(false);
        }
    };

    useEffect(() => {

      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


    useEffect(() => {
      setDisplayMenu(true);
    }, [pathname]);


    const toggleMenu = (e) => {
      e.preventDefault()
      setDisplayMenu(!displayMenu)
    }


    return (
      <div className={`${styles.container} ${navHeight ? styles.containerHeight : ''}`}>
        <div className={styles.wrapper}>
          <div className={styles.left}>
              <button className={styles.button2}>COMPRAR ENTRADAS</button>
              <div className={styles.burger} onClick={e => toggleMenu(e)}> 
                <div className={styles.menuItem} style={{color: navHeight && '#ffffff'}}>
                  {displayMenu ?  <MenuIcon color='inherit' style={{fontSize: 'inherit'}} /> 
                              :  <CloseIcon color='inherit' style={{fontSize: 'inherit'}} /> }
                </div>
              </div>
              <Link className={styles.logoLink} href='/'>
                  <h1 className={styles.title}>Jochy</h1>
                  <Image className={`${styles.logoNavbar} ${navHeight ? styles.visible : ''}`} src={Logo_DiegoVive10} alt='CLogo_DiegoVive10' width={'auto'} height={50} priority />
              </Link>
          </div>
          <div className={`${styles.right} ${displayMenu ? styles.rightDisplay : ''}`}>
              <Link href='#proyecto' className={styles.link}>HOME</Link>
              <Link href='#contacto' className={styles.link}>EXPERIENCIA</Link>
              <Link href='#contacto' className={styles.link}>INFORMACIÓN</Link>
              <Link href='#contacto' className={styles.link}>UBICACIÓN</Link>
              <Link href='#contacto' className={styles.link}>CONTACTO</Link>
              <button className={styles.button}>COMPRAR ENTRADAS</button>
          </div>
        </div>
      </div>
    )
}

export default Navbar
