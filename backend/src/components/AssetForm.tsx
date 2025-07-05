import React, { useState, useEffect } from 'react';
import { Asset } from '../types';

interface AssetFormProps {
  asset: Asset | null;
  onSave: (assetData: Omit<Asset, 'id' | 'created_at' | 'updated_at'>) => void;
  onCancel: () => void;
  users: string[];
}

const assetSubTypes: Record<string, string[]> = {
  Camera: ['Dome', 'Bullet', 'ANPR', 'SVD'],
  'Computer Equipment': ['Desktop', 'Laptop', 'Workstation', 'Thin Client'],
  'Networking Devices': ['Router', 'Switch', 'Access Point', 'Firewall'],
  'Software Licenses': ['Operating System', 'Office Suite', 'Antivirus', 'Custom Software'],
  'Server Equipment': ['Physical Server', 'Virtual Server', 'NAS/SAN Storage'],
  'IoT Devices': ['Sensor', 'Smart Meter', 'Smart Light', 'Environmental Monitor'],
  'Telecommunication Equipment': ['IP Phone', 'PBX System', 'Wireless Base Station'],
  'Electrical Assets': ['UPS', 'Inverter', 'Battery Backup', 'Solar Panel'],
  Furniture: ['Work Desk', 'Chair', 'Storage Cabinet'],
  Vehicles: ['EV Vehicle', 'Service Van', 'Patrol Bike'],
  'Building Infrastructure': ['Air Conditioner', 'CCTV Mounting Pole', 'Display Board', 'Elevator'],
  Miscellaneous: ['Tools', 'Other (for non-categorized assets)']
};

const locationOptions = [
  'Technopark', 'Kovalam', 'Secretariat', 'Medical College', 'Palayam', 'Vellayambalam',
  'Museum', 'Pettah', 'East Fort', 'Kazhakoottam', 'Thampanoor', 'Chalai'
];

const AssetForm: React.FC<AssetFormProps> = ({ asset, onSave, onCancel, users }) => {
  const [formState, setFormState] = useState<Omit<Asset, 'id' | 'created_at' | 'updated_at'>>({
    name: asset?.name || '',
    asset_type: asset?.asset_type || 'Camera',
    camera_type: asset?.camera_type || '',
    location: asset?.location || '',
    status: asset?.status || 'Active',
    assigned_to: asset?.assigned_to || '',
    latitude: asset?.latitude || 0,
    longitude: asset?.longitude || 0,
    model_number: asset?.model_number || '',
    manufacturer: asset?.manufacturer || '',
    serial_number: asset?.serial_number || '',
    ip_address: asset?.ip_address || '',
    mac_address: asset?.mac_address || '',
    accessories: asset?.accessories || '',
    department: asset?.department || '',
    project: asset?.project || ''
  });

  const subTypes = assetSubTypes[formState.asset_type] || [];

  // Generate serial number based on asset type
  useEffect(() => {
    if (!asset) {
      const year = new Date().getFullYear().toString().slice(-2);
      const prefix = formState.asset_type.substring(0, 3).toUpperCase();
      const serial = `${prefix}${year}${Math.floor(1000 + Math.random() * 9000)}`;
      setFormState(prev => ({ ...prev, serial_number: serial }));
    }
  }, [formState.asset_type]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formState);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full max-w-2xl overflow-y-auto max-h-[90vh]">
        <h2 className="text-xl font-bold mb-4">{asset ? 'Edit Asset' : 'Add New Asset'}</h2>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">

          <label className="block">
            <span className="text-sm font-semibold">Asset Name</span>
            <input name="name" value={formState.name} onChange={handleChange} required className="w-full border rounded px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Asset Type</span>
            <select name="asset_type" value={formState.asset_type} onChange={handleChange} required className="w-full border rounded px-3 py-2">
              {Object.keys(assetSubTypes).map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </label>

          {subTypes.length > 0 && (
            <label className="block">
              <span className="text-sm font-semibold">Sub-Type</span>
              <select name="camera_type" value={formState.camera_type} onChange={handleChange} required className="w-full border rounded px-3 py-2">
                <option value="">Select Sub-Type</option>
                {subTypes.map(sub => (
                  <option key={sub} value={sub}>{sub}</option>
                ))}
              </select>
            </label>
          )}

          <label className="block">
            <span className="text-sm font-semibold">Location</span>
            <select name="location" value={formState.location} onChange={handleChange} required className="w-full border rounded px-3 py-2">
              <option value="">Select Location</option>
              {locationOptions.map(loc => (
                <option key={loc} value={loc}>{loc}</option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Serial Number</span>
            <input name="serial_number" value={formState.serial_number} disabled className="w-full border rounded px-3 py-2 bg-gray-100" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Model Number</span>
            <input name="model_number" value={formState.model_number} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Manufacturer</span>
            <input name="manufacturer" value={formState.manufacturer} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Assigned To</span>
            <select name="assigned_to" value={formState.assigned_to} onChange={handleChange} className="w-full border rounded px-3 py-2">
              <option value="">Select User</option>
              {users.map(u => <option key={u} value={u}>{u}</option>)}
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Department</span>
            <input name="department" value={formState.department} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Project</span>
            <input name="project" value={formState.project} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Status</span>
            <select name="status" value={formState.status} onChange={handleChange} required className="w-full border rounded px-3 py-2">
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
              <option value="Under Maintenance">Under Maintenance</option>
              <option value="Decommissioned">Decommissioned</option>
            </select>
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Accessories</span>
            <input name="accessories" value={formState.accessories} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">IP Address</span>
            <input name="ip_address" value={formState.ip_address} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">MAC Address</span>
            <input name="mac_address" value={formState.mac_address} onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Latitude</span>
            <input name="latitude" value={formState.latitude} type="number" step="any" onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </label>

          <label className="block">
            <span className="text-sm font-semibold">Longitude</span>
            <input name="longitude" value={formState.longitude} type="number" step="any" onChange={handleChange} className="w-full border rounded px-3 py-2" />
          </label>

          <div className="col-span-1 md:col-span-2 flex justify-end space-x-4">
            <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Save</button>
            <button type="button" onClick={onCancel} className="bg-gray-300 px-6 py-2 rounded-lg hover:bg-gray-400">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export { AssetForm };
