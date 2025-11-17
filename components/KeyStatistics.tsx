import React from 'react';
import { keyStatisticsData } from '../data';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const KeyStatistics: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language].statistics;

    return (
        <section className="bg-white dark:bg-gray-800 py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {keyStatisticsData.map((stat) => (
                        <div key={stat.id} className="p-4">
                            <p className="text-4xl md:text-5xl font-bold text-ocean-blue">{stat.value}</p>
                            <p className="mt-2 text-gray-600 dark:text-gray-400 font-semibold">{t[stat.id]}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyStatistics;