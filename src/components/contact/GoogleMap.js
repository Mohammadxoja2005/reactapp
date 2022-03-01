import React from 'react'
import { GoogleMap as Map, useLoadScript, Marker} from '@react-google-maps/api';    

const mapContainerStyle = {
    height: '400px'
};
  
const center = {
    lat: 41.260808, 
    lng: 69.252697
}; 

const positionMarker = {
    lat: 41.260808, 
    lng: 69.252697  
}

const libraries = ["places"]
console.log(process.env.REACT_MAPS_API); 
export default function GoogleMap() {  
   const {isLoaded, loadError} = useLoadScript({
       googleMapsApiKey: "AIzaSyBuwxPca6dyMAEfFCV7S-egjwCTeHpm7k0", 
       libraries, 
   })  

   if(loadError) return "there is problem with google api"; 
   if(!isLoaded) return "google maps is loading"; 

 return(
    <Map
        mapContainerStyle={mapContainerStyle} 
        zoom={18}
        center={center}
    >
    <Marker position={positionMarker}/> 
    
    </Map>
   ) 
}
