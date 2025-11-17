import React, { useState, useEffect } from 'react';
import { ShipmentStatus } from '../types';
import { PackageIcon, CircleCheckIcon, GooglePinIcon, SpinnerIcon } from './icons/AIIcons';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import ShipmentMap from './ShipmentMap';
import { getLocationInfo, LocationInfo } from '../services/geminiService';

interface TrackingModalProps {
    isOpen: boolean;
    onClose: () => void;
    shipmentDetails: ShipmentStatus | null;
}

const TrackingModal: React.FC<TrackingModalProps> = ({ isOpen, onClose, shipmentDetails }) => {
    const { language } = useLanguage();
    const t = translations[language].trackingModal;

    const [locationInfo, setLocationInfo] = useState<LocationInfo | null>(null);
    const [isLocationInfoLoading, setIsLocationInfoLoading] = useState(false);
    const [locationInfoError, setLocationInfoError] = useState<string | null>(null);

    useEffect(() => {
        // Reset location info when shipment changes
        setLocationInfo(null);
        setIsLocationInfoLoading(false);
        setLocationInfoError(null);
    }, [shipmentDetails?.trackingId]);


    if (!isOpen || !shipmentDetails) return null;

    const getStatusColor = (statusKey: ShipmentStatus['statusKey']) => {
        switch (statusKey) {
            case 'IN_TRANSIT': return 'text-blue-600 bg-blue-100 dark:text-blue-300 dark:bg-blue-900/30';
            case 'DELIVERED': return 'text-green-600 bg-green-100 dark:text-green-300 dark:bg-green-900/30';
            case 'DELAYED': return 'text-red-600 bg-red-100 dark:text-red-300 dark:bg-red-900/30';
            case 'AT_PORT': return 'text-yellow-600 bg-yellow-100 dark:text-yellow-300 dark:bg-yellow-900/30';
            default: return 'text-gray-600 bg-gray-100 dark:text-gray-400 dark:bg-gray-700';
        }
    }

    const handleGetLocationInfo = async () => {
        if (!shipmentDetails) return;
        setIsLocationInfoLoading(true);
        setLocationInfo(null);
        setLocationInfoError(null);
        try {
            const info = await getLocationInfo(shipmentDetails.currentLocation);
            setLocationInfo(info);
        } catch (error) {
            setLocationInfoError("Failed to fetch location insights. Please try again.");
            console.error(error);
        } finally {
            setIsLocationInfoLoading(false);
        }
    };

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 z-[100] flex items-center justify-center p-4 transition-opacity duration-300"
            onClick={onClose}
        >
            <div 
                className="bg-white dark:bg-gray-800 rounded-lg shadow-2xl w-full max-w-5xl transform transition-all duration-300 scale-95 opacity-0 animate-fade-in-scale"
                onClick={(e) => e.stopPropagation()}
                style={{animationFillMode: 'forwards', animationDuration: '0.2s'}}
            >
                {/* Header */}
                <div className="flex justify-between items-center p-5 border-b border-gray-200 dark:border-gray-700">
                    <div className="flex items-center space-x-3">
                        <PackageIcon className="h-8 w-8 text-navy-blue dark:text-aqua-teal" />
                        <div>
                            <h2 className="text-xl font-bold text-navy-blue dark:text-white">{t.title}</h2>
                            <p className="text-sm text-gray-500 dark:text-gray-400 font-mono">{shipmentDetails.trackingId}</p>
                        </div>
                    </div>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                {/* Body */}
                <div className="p-6">
                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Left Column: Map */}
                        <div className="flex flex-col">
                            <h3 className="text-lg font-semibold text-navy-blue dark:text-white mb-4">{t.routeMap}</h3>
                            <div className="flex-grow">
                                <ShipmentMap coordinates={shipmentDetails.coordinates} />
                            </div>
                        </div>

                        {/* Right Column: Details & History */}
                        <div>
                             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t.status}</p>
                                    <span className={`px-3 py-1 text-sm font-semibold rounded-full inline-block ${getStatusColor(shipmentDetails.statusKey)}`}>
                                        {t.statuses[shipmentDetails.statusKey]}
                                    </span>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t.currentLocation}</p>
                                    <div className="flex items-center justify-between">
                                        <p className="font-semibold text-gray-800 dark:text-gray-200">{shipmentDetails.currentLocation}</p>
                                        <button 
                                            onClick={handleGetLocationInfo} 
                                            disabled={isLocationInfoLoading}
                                            className="text-xs text-ocean-blue dark:text-aqua-teal hover:underline flex items-center space-x-1 disabled:opacity-50 disabled:cursor-wait"
                                        >
                                            {isLocationInfoLoading ? <SpinnerIcon /> : <GooglePinIcon className="h-4 w-4" />}
                                            <span>{t.getLocationInfo}</span>
                                        </button>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t.origin}</p>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">{shipmentDetails.origin}</p>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t.destination}</p>
                                    <p className="font-semibold text-gray-800 dark:text-gray-200">{shipmentDetails.destination}</p>
                                </div>
                                <div className="sm:col-span-2">
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">{t.estimatedDelivery}</p>
                                    <p className={`font-semibold text-lg ${shipmentDetails.statusKey === 'DELIVERED' ? 'text-green-600 dark:text-green-400' : 'text-ocean-blue dark:text-aqua-teal'}`}>{shipmentDetails.estimatedDelivery}</p>
                                </div>
                            </div>

                            {/* Location Insights Section */}
                            {(isLocationInfoLoading || locationInfo || locationInfoError) && (
                                <div className="mb-6 pb-6 border-b border-gray-200 dark:border-gray-700">
                                    <h3 className="text-lg font-semibold text-navy-blue dark:text-white mb-4">{t.locationInsightsTitle}</h3>
                                    {isLocationInfoLoading && <div className="space-y-2 animate-pulse"><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-full"></div><div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-5/6"></div></div>}
                                    {locationInfoError && <p className="text-red-500 text-sm">{locationInfoError}</p>}
                                    {locationInfo && (
                                        <div className="prose prose-sm max-w-none dark:prose-invert">
                                            <p className="whitespace-pre-wrap font-sans text-gray-800 dark:text-gray-200">{locationInfo.text}</p>
                                            {locationInfo.sources && locationInfo.sources.length > 0 && (
                                                <div className="mt-4">
                                                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-2">{t.groundingSources}</h4>
                                                    <ul className="list-disc list-inside text-sm space-y-1">
                                                        {locationInfo.sources.map((source, index) => source.maps?.uri && (
                                                            <li key={index}>
                                                                <a href={source.maps.uri} target="_blank" rel="noopener noreferrer" className="text-ocean-blue hover:underline">
                                                                    {source.maps.title || 'Google Maps Link'}
                                                                </a>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            )}
                                        </div>
                                    )}
                                </div>
                            )}

                             {/* Timeline */}
                            <div>
                                <h3 className="text-lg font-semibold text-navy-blue dark:text-white mb-4">{t.history}</h3>
                                <div className="relative border-l-2 border-aqua-teal/50 dark:border-aqua-teal/30 ml-3 max-h-60 overflow-y-auto pr-2">
                                    {shipmentDetails.updates.map((update, index) => (
                                        <div key={index} className="mb-6 ml-8">
                                            <span className={`absolute flex items-center justify-center w-6 h-6 rounded-full -left-3 ring-4 ring-white dark:ring-gray-800 transition-colors duration-300 ${index === 0 ? 'bg-aqua-teal' : 'bg-gray-400 dark:bg-gray-600'}`}>
                                                {index === 0 ? (
                                                    <CircleCheckIcon className="w-4 h-4 text-white" />
                                                ) : (
                                                    <div className="w-2 h-2 bg-white dark:bg-gray-300 rounded-full"></div>
                                                )}
                                            </span>
                                            <h4 className={`flex items-baseline mb-1 text-md font-semibold transition-colors duration-300 ${index === 0 ? 'text-navy-blue dark:text-white' : 'text-gray-700 dark:text-gray-300'}`}>
                                                {update.status}
                                                <span className="text-xs font-medium text-gray-500 dark:text-gray-400 ml-2">@ {update.location}</span>
                                            </h4>
                                            <p className="block text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{update.date}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 bg-gray-50 dark:bg-gray-900/50 text-right rounded-b-lg">
                    <button 
                        onClick={onClose}
                        className="px-5 py-2 bg-ocean-blue text-white text-sm font-semibold rounded-md hover:bg-navy-blue transition-colors"
                    >
                        {t.close}
                    </button>
                </div>
            </div>
            <style>{`
                @keyframes fade-in-scale {
                    from { transform: scale(0.95); opacity: 0; }
                    to { transform: scale(1); opacity: 1; }
                }
                .animate-fade-in-scale {
                    animation-name: fade-in-scale;
                }
            `}</style>
        </div>
    );
};

export default TrackingModal;