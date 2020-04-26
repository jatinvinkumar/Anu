import React from 'react'
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const MapContainer = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 30.28565, lng: -97.73921 }}
      defaultOptions={{ styles: style }}
    >
      <Marker
        position={{ lat: 30.28565, lng: -97.73921 }}
      />
    </GoogleMap>
  ));
  
  
 
export default MapContainer

const style = [
  {
      "featureType": "landscape.natural",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "color": "#e0efef"
          }
      ]
  },
  {
      "featureType": "poi",
      "elementType": "geometry.fill",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "hue": "#1900ff"
          },
          {
              "color": "#c0e8e8"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
          {
              "lightness": 100
          },
          {
              "visibility": "simplified"
          }
      ]
  },
  {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [
          {
              "visibility": "off"
          }
      ]
  },
  {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
          {
              "visibility": "on"
          },
          {
              "lightness": 700
          }
      ]
  },
  {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
          {
              "color": "#7dcdcd"
          }
      ]
  }
]