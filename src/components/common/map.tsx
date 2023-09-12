"use client"

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const Map = () => {
    const center = [51.505, -0.09]
    return <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
     <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  </MapContainer>
}

export default Map