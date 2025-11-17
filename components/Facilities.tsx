import React, { useState, useRef } from 'react';
import { servicesData } from '../data';
import ServiceModal from './ServiceModal';
import { Facility } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';

const Facilities: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedService, setSelectedService] = useState<Facility | null>(null);
    const { language } = useLanguage();
    const t = translations[language].services;
    const triggerButtonRef = useRef<HTMLButtonElement | null>(null);

    const handleOpenModal = (serviceId: keyof typeof t.list, event: React.MouseEvent<HTMLButtonElement>) => {
        const serviceContent = t.list[serviceId];
        const serviceStructure = servicesData.find(s => s.id === serviceId);

        if(serviceContent && serviceStructure) {
            setSelectedService({
                name: serviceContent.name,
                description: serviceContent.description,
                icon: serviceStructure.icon,
            });
            triggerButtonRef.current = event.currentTarget;
            setIsModalOpen(true);
        }
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        // Using a timeout to allow the modal to animate out before shifting focus
        setTimeout(() => {
            setSelectedService(null);
            triggerButtonRef.current?.focus();
        }, 300);
    };

    return (
        <>
            <section id="services" className="bg-gray-50 dark:bg-gray-900 py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-navy-blue dark:text-white">{t.title}</h2>
                        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                           {t.subtitle}
                        </p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {servicesData.map((service) => (
                            <div key={service.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 text-center flex flex-col items-center justify-between">
                                <div>
                                    {service.icon}
                                    <h3 className="text-md font-semibold text-ocean-blue mb-4 h-12">
                                        {t.list[service.id as keyof typeof t.list].name}
                                    </h3>
                                </div>
                                <button 
                                    onClick={(e) => handleOpenModal(service.id as keyof typeof t.list, e)}
                                    className="mt-4 text-sm font-semibold text-aqua-teal hover:text-ocean-blue transition-colors"
                                >
                                    {t.readMore} &rarr;
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <ServiceModal 
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                service={selectedService}
            />
        </>
    );
};

export default Facilities;