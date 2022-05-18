import React from 'react';
import {  useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
export const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 25.7473;
  const lat = 62.2426;
  const zoom = 10;
  
  mapboxgl.accessToken = process.env.REACT_APP_MAP;
  useEffect(() => {
    try {
      if (map.current) return; // initialize map only once
      map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom
    });  
    } catch (error) {
      console.log(error)
    }
    
  });

    
  return(
      <div ref={mapContainer} className="map-container col-span-2 md:col-span-1 min-h-[400px] h-500 2xl:h-600  w-full border-4 border-slate-800 rounded-lg shadow-lg" />
  )
}