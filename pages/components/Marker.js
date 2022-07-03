import { Marker } from '@react-google-maps/api'

export function MarkerComponent({blueMarkers, redMarker }){
    return(
      <>
        {blueMarkers.map((location)=> {
          return(
            <Marker 
              key={location.key} 
              position={location.position} 
              icon='http://maps.google.com/mapfiles/ms/icons/blue.png'
            />
          )
        })}
        {redMarker.map((location)=> {
          return(
            <Marker 
              key={location.key} 
              position={location.position} 
            />
          )
        })}
      </>
    )
  }