import React from 'react';
import { ShieldCheckIcon, GlobeAltIcon, TruckIcon, CpuChipIcon } from './icons/FeatureIcons';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const featureIcons: { [key: string]: React.ReactNode } = {
    location: <GlobeAltIcon />,
    infrastructure: <TruckIcon />,
    team: <ShieldCheckIcon />,
    tech: <CpuChipIcon />,
};

const WhyChooseUs: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language].whyChooseUs;
    const features = t.features;

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-blue dark:text-white">{t.title}</h2>
                    <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        {t.subtitle}
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature) => (
                        <div key={feature.id} className="bg-white dark:bg-gray-800 p-8 rounded-lg text-center shadow-md hover:shadow-xl hover:bg-ocean-blue hover:text-white transition-all duration-300 group">
                           <div className="inline-block p-4 bg-gray-100 dark:bg-gray-700 rounded-full mb-4 group-hover:bg-aqua-teal transition-colors duration-300">
                                {featureIcons[feature.id]}
                           </div>
                            <h3 className="text-xl font-bold text-navy-blue dark:text-gray-200 mb-2 group-hover:text-white">{feature.title}</h3>
                            <p className="text-gray-600 dark:text-gray-400 group-hover:text-gray-200">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;