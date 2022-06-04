import { GoogleMap } from "@react-google-maps/api";
import React from "react";

export default function GoogleMaps() {
  return (
    <GoogleMap
      zoom={10}
      center={{ lat: 6317156167, lng: 631701001 }}
      mapContainerClassName="map-container"
    ></GoogleMap>
  );
}
