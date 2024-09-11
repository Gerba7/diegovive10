import { GoogleMapsEmbed } from '@next/third-parties/google'




const MapBarce = () => {
  return (
    <div style={{height: '80vh'}}>
    <GoogleMapsEmbed
        apiKey={process.env.GOOGLE_MAPS_API_KEY}  
        height={'100%'}
        width={'100%'}
        mode="place"
        q="Metronom,Barcelona,Spain"
        style={[
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
        ]}
    />
    </div>
  )
}

export default MapBarce
