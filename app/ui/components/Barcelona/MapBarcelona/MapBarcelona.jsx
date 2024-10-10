'use client'

import { useEffect, useRef } from 'react';
import styles from './mapBarcelona.module.css';
import { useTranslations } from 'next-intl';
import Link from 'next/link';



const Map = () => {

    const mapRef = useRef(null);

    const t = useTranslations("barcelona");
    
    useEffect(() => {

      async function initMap() {
        const { Map } = await google.maps.importLibrary("maps");
        

        const map = new Map(mapRef.current, {
            center: { lat: 41.38666, lng: 2.18336 },
            zoom: 18,
            disableDefaultUI: true,
            fullscreenControl: true,
            styles: [
              {
                featureType: 'road',
                elementType: 'geometry.fill',
                stylers: [{ color: '#0045b9' }]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.fill',
                stylers: [{ color: '#00be63' }]
              },
              {
                featureType: 'road',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#010b2c' }]
              },
              {
                featureType: 'landscape.natural.landcover',
                elementType: 'geometry.fill',
                stylers: [{ color: '#002290' }]
              },
              {
                featureType: 'landscape.man_made',
                stylers: [{ Visibility: 'off' }]
              },
              {
                featureType: 'poi',
                stylers: [{ Visibility: 'off' }]
              },
              {
                featureType: 'poi.park',
                stylers: [{ Visibility: 'on', color: '#002290' }]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{ color: '#002290' }]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text',
                stylers: [{ color: '#00be63' }]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.stroke',
                stylers: [{ color: '#010b2c' }]
              },
              {
                featureType: 'transit',
                stylers: [{ Visibility: 'off' }]
              },
            ]
        });
        
        
        const icon = `https://diegovive10.vercel.app/images/LogoMini.png`

        const infowindow = new google.maps.InfoWindow({
          content: "<div><b>Metronom</b></div><br/><div>C/ de la Fusina, 9, Ciutat Vella, 08003 Barcelona, España</div>",
          ariaLabel: "Metronom",
        });

        const marker = new google.maps.Marker({
          position: { lat: 41.38666, lng: 2.18336 },
          map: map,
          icon: icon,
          title: "Metronom"
        });

        marker.addListener("click", () => {
          infowindow.open({
            anchor: marker,
            map,
          });
        });

      }

      initMap();

    }, []); 

    return (
      <div className={styles.content}>
        <div className={styles.container}>
          <div className={styles.scrollOffset} id={t("location")}></div>
          <div ref={mapRef} style={{ height: '80vh', width: '100%' }} />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>{t("location")}</h3>
          <h4 className={styles.subtitle}>{t("place")}</h4>
          <h4 className={styles.paragraph}>{t("address")}</h4>
          <a href='https://maps.app.goo.gl/wh6BGX2VG2JGpRQ87'  target="_blank" className={styles.link}>{t("locationButton")}</a>
        </div>
      </div>
    );
};

export default Map;