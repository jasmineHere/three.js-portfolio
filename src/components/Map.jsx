import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
  Marker,
  ZoomableGroup
} from "react-simple-maps";

const Map= () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [79.3832, -43.6532, 0],
        center: [0, 0],
        scale: 600
      }}
      style={{width: "100%", height: "100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#2C065D"
        stroke="#FFFFFF"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[-79.3832, 43.6532]}
        dx={-90}
        dy={-30}
        connectorProps={{
          stroke: "white",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="white">
          {"Kitchener"}
        </text>
      </Annotation>
      <Marker coordinates={[-79.3832, 43.6532]}>
        <circle r={10} fill="white" stroke="#fff" strokeWidth={2} />
      </Marker>
    </ComposableMap>
  );
};

export default Map;
