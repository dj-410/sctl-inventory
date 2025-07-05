import { Asset, ActivityLog } from '../types';

export const mockAssets: Asset[] = [
  {
    id: '1',
    name: 'Camera-TVM-001',
    asset_type: 'Camera',
    location: 'Secretariat Junction',
    status: 'Active',
    assigned_to: 'John Doe',
    latitude: 8.5241,
    longitude: 76.9366,
    created_at: '2024-01-15T10:30:00Z',
    updated_at: '2024-01-15T10:30:00Z'
  },
  {
    id: '2',
    name: 'Camera-TVM-002',
    asset_type: 'Camera',
    location: 'Palayam Market',
    status: 'Active',
    assigned_to: 'Jane Smith',
    latitude: 8.5089,
    longitude: 76.9570,
    created_at: '2024-01-16T09:15:00Z',
    updated_at: '2024-01-16T09:15:00Z'
  },
  {
    id: '3',
    name: 'Camera-TVM-003',
    asset_type: 'Camera',
    location: 'Technopark Gate',
    status: 'Maintenance',
    assigned_to: 'Mike Johnson',
    latitude: 8.5496,
    longitude: 76.8997,
    created_at: '2024-01-17T14:20:00Z',
    updated_at: '2024-01-20T11:45:00Z'
  },
  {
    id: '4',
    name: 'Camera-TVM-004',
    asset_type: 'Camera',
    location: 'Central Station',
    status: 'Active',
    assigned_to: 'Sarah Wilson',
    latitude: 8.4875,
    longitude: 76.9525,
    created_at: '2024-01-18T16:00:00Z',
    updated_at: '2024-01-18T16:00:00Z'
  },
  {
    id: '5',
    name: 'Camera-TVM-005',
    asset_type: 'Camera',
    location: 'Kovalam Beach',
    status: 'Active',
    assigned_to: 'David Brown',
    latitude: 8.4004,
    longitude: 76.9784,
    created_at: '2024-01-19T12:30:00Z',
    updated_at: '2024-01-19T12:30:00Z'
  },
  {
    id: '6',
    name: 'Camera-TVM-006',
    asset_type: 'Camera',
    location: 'Vizhinjam Port',
    status: 'Active',
    assigned_to: 'John Doe',
    latitude: 8.3789,
    longitude: 76.9801,
    created_at: '2024-01-20T11:00:00Z',
    updated_at: '2024-01-20T11:00:00Z'
  },
  {
    id: '7',
    name: 'Camera-TVM-007',
    asset_type: 'Camera',
    location: 'Kazhakkoottam',
    status: 'Active',
    assigned_to: 'Jane Smith',
    latitude: 8.5667,
    longitude: 76.8667,
    created_at: '2024-01-21T14:30:00Z',
    updated_at: '2024-01-21T14:30:00Z'
  },
  {
    id: '8',
    name: 'Camera-TVM-008',
    asset_type: 'Camera',
    location: 'Vellayani Lake',
    status: 'Maintenance',
    assigned_to: 'Mike Johnson',
    latitude: 8.4333,
    longitude: 76.9833,
    created_at: '2024-01-22T09:15:00Z',
    updated_at: '2024-01-23T16:20:00Z'
  },
  {
    id: '9',
    name: 'Camera-TVM-009',
    asset_type: 'Camera',
    location: 'Neyyattinkara',
    status: 'Active',
    assigned_to: 'Sarah Wilson',
    latitude: 8.4000,
    longitude: 77.0833,
    created_at: '2024-01-23T10:45:00Z',
    updated_at: '2024-01-23T10:45:00Z'
  },
  {
    id: '10',
    name: 'Camera-TVM-010',
    asset_type: 'Camera',
    location: 'Attingal',
    status: 'Inactive',
    assigned_to: 'David Brown',
    latitude: 8.6967,
    longitude: 76.8150,
    created_at: '2024-01-24T13:20:00Z',
    updated_at: '2024-01-25T09:30:00Z'
  },
  {
    id: '11',
    name: 'Workstation-001',
    asset_type: 'Computer',
    location: 'Control Room A',
    status: 'Active',
    assigned_to: 'John Doe',
    created_at: '2024-01-10T08:00:00Z',
    updated_at: '2024-01-10T08:00:00Z'
  },
  {
    id: '12',
    name: 'Surveillance Software License',
    asset_type: 'Software',
    location: 'Server Room',
    status: 'Active',
    assigned_to: 'IT Admin',
    created_at: '2024-01-05T10:00:00Z',
    updated_at: '2024-01-05T10:00:00Z'
  }
];

export const mockUsers = [
  'John Doe',
  'Jane Smith',
  'Mike Johnson',
  'Sarah Wilson',
  'David Brown',
  'IT Admin'
];

export const mockActivityLogs: ActivityLog[] = [
  {
    id: '1',
    user: 'John Doe',
    action: 'login',
    details: 'User logged into the system',
    timestamp: '2024-01-25T09:30:00Z',
    ip_address: '192.168.1.100'
  },
  {
    id: '2',
    user: 'John Doe',
    action: 'create',
    target: 'Camera-TVM-010',
    details: 'Created new camera asset at Attingal',
    timestamp: '2024-01-25T09:35:00Z',
    ip_address: '192.168.1.100'
  },
  {
    id: '3',
    user: 'Jane Smith',
    action: 'login',
    details: 'User logged into the system',
    timestamp: '2024-01-25T10:15:00Z',
    ip_address: '192.168.1.101'
  },
  {
    id: '4',
    user: 'Jane Smith',
    action: 'update',
    target: 'Camera-TVM-003',
    details: 'Updated camera status to Maintenance',
    timestamp: '2024-01-25T10:20:00Z',
    ip_address: '192.168.1.101'
  },
  {
    id: '5',
    user: 'Mike Johnson',
    action: 'login',
    details: 'User logged into the system',
    timestamp: '2024-01-25T11:00:00Z',
    ip_address: '192.168.1.102'
  }
];