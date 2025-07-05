// This is an updated AssetTable.tsx with 2 new columns and a "View" button for each asset

import React, { useState } from 'react';
import { Asset } from '../types';
import {
  Edit,
  Trash2,
  MapPin,
  Monitor,
  Camera,
  HardDrive,
  Package,
  Cpu,
  Info
} from 'lucide-react';

interface AssetTableProps {
  assets: Asset[];
  onEdit: (asset: Asset) => void;
  onDelete: (id: string) => void;
  onViewOnMap: (asset: Asset) => void;
  currentUser: string | null;
}

export const AssetTable: React.FC<AssetTableProps> = ({
  assets,
  onEdit,
  onDelete,
  onViewOnMap,
  currentUser
}) => {
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);

  const getAssetIcon = (type: string) => {
    switch (type) {
      case 'Camera': return <Camera className="w-5 h-5 text-blue-600" />;
      case 'Computer': return <Monitor className="w-5 h-5 text-green-600" />;
      case 'Software': return <HardDrive className="w-5 h-5 text-purple-600" />;
      default: return <Package className="w-5 h-5 text-gray-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'bg-green-100 text-green-800';
      case 'Inactive': return 'bg-gray-100 text-gray-800';
      case 'Under Maintenance': return 'bg-yellow-100 text-yellow-800';
      case 'Decommissioned': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-800">Asset Inventory</h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Asset</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Details</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Location</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Assigned To</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Project</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {assets.map((asset) => (
                <tr key={asset.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      {getAssetIcon(asset.asset_type)}
                      <div className="ml-3">
                        <div className="text-sm font-medium text-gray-900">{asset.name}</div>
                        <div className="text-xs text-gray-500">SN: {asset.serial_number}</div>
                      </div>
                    </div>
                  </td>

                  <td className="px-6 py-4 text-sm text-gray-700">
                    <div>Model: {asset.model_number || 'N/A'}</div>
                    <div>Make: {asset.manufacturer || 'N/A'}</div>
                    {asset.ip_address && <div className="text-xs text-gray-500">IP: {asset.ip_address}</div>}
                  </td>

                  <td className="px-6 py-4">
                    <div className="text-sm text-gray-900">{asset.location}</div>
                    {asset.latitude && asset.longitude && (
                      <div className="text-xs text-gray-500">
                        {asset.latitude.toFixed(4)}, {asset.longitude.toFixed(4)}
                      </div>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(asset.status)}`}>
                      {asset.status}
                    </span>
                  </td>

                  <td className="px-6 py-4 text-sm">{asset.assigned_to || 'Unassigned'}</td>
                  <td className="px-6 py-4 text-sm">{asset.project || 'N/A'}</td>
                  <td className="px-6 py-4 text-sm">{asset.department || 'N/A'}</td>

                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button onClick={() => setSelectedAsset(asset)} title="Detailed View" className="text-blue-600 hover:text-blue-900">
                        <Info className="w-4 h-4" />
                      </button>
                      {asset.latitude && asset.longitude && (
                        <button onClick={() => onViewOnMap(asset)} title="View on Map" className="text-green-600 hover:text-green-900">
                          <MapPin className="w-4 h-4" />
                        </button>
                      )}
                      {currentUser && (
                        <>
                          <button onClick={() => onEdit(asset)} className="text-indigo-600 hover:text-indigo-900" title="Edit">
                            <Edit className="w-4 h-4" />
                          </button>
                          <button onClick={() => onDelete(asset.id)} className="text-red-600 hover:text-red-900" title="Delete">
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Detailed View Modal */}
      {selectedAsset && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-full max-w-xl p-6 rounded-lg shadow-lg overflow-y-auto max-h-[90vh]">
            <h2 className="text-lg font-semibold mb-4">Asset Details</h2>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div><strong>Name:</strong> {selectedAsset.name}</div>
              <div><strong>Type:</strong> {selectedAsset.asset_type}</div>
              <div><strong>Status:</strong> {selectedAsset.status}</div>
              <div><strong>Location:</strong> {selectedAsset.location}</div>
              <div><strong>Latitude:</strong> {selectedAsset.latitude}</div>
              <div><strong>Longitude:</strong> {selectedAsset.longitude}</div>
              <div><strong>Project:</strong> {selectedAsset.project}</div>
              <div><strong>Department:</strong> {selectedAsset.department}</div>
              <div><strong>Assigned To:</strong> {selectedAsset.assigned_to}</div>
              <div><strong>Manufacturer:</strong> {selectedAsset.manufacturer}</div>
              <div><strong>Model Number:</strong> {selectedAsset.model_number}</div>
              <div><strong>Serial Number:</strong> {selectedAsset.serial_number}</div>
              <div><strong>Camera Type:</strong> {selectedAsset.camera_type}</div>
              <div><strong>IP Address:</strong> {selectedAsset.ip_address}</div>
              <div><strong>MAC Address:</strong> {selectedAsset.mac_address}</div>
              <div><strong>Accessories:</strong> {selectedAsset.accessories}</div>
              <div><strong>Installation Date:</strong> {selectedAsset.installation_date}</div>
            </div>
            <div className="mt-6 text-right">
              <button onClick={() => setSelectedAsset(null)} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};


export default AssetTable;