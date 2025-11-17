import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { PackageIcon } from './icons/AIIcons';

interface ShipmentMapProps {
    coordinates?: { x: number; y: number };
}

const routePoints = [
    { x: 95, y: 50, labelKey: 'shanghai' }, // Shanghai
    { x: 25, y: 78, labelKey: 'karachi' }, // Karachi
    { x: 35, y: 20, labelKey: 'tashkent' }, // Tashkent
];

const routePath = "M 95 50 C 60 65, 40 90, 25 78 L 28 50 L 35 20";

const ShipmentMap: React.FC<ShipmentMapProps> = ({ coordinates }) => {
    const { language } = useLanguage();
    
    // A simple way to get labels without prop-drilling the entire t-object
    const locationLabels: { [key: string]: string } = {
        shanghai: language === 'ru' ? 'Шанхай' : 'Shanghai',
        karachi: language === 'ru' ? 'Карачи' : 'Karachi',
        tashkent: language === 'ru' ? 'Ташкент' : 'Tashkent',
    };

    return (
        <div className="w-full h-full bg-gray-100 dark:bg-gray-700 rounded-lg p-4 relative overflow-hidden border dark:border-gray-600 min-h-[300px]">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
                {/* Route Path */}
                <path d={routePath} stroke="#1BB4C4" strokeWidth="0.5" fill="none" strokeDasharray="2 2" />
                
                {/* Location Markers */}
                {routePoints.map(point => (
                    <g key={point.labelKey}>
                        <circle cx={point.x} cy={point.y} r="1.5" fill="#002E4E" className="dark:fill-gray-200" />
                        <text x={point.x + 2.5} y={point.y + 1} fontSize="4" fill="#002E4E" className="font-semibold dark:fill-gray-200" style={{ paintOrder: 'stroke', stroke: 'white', strokeWidth: '0.5px' }}>
                            {locationLabels[point.labelKey]}
                        </text>
                    </g>
                ))}
            </svg>
            
            {/* Shipment Icon */}
            {coordinates && (
                <div 
                    className="absolute top-0 left-0 text-white bg-ocean-blue rounded-full p-1 shadow-lg transition-transform duration-1000 ease-in-out flex items-center justify-center"
                    style={{ 
                        transform: `translate(${coordinates.x}%, ${coordinates.y}%) translateX(-50%) translateY(-50%)`,
                        width: '28px',
                        height: '28px',
                    }}
                >
                    <PackageIcon className="w-4 h-4" />
                </div>
            )}
        </div>
    );
};

export default ShipmentMap;