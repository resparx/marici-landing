"use client";

import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";

mapboxgl.accessToken =
  "pk.eyJ1IjoicmVzcGFyeCIsImEiOiJjanlia3JnYXYwYWRvM21xbzJvc3IxZGJqIn0.3do9qH_cXKhb54BlgaSw9w";
const Map = () => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const [lng, setLng] = useState(80.2213001);
  const [lat, setLat] = useState(13.089482);
  const [zoom, setZoom] = useState(15);

  // useEffect(() => {
  //   mapRef.current = new mapboxgl.Map({
  //     container: mapContainerRef.current ?? '',
  //     style: "mapbox://styles/mapbox/streets-v12",
  //     center: [lng, lat],
  //     zoom: zoom,
  //   });
  // }, [mapRef, mapContainerRef]);


  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current ?? "" ,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom,
    });

    map.on("load", function () {
      // Add an image to use as a custom marker
      map.loadImage(
        "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
        function (error, image) {
          if (error) throw error;
          // map.addImage("custom-marker", image);
          // Add a GeoJSON source with multiple points
          map.addSource("points", {
            type: "geojson",
            data: {
              type: "FeatureCollection",
              features: [
                {
                  "type": "Feature",
                  "properties": {
                    "title": "Antispot",
                    "description": "A co-working space in Anna nagar"
                  },
                  "geometry": {
                    "coordinates": [13.089482, 80.2213001],
                    "type": "Point"
                  }
                },]
            },
          });
          // Add a symbol layer
          map.addLayer({
            id: "points",
            type: "symbol",
            source: "points",
            layout: {
              "icon-image": "custom-marker",
              // get the title name from the source's "title" property
              "text-field": ["get", "title"],
              "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
              "text-offset": [0, 1.25],
              "text-anchor": "top",
            },
          });
        }
      );
    });

    // Add navigation control (the +/- zoom buttons)
    map.addControl(new mapboxgl.NavigationControl(), "top-right");

    // Clean up on unmount
    return () => map.remove();
  }, []);

  return (
    <div ref={mapContainerRef} className="h-[320px] rounded-lg overflow-hidden">
    </div>
  );
};

export default Map;
