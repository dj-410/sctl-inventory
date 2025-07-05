import React, { useState } from 'react';
import { AssetTable } from './AssetTable';
import { EnhancedAssetMap } from './EnhancedAssetMap';
import { AssetForm } from './AssetForm';
import { Reports } from './Reports';
import { Abouts } from './Abouts';
import { Asset, ActivityLog } from '../types';
import { Plus, BarChart3, Users, Camera, AlertTriangle, LogOut, FileText, Info, Map } from 'lucide-react';

interface PrivateDashboardProps {
  assets: Asset[];
  selectedAsset: Asset | null;
  editingAsset: Asset | null;
  showAssetForm: boolean;
  currentUser: string;
  users: string[];
  activityLogs: ActivityLog[];
  onSaveAsset: (assetData: Omit<Asset, 'id' | 'created_at' | 'updated_at'>) => void;
  onEditAsset: (asset: Asset) => void;
  onDeleteAsset: (id: string) => void;
  onAddAsset: () => void;
  onViewOnMap: (asset: Asset) => void;
  onAssetClick: (asset: Asset) => void;
  onCloseAssetForm: () => void;
  onLogout: () => void;
  onCancel: () => void;
  onLogActivity: (activity: Omit<ActivityLog, 'id' | 'timestamp'>) => void;
}

export const PrivateDashboard: React.FC<PrivateDashboardProps> = ({
  assets,
  selectedAsset,
  editingAsset,
  showAssetForm,
  currentUser,
  users,
  activityLogs,
  onSaveAsset,
  onEditAsset,
  onDeleteAsset,
  onAddAsset,
  onViewOnMap,
  onAssetClick,
  onCloseAssetForm,
  onLogout,
  onLogActivity
}) => {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'map' | 'reports' | 'about'>('dashboard');

  const totalAssets = assets.length;
  const activeAssets = assets.filter(asset => asset.status === 'Active').length;
  const cameras = assets.filter(asset => asset.asset_type === 'Camera').length;
  const maintenanceAssets = assets.filter(asset => asset.status === 'Maintenance').length;

  const handleTabChange = (tab: 'dashboard' | 'map' | 'reports' | 'about') => {
    setActiveTab(tab);
    onLogActivity({
      user: currentUser,
      action: 'view',
      details: `Accessed ${tab} section`,
      ip_address: '192.168.1.100'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Asset Management Dashboard</h1>
              <p className="text-gray-600">Welcome back, {currentUser}</p>
            </div>
            <button
              onClick={onLogout}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2"
            >
              <LogOut className="w-4 h-4" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border-b">
        <div className="container mx-auto px-4">
          <nav className="flex space-x-8">
            <button
              onClick={() => handleTabChange('dashboard')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'dashboard'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <BarChart3 className="w-4 h-4 inline mr-2" />
              Dashboard
            </button>
            <button
              onClick={() => handleTabChange('map')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'map'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Map className="w-4 h-4 inline mr-2" />
              Camera Map
            </button>
            <button
              onClick={() => handleTabChange('reports')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'reports'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <FileText className="w-4 h-4 inline mr-2" />
              Reports
            </button>
            <button
              onClick={() => handleTabChange('about')}
              className={`py-4 px-2 border-b-2 font-medium text-sm transition-colors ${
                activeTab === 'about'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              <Info className="w-4 h-4 inline mr-2" />
              About
            </button>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {activeTab === 'dashboard' && (
          <>
            <section className="mb-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-blue-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-gray-800">{totalAssets}</div>
                      <div className="text-sm text-gray-600">Total Assets</div>
                    </div>
                    <BarChart3 className="w-8 h-8 text-blue-500" />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-green-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-gray-800">{cameras}</div>
                      <div className="text-sm text-gray-600">Cameras</div>
                    </div>
                    <Camera className="w-8 h-8 text-green-500" />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-purple-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-gray-800">{activeAssets}</div>
                      <div className="text-sm text-gray-600">Active Assets</div>
                    </div>
                    <Users className="w-8 h-8 text-purple-500" />
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-yellow-500">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-3xl font-bold text-gray-800">{maintenanceAssets}</div>
                      <div className="text-sm text-gray-600">Maintenance</div>
                    </div>
                    <AlertTriangle className="w-8 h-8 text-yellow-500" />
                  </div>
                </div>
              </div>
            </section>

            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">Asset Inventory</h2>
                <p className="text-gray-600">Manage and monitor your smart city assets</p>
              </div>
              <button
                onClick={onAddAsset}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2 shadow-lg"
              >
                <Plus className="w-5 h-5" />
                <span>Add Asset</span>
              </button>
            </div>

            <AssetTable
              assets={assets}
              onEdit={onEditAsset}
              onDelete={onDeleteAsset}
              onViewOnMap={onViewOnMap}
              currentUser={currentUser}
            />
          </>
        )}

        {activeTab === 'map' && (
          <EnhancedAssetMap
            assets={assets}
            selectedAsset={selectedAsset}
            onAssetClick={onAssetClick}
          />
        )}

        {activeTab === 'reports' && (
          <Reports
            assets={assets}
            activityLogs={activityLogs}
            currentUser={currentUser}
          />
        )}

        {activeTab === 'about' && <Abouts />}
      </div>

      {showAssetForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-4xl">
            <AssetForm
              asset={editingAsset}
              onSave={onSaveAsset}
              onCancel={onCloseAssetForm}
              users={users}
            />
          </div>
        </div>
      )}
    </div>
  );
};
