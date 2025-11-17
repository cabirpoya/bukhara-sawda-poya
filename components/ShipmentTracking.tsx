import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { SpinnerIcon, TrackIcon } from './icons/AIIcons';

interface ShipmentTrackingProps {
    onTrackShipment: (trackingId: string) => void;
    isTracking: boolean;
}

const ShipmentTracking: React.FC<ShipmentTrackingProps> = ({ onTrackShipment, isTracking }) => {
    const { language } = useLanguage();
    const t = translations[language].shipmentTracking;
    const [trackingId, setTrackingId] = useState('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (trackingId.trim()) {
            onTrackShipment(trackingId.trim());
        }
    };

    return (
        <section className="bg-ocean-blue py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-2xl mx-auto bg-white/10 dark:bg-navy-blue/50 p-8 rounded-lg shadow-lg backdrop-blur-sm">
                    <h2 className="text-2xl font-bold text-white text-center mb-6">{t.title}</h2>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
                        <input
                            type="text"
                            value={trackingId}
                            onChange={(e) => setTrackingId(e.target.value)}
                            placeholder={t.placeholder}
                            className="flex-grow px-4 py-3 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-800/50 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-aqua-teal transition-shadow disabled:bg-gray-200 dark:disabled:bg-gray-700 disabled:cursor-not-allowed"
                            aria-label="Tracking ID"
                            disabled={isTracking}
                        />
                        <button
                            type="submit"
                            disabled={isTracking || !trackingId.trim()}
                            className="flex items-center justify-center px-6 py-3 bg-aqua-teal text-navy-blue font-bold rounded-md hover:bg-white transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isTracking ? (
                                <>
                                    <SpinnerIcon />
                                    <span>{translations[language].aiFeatures.trackingShipment}</span>
                                </>
                            ) : (
                                <>
                                    <TrackIcon />
                                    <span>{t.button}</span>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ShipmentTracking;