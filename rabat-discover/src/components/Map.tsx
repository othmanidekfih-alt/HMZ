import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Icon, LatLngExpression } from 'leaflet';
import { Spot } from '../types';
import 'leaflet/dist/leaflet.css';

interface MapProps {
  spots: Spot[];
  center: LatLngExpression;
  zoom: number;
  onSpotClick: (spot: Spot) => void;
  selectedCategory: string;
}

// Custom marker icons for different categories
const createCustomIcon = (category: string) => {
  const iconColors: { [key: string]: string } = {
    nature: '🌳',
    viewpoint: '🏔️',
    sports: '⚽',
    activities: '🎯'
  };

  return new Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40">
        <text x="20" y="30" font-size="32" text-anchor="middle">
          ${iconColors[category] || '📍'}
        </text>
      </svg>
    `),
    iconSize: [40, 40],
    iconAnchor: [20, 40],
    popupAnchor: [0, -40],
    className: 'custom-marker'
  });
};

// Component to handle user location
function LocationMarker() {
  const [position, setPosition] = useState<LatLngExpression | null>(null);
  const map = useMap();

  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  const userIcon = new Icon({
    iconUrl: 'data:image/svg+xml;base64,' + btoa(`
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30">
        <circle cx="15" cy="15" r="8" fill="#3b82f6" stroke="white" stroke-width="3"/>
        <circle cx="15" cy="15" r="4" fill="white"/>
      </svg>
    `),
    iconSize: [30, 30],
    iconAnchor: [15, 15]
  });

  return position === null ? null : (
    <Marker position={position} icon={userIcon}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

export default function Map({ spots, center, zoom, onSpotClick, selectedCategory }: MapProps) {
  const filteredSpots = selectedCategory === 'all' 
    ? spots 
    : spots.filter(spot => spot.category === selectedCategory);

  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
      className="z-0"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <LocationMarker />
      {filteredSpots.map((spot) => (
        <Marker
          key={spot.id}
          position={[spot.lat, spot.lng]}
          icon={createCustomIcon(spot.category)}
          eventHandlers={{
            click: () => onSpotClick(spot),
          }}
        >
          <Popup>
            <div className="p-2">
              <h3 className="font-bold text-lg mb-1">{spot.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{spot.description.substring(0, 100)}...</p>
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">★</span>
                <span className="text-sm font-semibold">{spot.rating}</span>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
