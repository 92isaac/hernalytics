
import React, { useState } from 'react';
import NigeriaMap from '@svg-maps/nigeria';
import { SVGMap } from 'react-svg-map';
import 'react-svg-map/lib/index.css';

const MapOfNigeria = ({size}) => {
  const [name, setName] = useState('')
  const customStyles = {
    'AB': { fill: '#8D3DAF', cursor: 'pointer' },
    'AD': { fill: '#4B0082', cursor: 'pointer' },
    'AK': { fill: '#0000FF', cursor: 'pointer' },
    'AN': { fill: '#1E90FF', cursor: 'pointer' },
    'BA': { fill: '#008000', cursor: 'pointer' },
    'BE': { fill: '#00FF00', cursor: 'pointer' },
    'BO': { fill: '#ADFF2F', cursor: 'pointer' },
    'BY': { fill: '#FFD700', cursor: 'pointer' },
    'CR': { fill: '#FF8C00', cursor: 'pointer' },
    'DE': { fill: '#FF4500', cursor: 'pointer' },
    'EB': { fill: '#A52A2A', cursor: 'pointer' },
    'ED': { fill: '#DC143C', cursor: 'pointer' },
    'EK': { fill: '#FF00FF', cursor: 'pointer' },
    'EN': { fill: '#4B0082', cursor: 'pointer' },
    'FC': { fill: '#8B0000', cursor: 'pointer' },
    'GO': { fill: '#FFD700', cursor: 'pointer' },
    'IM': { fill: '#00FFFF', cursor: 'pointer' },
    'JI': { fill: '#FF00FF', cursor: 'pointer' },
    'KD': { fill: '#B8860B', cursor: 'pointer' },
    'KE': { fill: '#FFD700', cursor: 'pointer' },
    'KN': { fill: '#1E90FF', cursor: 'pointer' },
    'KO': { fill: '#8B0000', cursor: 'pointer' },
    'KT': { fill: '#008000', cursor: 'pointer' },
    'KW': { fill: '#A52A2A', cursor: 'pointer' },
    'LA': { fill: '#FFA500', cursor: 'pointer' },
    'NA': { fill: '#FFC0CB', cursor: 'pointer' },
    'NI': { fill: '#1E90FF', cursor: 'pointer' },
    'OG': { fill: '#228B22', cursor: 'pointer' },
    'ON': { fill: '#8B0000', cursor: 'pointer' },
    'OS': { fill: '#8B0000', cursor: 'pointer' },
    'OY': { fill: '#FFA500', cursor: 'pointer' },
    'PL': { fill: '#4B0082', cursor: 'pointer' },
    'RI': { fill: '#A0522D', cursor: 'pointer' },
    'SO': { fill: '#8B0000', cursor: 'pointer' },
    'TA': { fill: '#FFA500', cursor: 'pointer' },
    'YO': { fill: '#008000', cursor: 'pointer' },
  };
  const renderState = (state, index) => {
    console.log(state, index);
    return (
      <path
        key={`path-${index}`}
        d={state.attributes.d}
        style={customStyles[state.id]}
        onLocationFocus={() =>{
           setName(state.name);
           console.log(state.name)
        }} // update name state variable on click
      >
        <text
          x={state.textX}
          y={state.textY}
          dominantBaseline="middle"
          textAnchor="middle"
          fill="#000"
          fontSize="14px"
          fontWeight="bold"
        >
          {state.name}
        </text>
      </path>
    );
  };

  return (
    <div className={size}>
      <SVGMap map={NigeriaMap} onRenderState={renderState} />
      {name && <div style={{ position: 'absolute', top: 0, left: 0 }}>{name}</div>}
    </div>
  );
};

export default MapOfNigeria;
