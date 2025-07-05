// src/components/EnhancedAssetMap.tsx
import React from 'react';
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader
} from '@react-google-maps/api';
import { Asset } from '../types';

interface Props {
  assets: Asset[];
  selectedAsset?: Asset | null;
  onAssetClick?: (asset: Asset) => void;
}

const mapContainerStyle = {
  width: '100%',
  height: '600px'
};

const center = {
  lat: 8.5241,
  lng: 76.9366
};

const lightMapStyle = [
  {
    featureType: 'all',
    elementType: 'labels',
    stylers: [{ visibility: 'off' }]
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ lightness: 100 }, { visibility: 'simplified' }]
  }
];

const getMarkerIcon = (status: string) => {
  const baseColor = {
    Active: '#34c759', // green
    'Under Maintenance': '#ffcc00', // yellow
    Inactive: '#ff3b30', // red
    default: '#8e8e93' // gray
  };
  const fill = baseColor[status as keyof typeof baseColor] || baseColor.default;

  const svg = `
    <svg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'>
      <circle cx='16' cy='16' r='12' fill='${fill}' stroke='white' stroke-width='2'/>
      <path d='M20 12 L24 10 L24 22 L20 20 Z M12 12 L8 10 L8 22 L12 20 Z' fill='white'/>
      <rect x='14' y='12' width='4' height='8' rx='1' fill='white'/>
    </svg>`;

  return {
    url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`,
    scaledSize: new window.google.maps.Size(32, 32),
    anchor: new window.google.maps.Point(16, 16)
  };
};

export const EnhancedAssetMap: React.FC<Props> = ({
  assets,
  selectedAsset,
  onAssetClick
}) => {
  const [activeAsset, setActiveAsset] = React.useState<Asset | null>(null);
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY
  });

  const visibleCameras = assets.filter(
    (asset) =>
      asset.asset_type === 'Camera' &&
      asset.latitude &&
      asset.longitude
  );

  if (!isLoaded) {
    return <div className="text-center">🗺️ Loading map...</div>;
  }

  return (
    <GoogleMap
      mapContainerStyle={mapContainerStyle}
      center={center}
      zoom={13}
      options={{
        styles: lightMapStyle,
        disableDefaultUI: true,
        zoomControl: true,
        minZoom: 10,
        maxZoom: 18,
        gestureHandling: 'greedy'
      }}
    >
      {visibleCameras.map((asset) => (
        <Marker
          key={asset.id}
          position={{ lat: asset.latitude!, lng: asset.longitude! }}
          onClick={() => {
            setActiveAsset(asset);
            onAssetClick?.(asset);
          }}
          icon={getMarkerIcon(asset.status || 'default')}
        />
      ))}

      {activeAsset && (
        <InfoWindow
          position={{
            lat: activeAsset.latitude!,
            lng: activeAsset.longitude!
          }}
          onCloseClick={() => setActiveAsset(null)}
        >
          <div className="text-sm">
            <strong>{activeAsset.name}</strong>
            <br />Location: {activeAsset.location}
            <br />Status: {activeAsset.status}
            <br />Assigned to: {activeAsset.assigned_to}
            <br />Updated: {new Date(activeAsset.updated_at).toLocaleString()}
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
};

export default EnhancedAssetMap;
