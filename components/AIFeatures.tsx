import React, { useState, useEffect } from 'react';
import { WeatherIcon, DigitalTwinIcon, AutonomousIcon, ContractIcon, CycloneIcon, FogIcon, SandstormIcon, TrackIcon, CircleCheckIcon, SpinnerIcon } from './icons/AIIcons';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const featureIcons: { [key: string]: React.ReactNode } = {
    weather: <WeatherIcon />,
    digitalTwin: <DigitalTwinIcon />,
    autonomous: <AutonomousIcon />,
    contracts: <ContractIcon />,
};

const weatherIcons: { [key: string]: React.ReactNode } = {
    cyclone: <CycloneIcon />,
    fog: <FogIcon />,
    sandstorm: <SandstormIcon />,
};

interface AIFeaturesProps {
    onTrackShipment: () => void;
    isTracking: boolean;
}

const AIFeatures: React.FC<AIFeaturesProps> = ({ onTrackShipment, isTracking }) => {
    const { language } = useLanguage();
    const t = translations[language].aiFeatures;
    
    const [currentAlertIndex, setCurrentAlertIndex] = useState(0);

    useEffect(() => {
        const alertInterval = setInterval(() => {
            setCurrentAlertIndex((prevIndex) => (prevIndex + 1) % t.weatherAlerts.length);
        }, 5000);

        return () => clearInterval(alertInterval);
    }, [t.weatherAlerts.length]);

    const currentAlert = t.weatherAlerts[currentAlertIndex];

    return (
        <section id="operations" className="bg-white dark:bg-gray-800 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-blue dark:text-white">{t.title}</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.features.map((feature) => (
                        <div key={feature.id} className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg text-center hover:bg-ocean-blue hover:text-white transition-colors duration-300 group flex flex-col">
                           <div className="inline-block p-4 bg-white dark:bg-gray-800 rounded-full mb-4 group-hover:bg-aqua-teal self-center">
                                {featureIcons[feature.id]}
                           </div>
                            <h3 className="text-xl font-bold text-navy-blue dark:text-gray-200 mb-2 group-hover:text-white flex items-center justify-center space-x-2">
                                <span>{feature.title}</span>
                                {feature.id === 'weather' && (
                                     <span className="animate-pulse bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">{t.live}</span>
                                )}
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-200 flex-grow">{feature.description}</p>
                            
                            {feature.id === 'contracts' && (
                                <div className="my-4 text-left text-sm">
                                    <ul className="space-y-2">
                                        {t.complianceChecks.map((item, i) => (
                                            <li key={i} className="flex items-center">
                                                <CircleCheckIcon className="h-4 w-4 text-green-500 group-hover:text-aqua-teal mr-2 flex-shrink-0 transition-colors" />
                                                <span className="text-gray-600 dark:text-gray-400 group-hover:text-gray-200">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                            
                            {feature.id === 'contracts' && (
                                <button 
                                    onClick={onTrackShipment}
                                    disabled={isTracking}
                                    className="mt-auto w-full flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-navy-blue bg-aqua-teal hover:bg-aqua-teal/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-aqua-teal group-hover:text-navy-blue group-hover:bg-white transition-all duration-300 transform hover:scale-105 disabled:opacity-75 disabled:cursor-wait"
                                >
                                    {isTracking ? (
                                        <>
                                            <SpinnerIcon />
                                            <span>{t.trackingShipment}</span>
                                        </>
                                    ) : (
                                        <>
                                            <TrackIcon />
                                            <span>{t.trackShipment}</span>
                                        </>
                                    )}
                                </button>
                            )}

                            {feature.id === 'weather' && (
                                <div className="mt-4 p-3 bg-white/80 dark:bg-navy-blue/50 rounded-lg text-left text-sm transition-all duration-300 group-hover:bg-white/20">
                                    <div className="flex items-start space-x-3">
                                        <div className="flex-shrink-0 text-ocean-blue group-hover:text-aqua-teal">
                                            {weatherIcons[currentAlert.id]}
                                        </div>
                                        <div>
                                            <p className="font-bold text-navy-blue dark:text-gray-200 group-hover:text-white">{currentAlert.title}: <span className="font-medium">{currentAlert.location}</span></p>
                                            <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-200">{currentAlert.impact}</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AIFeatures;