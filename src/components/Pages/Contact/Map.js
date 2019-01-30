import React, { Component } from 'react';
import { GoogleMap, Marker } from "react-google-maps"

class MapGoogle extends Component {
   render() {
      return (
         <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: -34.397, lng: 150.644 }}
         >
            {this.props.isMarkerShown && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
         </GoogleMap>
      )
   }
}

export default MapGoogle;