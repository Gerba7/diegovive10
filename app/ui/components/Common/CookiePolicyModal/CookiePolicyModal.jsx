'use client'

import styles from './cookiePolicyModal.module.css';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';




export default function CookiePolicyModal({content}) {

  const [open, setOpen] = useState(false);


  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);





  return (
    <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
      <div onClick={handleOpen} style={{cursor: 'pointer'}}>{content}</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className={styles.box}>
            <div className={styles.closeButton} onClick={handleClose}>
                <CloseIcon color='inherit' /> 
            </div>
            <h3 className={styles.title}>Política de cookies</h3>
            <div className={styles.textsContent}>
              <div className={styles.text}>
                Esta web utiliza cookies propias y de terceros para ofrecerle una mejor experiencia 
                y servicio. Al navegar o utilizar nuestros servicios el usuario acepta el uso que 
                hacemos de las cookies. Sin embargo, el usuario tiene la opción de impedir la generación 
                de cookies y la eliminación de las mismas mediante la selección de la correspondiente 
                opción en su Navegador. En caso de bloquear el uso de cookies en su navegador es posible 
                que algunos servicios o funcionalidades de la página web no estén disponibles.
              </div>
              <div className={styles.item}>
                <h4 className={styles.subtitle}>¿Qué es una cookie?</h4>
                <div className={styles.text}>
                  Las cookies son pequeños archivos que algunas plataformas, como las páginas web, pueden 
                  instalar en tu ordenador. Sus funciones pueden ser muy variadas: almacenar tus preferencias 
                  de navegación, recopilar información estadística, permitir ciertas funcionalidades técnicas... 
                  En ocasiones, las cookies se utilizan para almacenar información básica sobre los hábitos de 
                  navegación del usuario o de su equipo, hasta el punto, según los casos, de poder reconocerlo.
                </div>
              </div>
              <div className={styles.item}>
                <h4 className={styles.subtitle}>¿Por qué son importantes?</h4>
                <div className={styles.text}>
                  Las cookies son útiles por varios motivos. Desde un punto de vista técnico, permiten que las 
                  páginas web funcionen de forma más ágil y adaptada a tus preferencias, como por ejemplo 
                  almacenar tu idioma o la moneda de tu país. Además, ayudan a los responsables de los sitios 
                  web a mejorar sus servicios, gracias a la información estadística que recogen a través de ellas.
                </div>
              </div>
              <div className={styles.item}>
                <h4 className={styles.subtitle}>¿Qué cookies utilizamos?</h4>
                <ul className={styles.list}>
                  <li><b>Cookies técnicas:</b> Son aquellas que permiten al usuario la navegación a través de una página web, 
                    plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan 
                    como, por ejemplo, identificar la sesión, acceder a partes de acceso restringido o compartir contenidos 
                    a través de redes sociales.
                  </li>
                  <li><b>Cookies de personalización:</b> Son aquéllas que permiten al usuario acceder al servicio con algunas 
                    características de carácter general predefinidas en su terminal o que el propio usuario defina. Por ejemplo, 
                    el idioma, el tipo de navegador a través del cual accede al servicio, el diseño de contenidos seleccionado, 
                    geolocalización del terminal y la configuración regional desde donde se accede al servicio.
                  </li>
                  <li><b>Cookies de análisis estadístico:</b> Son aquellas que nos permiten cuantificar el número de visitantes 
                    y analizar estadísticamente la utilización que hacen los usuarios de nuestros servicios. Gracias a ello podemos 
                    estudiar la navegación por el sitio web y mejorar así la oferta de productos o servicios que ofrecemos. En este 
                    caso utilizamos cookies de Google Analytics y Google Adwords.
                  </li>
                  <li><b>Cookies de terceros:</b> Son aquellas que se envían al dispositivo del usuario desde un equipo o 
                    dominio que no es gestionado por nosotros sino por otra entidad, que tratará los datos obtenidos. En este caso 
                    utilizamos cookies de Zopim.
                  </li>
                </ul>
              </div>
              <div className={styles.text}>En caso de bloquear el uso de cookies en su navegador es posible que algunos servicios o funcionalidades de la página web no estén disponibles.</div>
            </div>
        </div>
      </Modal>
    </div>
  );
}

