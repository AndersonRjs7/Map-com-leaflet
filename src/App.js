import React, {useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup, LayerGroup, Circle} from 'react-leaflet';

import {Icon}  from "leaflet";

 export const skate = new Icon({
   iconUrl: "./skate.png",
   iconSize: [25, 25]
});



import parkData from "./data/data.json";


import '../styles.scss';

export default function App() {
  const [activePark, setActivePark] = useState(null);



 return (
   <div className='container'>
    <MapContainer 
    center={[45.421532, -75.697189]} 
    zoom={12}
    maxZoom={18}   
    style={{width: '100vw', height: '100vh',}}
    scrollWheelZoom={true}
   
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />



      {parkData.features.map(park => (
        <Marker 
        key={park.properties.PARK_ID} 
        position={[
          park.geometry.coordinates[1],
          park.geometry.coordinates[0]
        ]} 
        onClick={() => {
          setActivePark(park);
        }}
        // icon={skate}
       
        
        />
      ))}

      {activePark && (
        <Popup
          position={[
            activePark.geometry.coordinates[1],
            activePark.geometry.coordinates[0]
          ]}
          onClose={() => {
            setActivePark(null);
          }}
        >
          <div>
            <h2>{activePark.properties.NAME}</h2>
            <p>{activePark.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}
      
     
    
    </MapContainer>
   </div>
 );
}