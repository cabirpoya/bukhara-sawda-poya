import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const AboutSection: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language].about;

    return (
        <section id="about" className="bg-white dark:bg-navy-blue py-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-navy-blue dark:text-white mb-8">{t.title}</h2>
                    <div className="text-md md:text-lg text-gray-700 dark:text-gray-300 space-y-6 text-left md:text-justify">
                        <p>{t.p1}</p>
                        <p>{t.p2}</p>
                         <p>{t.p3}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;