import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";
import React, { useMemo } from "react";

export default function Maps() {
  const location = useMemo(
    () => ({
      lat: -12.094263403053704,
      lng: -77.05539840215668,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyBjSVH0tyuvM3TAHcM_tCESlSLhN1PaYc4",
  });

  if (!isLoaded) return <div>cargando...</div>;

  return (
    <GoogleMap zoom={16} center={location} mapContainerStyle={{ width: "100%", height: "100%" }}>
      <MarkerF position={location} />
    </GoogleMap>
  );
}
