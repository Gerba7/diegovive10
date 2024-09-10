'use client'

import { useEffect, useRef } from 'react';
import Logo from '../../../../../public/images/Logo.png';
import { Visibility } from '@mui/icons-material';

const Map = () => {
    const mapRef = useRef(null);
    
    useEffect(() => {
        const map = new google.maps.Map(mapRef.current, {
            center: { lat: 41.38690560121824, lng: 2.1842300615298083 },
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
        const marker = new google.maps.Marker({
          position: { lat: 41.38690560121824, lng: 2.1842300615298083 },
          map: map,
          /* Optional: Customize marker properties like title, icon, etc. */
        });
    }, []); 

    return <div ref={mapRef} style={{ height: '80vh', width: '100%' }} />;
};

export default Map;