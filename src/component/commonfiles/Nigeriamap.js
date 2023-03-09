import React, { useEffect, useState } from "react";
import { Map } from "react-d3-map-choropleth";
import * as d3 from "d3";
// import axios from "axios";
import Loading from "./Loading";

const Nigeriamap = () => {
  const [geoData, setGeoData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://gist.githubusercontent.com/oyekanmiayo/c8a687a26a72a7dfaa2334a4e3d4eb4b/raw/7b36a73d960a8cddfc44b1fc7b6a53b514f7b1d9/nigeria.json"
      );
      const data = await response.json();
      setGeoData(data);
    }
    fetchData();
  }, []);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await axios.get(
  //         "https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria_state_boundaries.geojson"
  //       );
  //       setGeoData(response.data);
  //       console.log(response.data);
  //       // setLoading(false);
  //       // setError('');
  //     } catch (error) {
  //       console.error(error);
  //       // setLoading(false);
  //       // setError(error.message);
  //     }
  //   };
  //   fetchData();
  // }, []);

  if (!geoData) return <Loading/>;

  const render = (geoPath, projection) => {
    return geoData.features.map((feature, i) => {
      const centroid = projection(d3.geoCentroid(feature));
      return (
        <g key={i}>
          <path d={geoPath(feature)} fill="steelblue" />
          <text x={centroid[0]} y={centroid[1]}>
            {feature.properties.name}
          </text>
        </g>
      );
    });
  };

  return (
    <Map
      width={1000}
      height={800}
      scale={2000}
      center={[8.6753, 9.082]}
      data={geoData}
      zoomScaleSensitivity={0.25}
      render={render}
    />
  );
};

export default Nigeriamap;
