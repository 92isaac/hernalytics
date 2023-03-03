// NigeriaMap.js
import React from 'react';
import NigeriaMap from '@svg-maps/nigeria';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';

const MapOfNigeria = () => {
  return (
    <div className="svg-map-container">
      <SVGMap map={NigeriaMap} />
    </div>
  );
};

export default MapOfNigeria;
