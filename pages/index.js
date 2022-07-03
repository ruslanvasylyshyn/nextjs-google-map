import styles from '../styles/Home.module.css'
import { GoogleMap, useLoadScript } from '@react-google-maps/api'
import { locations } from './api/api'
import { useState } from 'react'
import Nav from './components/Nav'
import MarkerComponent from './components/Marker'

export default function Home() {
  const { isLoaded } = useLoadScript({googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,})

  let[blueMarkers, setBlueMarkers] = useState([]);
  let[redMarker, setRedeMarker] = useState([]);

  function markersFilter(e){
    setBlueMarkers(blueMarkers = locations.locations.filter((marker) => marker.key !== e))
    setRedeMarker(redMarker = locations.locations.filter((marker) => marker.key === e))
  }
  
  if (!isLoaded) return <div>Loading...</div>
  return (
    <div>
      <main className={styles.main}>
        <GoogleMap 
        zoom={15.2} 
        center={{lat:50.341845247304526, lng: 30.29728473014548}}
        mapContainerClassName={styles.mapContainer}
        >
          <MarkerComponent blueMarkers={blueMarkers} redMarker={redMarker}/>
        </GoogleMap>
      </main>

      <footer className={styles.footer}>
        <Nav markersFilter={markersFilter}/>
       <div className={styles.poweredBy}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
          {`&`}
          <a 
            href="https://github.com/ruslanvasylyshyn" 
            target='_blank'
            rel="noreferrer"
          >
            Ruslan
          </a>
       </div>
      </footer>
    </div>
  )
}


