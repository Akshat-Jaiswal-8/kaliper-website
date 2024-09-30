"use client";
import React from "react";
import dynamic from "next/dynamic";
import "leaflet/dist/leaflet.css";

const MapContainer = dynamic(() => import("react-leaflet").then((module) => module.MapContainer), {
  ssr: false,
});

const TileLayer = dynamic(() => import("react-leaflet").then((module) => module.TileLayer), {
  ssr: false,
});
const Marker = dynamic(() => import("react-leaflet").then((module) => module.Marker), {
  ssr: false,
});
const Popup = dynamic(() => import("react-leaflet").then((module) => module.Popup), {
  ssr: false,
});

const MapComponent = (): React.ReactNode => {
  const position: [number, number] = [26.908877945739427, 80.96953322556192];

  return (
    <MapContainer center={position} zoom={8} style={{ width: "400px", height: "400px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Kaliper Technologies private limited.</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;
