import React from 'react';
import { TerminalIcon, ShipIcon, CraneIcon, TrainIcon, WarehouseIcon, ChartBarIcon } from './components/icons/FacilityIcons';
import { Report } from './types';

export const servicesData = [
    { 
        id: 'freightForwarding', 
        icon: React.createElement(ShipIcon)
    },
    { 
        id: 'warehousing', 
        icon: React.createElement(WarehouseIcon)
    },
    { 
        id: 'customsBrokerage', 
        icon: React.createElement(TerminalIcon)
    },
    { 
        id: 'roadRailTransport', 
        icon: React.createElement(TrainIcon)
    },
    { 
        id: 'projectCargo', 
        icon: React.createElement(CraneIcon)
    },
    { 
        id: 'supplyChainConsulting', 
        icon: React.createElement(ChartBarIcon)
    },
];

export const keyStatisticsData = [
    { id: 'experience', value: '20+' },
    { id: 'partners', value: '500+' },
    { id: 'shipped', value: '1M+' },
    { id: 'delivery', value: '99%' },
];

export const reportsData: Report[] = [
    { id: 1, publishDate: 'July 25, 2024', description: 'Daily Shipping Report - 12 vessels handled, 5 arrived, 7 sailed.', downloadUrl: '#' },
    { id: 2, publishDate: 'July 24, 2024', description: 'Cargo Operations Summary - 150,000 tonnes of container cargo processed.', downloadUrl: '#' },
    { id: 3, publishDate: 'July 23, 2024', description: 'Vessel Movement Log - Including LNG tanker Al-Khattiya.', downloadUrl: '#' },
    { id: 4, publishDate: 'July 22, 2024', description: 'Daily Shipping Report - Berth occupancy at 85%.', downloadUrl: '#' },
    { id: 5, publishDate: 'July 21, 2024', description: 'Cargo Operations - Record handling of edible oil imports.', downloadUrl: '#' },
    { id: 6, publishDate: 'July 20, 2024', description: 'Vessel Movement Log - 10 new arrivals, including container ship MSC Istanbul.', downloadUrl: '#' },
    { id: 7, publishDate: 'July 19, 2024', description: 'Daily Shipping Report - Minor delays due to weather.', downloadUrl: '#' },
    { id: 8, publishDate: 'July 18, 2024', description: 'Cargo Operations Summary - 120,000 tonnes total cargo handled.', downloadUrl: '#' },
    { id: 9, publishDate: 'July 17, 2024', description: 'Vessel Movement Log - Departure of bulk carrier "Ocean Harmony".', downloadUrl: '#' },
    { id: 10, publishDate: 'July 16, 2024', description: 'Daily Shipping Report - All operations normal.', downloadUrl: '#' },
    { id: 11, publishDate: 'July 15, 2024', description: 'Cargo Operations - Focus on coal and clinker exports.', downloadUrl: '#' },
    { id: 12, publishDate: 'July 14, 2024', description: 'Vessel Movement Log - Arrival of car carrier "Gracious Ace".', downloadUrl: '#' },
    { id: 13, publishDate: 'July 13, 2024', description: 'Daily Shipping Report - 14 vessels handled, high container traffic.', downloadUrl: '#' },
    { id: 14, publishDate: 'July 12, 2024', description: 'Cargo Operations Summary - Strong performance in container segment.', downloadUrl: '#' },
    { id: 15, publishDate: 'July 11, 2024', description: 'Vessel Movement Log - Shifting operations for 3 vessels.', downloadUrl: '#' },
];