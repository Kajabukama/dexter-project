import React from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from "react-google-maps"

const MapGoogle = withScriptjs(withGoogleMap((props) =>
   <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: -3.375929, lng: 36.640297 }}>
      { props.isMarkerShown && (
         <Marker position={{ lat: -3.375929, lng: 36.640297 }} />
         // <Marker position={{ lat: -6.764059, lng: 39.255869 }} />
      ) }
   </GoogleMap>
))
export default MapGoogle; 