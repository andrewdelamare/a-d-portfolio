import React from 'react';
import {  useRef, useState, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
export const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const lng = 25.7473;
  const lat = 62.2426;
  const zoom = 10;
  
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
      <div ref={mapContainer} className="map-container min-h-[400px] lg:h-500 xl:h-600  w-full border-4 border-slate-800 rounded-lg shadow-lg" />
  )
}