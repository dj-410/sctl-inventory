import React, { useEffect, useRef } from 'react';
import { Asset } from '../types';
import { MapPin } from 'lucide-react';

interface AssetMapProps {
  assets: Asset[];
  selectedAsset?: Asset | null;
  onAssetClick: (asset: Asset) => void;
}

export const AssetMap: React.FC<AssetMapProps> = ({ assets, selectedAsset, onAssetClick }) => {
  const mapRef = useRef<HTMLDivElement>(null);

  // Filter assets that have coordinates (cameras)
  const mappableAssets = assets.filter(asset => asset.latitude && asset.longitude);

  // Thiruvananthapuram coordinates
  const defaultCenter = { lat: 8.5241, lng: 76.9366 };

  useEffect(() => {
    // In a real implementation, you would initialize Leaflet here
    // For this demo, we'll create a visual representation
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800">Camera Locations Map</h2>
        <p className="text-sm text-gray-600 mt-1">
          Showing {mappableAssets.length} camera locations in Thiruvananthapuram
        </p>
      </div>
      
      <div className="relative">
        {/* Map Container - In production, this would be replaced with actual Leaflet map */}
        <div 
          ref={mapRef}
          className="h-96 bg-gradient-to-br from-green-100 to-blue-100 relative overflow-hidden"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23e5e7eb' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        >
          {/* Map Title Overlay */}
          <div className="absolute top-4 left-4 bg-white bg-opacity-90 px-3 py-2 rounded-lg shadow-md">
            <h3 className="font-semibold text-gray-800">Thiruvananthapuram Smart City</h3>
            <p className="text-xs text-gray-600">Camera Surveillance Network</p>
          </div>

          {/* Simulated Camera Markers */}
          {mappableAssets.map((asset, index) => {
            const x = 50 + (index % 5) * 60 + Math.random() * 40;
            const y = 50 + Math.floor(index / 5) * 60 + Math.random() * 40;
            const isSelected = selectedAsset?.id === asset.id;
            
            return (
              <div
                key={asset.id}
                className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-200 hover:scale-110 ${
                  isSelected ? 'z-20 scale-125' : 'z-10'
                }`}
                style={{ left: `${x}px`, top: `${y}px` }}
                onClick={() => onAssetClick(asset)}
                title={`${asset.name} - ${asset.location}`}
              >
                <div className={`relative ${isSelected ? 'animate-pulse' : ''}`}>
                  <MapPin 
                    className={`w-8 h-8 ${
                      asset.status === 'Active' 
                        ? 'text-green-600' 
                        : asset.status === 'Maintenance'
                        ? 'text-yellow-600'
                        : 'text-red-600'
                    } drop-shadow-lg`}
                    fill="currentColor"
                  />
                  {isSelected && (
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-2 py-1 rounded text-xs whitespace-nowrap">
                      {asset.name}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* Legend */}
          <div className="absolute bottom-4 right-4 bg-white bg-opacity-90 px-3 py-2 rounded-lg shadow-md">
            <h4 className="font-semibold text-xs text-gray-800 mb-2">Camera Status</h4>
            <div className="space-y-1">
              <div className="flex items-center text-xs">
                <MapPin className="w-4 h-4 text-green-600 mr-2" fill="currentColor" />
                <span>Active</span>
              </div>
              <div className="flex items-center text-xs">
                <MapPin className="w-4 h-4 text-yellow-600 mr-2" fill="currentColor" />
                <span>Maintenance</span>
              </div>
              <div className="flex items-center text-xs">
                <MapPin className="w-4 h-4 text-red-600 mr-2" fill="currentColor" />
                <span>Inactive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Asset Details Panel */}
        {selectedAsset && (
          <div className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
            <h3 className="font-semibold text-gray-800 mb-2">{selectedAsset.name}</h3>
            <div className="space-y-1 text-sm">
              <p><span className="font-medium">Type:</span> {selectedAsset.asset_type}</p>
              <p><span className="font-medium">Location:</span> {selectedAsset.location}</p>
              <p><span className="font-medium">Status:</span> 
                <span className={`ml-1 px-2 py-0.5 rounded text-xs ${
                  selectedAsset.status === 'Active' 
                    ? 'bg-green-100 text-green-800'
                    : selectedAsset.status === 'Maintenance'
                    ? 'bg-yellow-100 text-yellow-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {selectedAsset.status}
                </span>
              </p>
              <p><span className="font-medium">Assigned to:</span> {selectedAsset.assigned_to}</p>
              {selectedAsset.latitude && selectedAsset.longitude && (
                <p className="text-xs text-gray-500">
                  Coordinates: {selectedAsset.latitude.toFixed(4)}, {selectedAsset.longitude.toFixed(4)}
                </p>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


export default AssetMap;