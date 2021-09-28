import { useState } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
const Map = () => {
  const [selected, onSelect] = useState("na");
  const geoUrl =
    "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

  return (
    <div
      className="col col-sm-12 col-md-12 col-lg-8 p-4  col-xs-12"
      style={{ height: 500 }}
    >
      <div>
        <h6 className="graph-header">World Map</h6>
        <ComposableMap>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  selected={selected}
                  onSelect={onSelect}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>
    </div>
  );
};

export default Map;
