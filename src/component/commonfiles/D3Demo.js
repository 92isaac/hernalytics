import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const D3Demo = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const width = parseInt(svg.style('width'), 10);
    const height = parseInt(svg.style('height'), 10);

    const projection = d3.geoEquirectangular().center([8, 9]);
    const pathGenerator = d3.geoPath().projection(projection);

    Promise.all([
      d3.json(
        'https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria_state_boundaries.geojson'
      ),
      d3.json(
        'https://raw.githubusercontent.com/iamspruce/intro-d3/main/data/nigeria-states.json'
      ),
    ]).then(([geoJson, stateData]) => {
      stateData.data.forEach((d) => {
        d.info.Longitude = +d.info.Longitude;
        d.info.Latitude = +d.info.Latitude;
      });

      projection.fitSize([width, height], geoJson);

      svg
        .selectAll('path')
        .data(geoJson.features)
        .enter()
        .append('path')
        .attr('class', 'state-boundary')
        .attr('d', pathGenerator);

      svg
        .selectAll('.state-label')
        .data(stateData.data)
        .enter()
        .append('text')
        .attr('class', 'state-label')
        .attr('x', (d) => projection([d.info.Longitude, d.info.Latitude])[0])
        .attr('y', (d) => projection([d.info.Longitude, d.info.Latitude])[1])
        .text((d) => d.Name);
    });

    const zoom = d3.zoom().scaleExtent([1, 8]).on('zoom', () => {
      svg.selectAll('path').attr('transform', d3.event.transform);
      svg
        .selectAll('.state-label')
        .attr('transform', d3.event.transform)
        .style('font-size', `${18 / d3.event.transform.k}px`)
        .attr('dy', (-7 / d3.event.transform.k).toString());
    });

    svg.call(zoom);

}, []);

return (
<svg
ref={svgRef}
width="800"
height="600"
viewBox="0 0 800 600"
style={{ backgroundColor: '#e5e5e5' }}
/>
);
};

export default D3Demo;