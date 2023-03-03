
import React from 'react';
import NigeriaMap from '@svg-maps/nigeria';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';

const MapOfNigeria = ({size}) => {
  return (
    <div className={size}>
      <SVGMap map={NigeriaMap} />
    </div>
  );
};

export default MapOfNigeria;
