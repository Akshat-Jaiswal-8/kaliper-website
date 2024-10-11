"use client";
import React from "react";
import "leaflet/dist/leaflet.css";

const MapComponent = (): React.ReactNode => {
  return (
    <div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d143498.57686624496!2d80.87024289999999!3d26.9109169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399957732a46274b%3A0xe09917f505f98e8f!2sCubispace!5e0!3m2!1sen!2sin!4v1696078937619!5m2!1sen!2sin"
        width="100%"
        height="420"
        style={{ border: 0, borderRadius: "12px" }}
        allowFullScreen={true}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default MapComponent;
