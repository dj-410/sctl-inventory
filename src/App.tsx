import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { PublicLanding } from './components/PublicLanding';
import { PrivateDashboard } from './components/PrivateDashboard';
import { LoginModal } from './components/LoginModal';
import { Footer } from './components/Footer';
import { Abouts } from './components/Abouts';
import { Reports } from './components/Reports';
import { Asset, ActivityLog } from './types';
import { mockAssets, mockUsers, mockActivityLogs } from './data/mockData';

function App() {
  const [assets, setAssets] = useState<Asset[]>(mockAssets);
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>(mockActivityLogs);
  const [selectedAsset, setSelectedAsset] = useState<Asset | null>(null);
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null);
  const [showAssetForm, setShowAssetForm] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [currentUser, setCurrentUser] = useState<string | null>(null);

  const logActivity = (activity: Omit<ActivityLog, 'id' | 'timestamp'>) => {
    const newLog: ActivityLog = {
      ...activity,
      id: Date.now().toString(),
      timestamp: new Date().toISOString()
    };
    setActivityLogs(prev => [newLog, ...prev]);
  };

  const handleLogin = (username: string) => {
    setCurrentUser(username);
    setShowLoginModal(false);
    logActivity({ user: username, action: 'login', details: 'User logged into the system', ip_address: '192.168.1.100' });
  };

  const handleLogout = () => {
    if (currentUser) {
      logActivity({ user: currentUser, action: 'logout', details: 'User logged out of the system', ip_address: '192.168.1.100' });
    }
    setCurrentUser(null);
    setSelectedAsset(null);
    setEditingAsset(null);
    setShowAssetForm(false);
  };

  const handleSaveAsset = (assetData: Omit<Asset, 'id' | 'created_at' | 'updated_at'>) => {
    const now = new Date().toISOString();
    if (editingAsset) {
      setAssets(assets.map(a => a.id === editingAsset.id ? { ...assetData, id: editingAsset.id, created_at: editingAsset.created_at, updated_at: now } : a));
      logActivity({ user: currentUser!, action: 'update', target: editingAsset.name, details: `Updated asset: ${assetData.name}`, ip_address: '192.168.1.100' });
    } else {
      const newAsset: Asset = { ...assetData, id: Date.now().toString(), created_at: now, updated_at: now };
      setAssets([...assets, newAsset]);
      logActivity({ user: currentUser!, action: 'create', target: newAsset.name, details: `Created new asset: ${assetData.name}`, ip_address: '192.168.1.100' });
    }
    setShowAssetForm(false);
    setEditingAsset(null);
  };

  const handleEditAsset = (asset: Asset) => {
    setEditingAsset(asset);
    setShowAssetForm(true);
    logActivity({ user: currentUser!, action: 'view', target: asset.name, details: `Opened asset for editing: ${asset.name}`, ip_address: '192.168.1.100' });
  };

  const handleDeleteAsset = (id: string) => {
    const asset = assets.find(a => a.id === id);
    if (asset && confirm('Are you sure you want to delete this asset?')) {
      setAssets(assets.filter(a => a.id !== id));
      logActivity({ user: currentUser!, action: 'delete', target: asset.name, details: `Deleted asset: ${asset.name}`, ip_address: '192.168.1.100' });
    }
  };

  const handleAddAsset = () => {
    setEditingAsset(null);
    setShowAssetForm(true);
    logActivity({ user: currentUser!, action: 'view', details: 'Opened new asset creation form', ip_address: '192.168.1.100' });
  };

  const handleViewOnMap = (asset: Asset) => {
    setSelectedAsset(asset);
    logActivity({ user: currentUser!, action: 'view', target: asset.name, details: `Viewed asset on map: ${asset.name}`, ip_address: '192.168.1.100' });
    document.getElementById('map-section')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleAssetClick = (asset: Asset) => {
    setSelectedAsset(selectedAsset?.id === asset.id ? null : asset);
    if (selectedAsset?.id !== asset.id) {
      logActivity({ user: currentUser!, action: 'view', target: asset.name, details: `Selected asset on map: ${asset.name}`, ip_address: '192.168.1.100' });
    }
  };

  const handleCloseAssetForm = () => {
    setShowAssetForm(false);
    setEditingAsset(null);
  };

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header
          onMenuToggle={() => {}}
          currentUser={currentUser}
          onLogin={() => setShowLoginModal(true)}
          onLogout={handleLogout}
        />

        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={
                currentUser ? (
                  <PrivateDashboard
                    assets={assets}
                    selectedAsset={selectedAsset}
                    editingAsset={editingAsset}
                    showAssetForm={showAssetForm}
                    currentUser={currentUser}
                    users={mockUsers}
                    activityLogs={activityLogs}
                    onSaveAsset={handleSaveAsset}
                    onEditAsset={handleEditAsset}
                    onDeleteAsset={handleDeleteAsset}
                    onAddAsset={handleAddAsset}
                    onViewOnMap={handleViewOnMap}
                    onAssetClick={handleAssetClick}
                    onCloseAssetForm={handleCloseAssetForm}
                    onLogout={handleLogout}
                    onLogActivity={logActivity} 
                    onCancel={handleCloseAssetForm}
                   />
                ) : (
                  <PublicLanding onLogin={() => setShowLoginModal(true)} />
                )
              }
            />
            <Route path="/reports" element={<Reports assets={assets}activityLogs={activityLogs} currentUser={currentUser || ''} />} />
            <Route path="/about" element={<Abouts />} />
            <Route path="*" element={<div className="text-center p-10">404 - Page Not Found</div>} />
          </Routes>
        </main>

        <Footer />

        {showLoginModal && (
          <LoginModal onLogin={handleLogin} onCancel={() => setShowLoginModal(false)} />
        )}
      </div>
    </Router>
  );
}

export default App;
