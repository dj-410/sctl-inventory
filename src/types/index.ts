export type Asset = {
  id: string;
  name: string;
  description?: string;
  asset_type: 'Camera' | 'Computer' | 'Software' | 'Other';
  manufacturer?: string;
  model_number?: string;
  serial_number?: string;
  assigned_to?: string;
  department?: string;
  project?: string;
  location: string;
  coordinates?: { lat: number; lng: number };
  installation_date?: string;
  mac_address?: string;
  ip_address?: string;
  operating_system?: string;
  firmware_version?: string;
  purchase_date?: string;
  warranty_expiry_date?: string;
  status: 'Active' | 'Maintenance' | 'Inactive';
  last_serviced?: string;
  camera_type?: 'Dome' | 'Bullet' | 'ANPR' | 'SVD';
  accessories?: string[];
  created_at: string;
  updated_at: string;
}

export interface User {
  id: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}

export interface ActivityLog {
  id: string;
  user: string;
  action: 'login' | 'logout' | 'create' | 'update' | 'delete' | 'view';
  target?: string;
  details: string;
  timestamp: string;
  ip_address?: string;
}

export interface SystemReport {
  id: string;
  title: string;
  type: 'active' | 'maintenance' | 'inactive' | 'summary';
  generated_by: string;
  generated_at: string;
  data: any;
}