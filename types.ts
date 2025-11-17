// Fix: Import React to make React.ReactNode available.
import React from 'react';

// Fix: Added missing Report type.
export interface Report {
  id: number | string;
  publishDate: string;
  description: string;
  downloadUrl: string;
}

export interface Facility {
  name: string;
  icon: React.ReactNode; // Using ReactNode for SVG icons
  description: string;
}

export interface Vessel {
  shipName: string;
  pqaRegNo: string;
  loa: number;
  commodity: string;
  manifestQty: string;
  draftAft: number;
  draftFwd: number;
  eta_etd_etb: string;
  shipAgentName: string;
  berth: string;
}

export interface ShiftingVessel extends Omit<Vessel, 'eta_etd_etb' | 'berth'> {
    shiftingTime: string;
    fromBerth: string;
    toBerth: string;
}

export interface ShipmentStatus {
  trackingId: string;
  statusKey: 'IN_TRANSIT' | 'DELIVERED' | 'DELAYED' | 'AT_PORT';
  currentLocation: string;
  origin: string;
  destination: string;
  estimatedDelivery: string;
  updates: {
    date: string;
    status: string;
    location: string;
  }[];
  coordinates?: { x: number; y: number };
}