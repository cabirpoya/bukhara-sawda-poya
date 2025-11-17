import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const HeroSection: React.FC = () => {
    const { language } = useLanguage();
    const t = translations[language].hero;

    return (
        <div className="relative bg-navy-blue text-white" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1577985051167-5d5575249633?q=80&w=2070&auto=format&fit=crop)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
            <div className="absolute inset-0 bg-navy-blue opacity-70 dark:opacity-80"></div>
            <div className="relative container mx-auto px-4 py-24 md:py-32 text-center">
                <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-2 [text-shadow:1px_1px_3px_rgba(0,0,0,0.6)]">
                    {t.title_part1}
                </h1>
                <p className="text-lg md:text-xl text-aqua-teal font-semibold tracking-widest uppercase mb-6 [text-shadow:1px_1px_3px_rgba(0,0,0,0.6)]">
                    {t.title_part2}
                </p>
                <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-6 [text-shadow:1px_1px_3px_rgba(0,0,0,0.6)]">{t.subtitle}</p>
                <p className="text-lg text-gray-300 max-w-3xl mx-auto">{t.description}</p>
                <div className="mt-8">
                    <a href="#services" className="bg-aqua-teal hover:bg-opacity-90 text-navy-blue font-bold py-3 px-8 rounded-full transition-all duration-300 text-lg">
                        {t.button}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;