'use client'

import { useEffect, useRef } from 'react';
import Icon from '../../../../../public/images/LogoMini.png'

const Map = () => {
    const mapRef = useRef(null);
    
    useEffect(() => {

      async function initMap() {
        const { Map } = await google.maps.importLibrary("maps");
        

        const map = new Map(mapRef.current, {
            center: { lat: 41.38666, lng: 2.18336 },
            zoom: 18,
            mapTypeIdControl: false,
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

        const marker = new google.maps.Marker({
          position: { lat: 41.38666, lng: 2.18336 },
          map: map,
          icon: icon
        });

      }

      initMap();

    }, []); 

    return <div ref={mapRef} style={{ height: '80vh', width: '100%' }} />;
};

export default Map;