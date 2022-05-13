import React from 'react';
import {  useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
export const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(25.7473);
  const [lat, setLat] = useState(62.2426);
  const [zoom, setZoom] = useState(5);
  
  mapboxgl.accessToken = process.env.REACT_APP_MAP;
  useEffect(() => {
    if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });
  });

    
  return(
      <div ref={mapContainer} className="map-container h-400 w-full rounded-lg pt-10" />
  )
}